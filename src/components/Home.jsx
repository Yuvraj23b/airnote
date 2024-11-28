import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToNots, updateToNots } from "../NotSlice";

export const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  const NotId = searchParams.get("NotId");

  const dispatch = useDispatch();
  const allNots = useSelector((state) => state.Not.Nots);

  useEffect(() => {
    if (NotId) {
      const Not = allNots.find((p) => p._id === NotId);
      setTitle(Not.title);
      setValue(Not.content);
    }
  }, [NotId]);

  function createNots() {
    const Not = {
      title: title,
      content: value,
      _id: NotId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (NotId) {
      dispatch(updateToNots(Not));
    } else {
      //crreate
      dispatch(addToNots(Not));
    }

    //after creation and updation

    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div>
      <div className="flex flex-row gap-7 place-content-between wholehome homeinput">
        <input
          className="p-1 rounded-2xl mt-2 w-[66%] pl-4 "
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button className="p-2 rounded-2xl mt-2 homebtn" onClick={createNots}>
          {NotId ? "update My Note" : "Create My Note"}
        </button>
      </div>

      <div className="mt-8 hometextarea">
        <textarea
          className=" rounded mt-4, min-w-[500px] p-4 "
          value={value}
          placeholder="enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
      <div>
        <a
          href="https://triumphs.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Airnote By Dhanraj{" "}
        </a>
      </div>
    </div>
  );
};
