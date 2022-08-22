import ListSchema from "../models/list.js";

// Create list for movie
export const createList = async (req, res, next) => {
  const newList = new ListSchema(req.body);
  try {
    const savedList = await newList.save();
    res.status(201).send(savedList);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get List by type and genre
export const getQueryList = async (req, res, next) => {
  const typeQ = req.query.type;
  const genreQ = req.query.genre;
  let list = [];

  try {
    if (typeQ) {
      if (genreQ) {
        list = await ListSchema.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQ, genre: genreQ } },
        ]);
      } else {
        list = await ListSchema.aggregate([
          { $sample: { size: 10 } },
          { $match: { type: typeQ } },
        ]);
      }
    } else {
      list = await ListSchema.aggregate([{ $sample: { size: 10 } }]);
    }
    res.status(200).send(list);
  } catch (error) {
    console.log(error);
    next();
  }
};

// Delete List
export const deleteList = async (req, res, next) => {
  try {
    await ListSchema.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "List has been deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
