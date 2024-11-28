import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  Nots: localStorage.getItem("Nots")
    ? JSON.parse(localStorage.getItem("Nots"))
    : [],
};

export const NotSlice = createSlice({
  name: "Not",
  initialState,
  reducers: {
    addToNots: (state, action) => {
      const Not = action.payload;
      //add a check if exist
      state.Nots.push(Not);
      localStorage.setItem("Nots", JSON.stringify(state.Nots));

      toast("Paste Created Successfully");
    },

    updateToNots: (state, action) => {
      const Not = action.payload;
      const index = state.Nots.findIndex((item) => item._id === Not._id);

      if (index >= 0) {
        state.Nots[index] = Not;

        localStorage.setItem("Nots", JSON.stringify(state.Nots));

        toast.success("Note Updated");
      }
    },
    resetAllNots: (state, action) => {
      state.Nots = [];

      localStorage.removeItem("Nots");
    },
    removeFromNots: (state, action) => {
      const NotId = action.payload;
      
      const index = state.Nots.findIndex((item) => item._id === NotId);

      if (index >= 0) {
        state.Nots.splice(index, 1);

        localStorage.setItem("Nots", JSON.stringify(state.Nots));

        toast.success("Note Deleted");
      }
    },
  },
});

export const { addToNots, updateToNots, resetToNots, removeFromNots } =
  NotSlice.actions;

export default NotSlice.reducer;
