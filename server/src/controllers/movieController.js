import MovieSchema from "../models/movie.js";

// Add movie
export const addMovie = async (req, res, next) => {
  const newMovie = new MovieSchema(req.body);
  try {
    const saveMovie = await newMovie.save();
    res.status(201).send(saveMovie);
  } catch (error) {
    next();
    console.log(error);
  }
};

// Update movie
export const updateMovie = async (req, res, next) => {
  try {
    const dataMovie = await MovieSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).send(dataMovie);
  } catch (error) {
    next();
    console.log(error);
  }
};

// Get movie by id
export const getMovie = async (req, res, next) => {
  try {
    const movie = await MovieSchema.findById(req.params.id);
    res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Delete movie
export const deleteMovie = async (req, res, next) => {
  try {
    await MovieSchema.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Movie has been deleted" });
  } catch (error) {
    console.log(error);
    next();
  }
};

// Get All movie
export const getMovies = async (req, res, next) => {
  try {
    const movies = await MovieSchema.find();
    res.status(200).send(movies.reverse());
  } catch (error) {
    console.log(error);
    next();
  }
};

// Get random movie by type series or not
export const getRandomMovie = async (req, res, next) => {
  const type = req.query.type;
  let movie;
  try {
    if (type === "series") {
      movie = await MovieSchema.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } },
      ]);
    } else {
      movie = await MovieSchema.aggregate([
        { $match: { isSeries: false } },
        { $sample: { size: 1 } },
      ]);
    }
    res.status(200).send(movie);
  } catch (error) {
    console.log(error);
    next();
  }
};
