import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RepoState {
  repoName: string;
}

const initialState: RepoState = {
  // *unfinished
  repoName: "",
};

export const repositorySlice = createSlice({
  name: "repository",
  initialState,
  reducers: {
    setRepoName: (state, action: PayloadAction<string>) => {
      state.repoName = action.payload;
    },
  },
});

export const { setRepoName } = repositorySlice.actions;

export default repositorySlice.reducer;
