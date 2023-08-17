/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { GiphyCall } from "../services/Calls";
import { GifData } from "../interfaces/gifs.interfaces";
interface Props {
  term?: string;
}

const GiphyContainer: React.FC<Props> = ({ term }) => {
  const [gifData, setGifData] = useState<GifData>();
  const SearchGif = async () => {
    const response = await GiphyCall(term?.toLowerCase());
    setGifData(response);
  };
  useEffect(() => {
    SearchGif();
  }, [term]);
  return (
    <div className="mx-auto mt-5">
      <h2 className="text-white text-center">
        Actual Gif: {gifData?.title || "No title"}
      </h2>
      <section
        className="mx-auto mt-5 border-3 border-white shadow-lg w-75"
        style={{
          height: "500px",
        }}
      >
        {gifData?.images && (
          <img
            srcSet={gifData?.images.original.url}
            className="w-100 h-100"
            alt=""
          />
        )}
        <div className="text-white d-flex justify-content-center align-items-center h-100">
          <h2>No Image</h2>
        </div>
      </section>
    </div>
  );
};

export default GiphyContainer;
