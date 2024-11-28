import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromNots } from "../NotSlice";
import toast from "react-hot-toast";

export const Not = () => {
  const Nots = useSelector((state) => state.Not.Nots);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = Nots.filter((Not) =>
    Not.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(NotId) {
    dispatch(removeFromNots(NotId));
  }

  function handleShare(NotId) {
    const shareUrl = `${window.location.origin}/note/${NotId}`;
    navigator.clipboard.writeText(shareUrl);
    toast.success("Link copied to clipboard!");
  }

  return (
    <div>
      <input
        className="p-2 rounded-2xl min-w-[300px] mt-5 items-center notesearch"
        type="search"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col gap-5 mt-5  items-center notebox">
        {filteredData.length > 0 &&
          filteredData.map((Not) => {
            return (
              <div className="border rounded-2xl" key={Not?._id}>
                <div>{Not.title}</div>
                <div>{Not.content}</div>
                <div className="flex flex-row gap-4 place-content-evenly">
                  <button>
                    <a href={`/?NotId=${Not?._id}`}>Edit</a>
                  </button>

                  <button onClick={() => handleDelete(Not?._id)}>Delete</button>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(Not?.content);
                      toast.success("copied to clipboard");
                    }}
                  >
                    Copy
                  </button>
                  <button onClick={() => handleShare(Not?.id)}>Share</button>
                </div>
                <div className="notebox">
                 
                  <div className="date">{Not.createdAt}</div>
                </div>
                
              </div>
              
            );
          })}
      </div>
      
    </div>
  );
};
