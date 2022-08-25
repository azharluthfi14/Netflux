import { useState } from "react";

const Featured = ({ type, genre }) => {
  const [content, setContent] = useState({});
  return (
    <div className="relative h-[90vh]">
      {type && (
        <div className="absolute top-[80px] left-[50px] flex items-center">
          <span className="text-3xl text-white mr-5">
            {type === "movies" ? "Movies" : "Series"}
          </span>
          <select
            name="genre"
            id="genre"
            className="cursor-pointer bg-black text-white p-1.5 border border-white"
            onChange={(e) => setGenre(e.target.value)}
          >
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt="content-cover-featured"
        className="w-full h-full object-cover"
      />
      <div className="w-[35%] absolute flex flex-col left-[50px] bottom-[100px] text-white">
        <span className="my-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ipsum
          consequatur voluptatibus velit fugiat quaerat sapiente? Expedita
          tempore natus reiciendis.
        </span>
        <div className="flex gap-4">
          <button
            className="py-3 px-5 space-x-2 rounded-lg bg-white text-neutral-900
          flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                clipRule="evenodd"
              />
            </svg>
            <span>Play</span>
          </button>
          <button
            className="py-3 px-5 space-x-2 rounded-lg bg-white text-neutral-900
          flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
            </svg>

            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
