import { createSlice } from "@reduxjs/toolkit";
import type { Genre } from "./types"
import { deleteGenre, editGenre, fetchGenres } from "./api/genreApi";


type GenreState = {
  genres: Genre[] | undefined;
  status: 'idle' | 'pendding' | 'successful' | 'failed';
  errors: undefined | string;
}

const initialState: GenreState = {
  genres: [],
  status: 'idle',
  errors: undefined
}

const genreSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    // ジャンル一覧取得
    .addCase(fetchGenres.pending, (state) => {
      state.status = 'pendding'
    })
    .addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload
      state.status = 'successful'
    })
    .addCase(fetchGenres.rejected, (state, action) => {
      state.status = 'failed'
      state.errors = action.error.message
    })
    // ジャンル変更
    .addCase(editGenre.pending, (state) => {
      state.status = 'pendding'
    })
    .addCase(editGenre.fulfilled, (state, action) => {
      if(!state.genres){
        state.genres = action.payload
      }else{
        state.genres = state.genres.map((genre) => {
          if(genre.id === action.payload.id){
            return action.payload
          }else{
            return {...genre}
          }
        })
      }
      state.status = 'successful'
    })
    .addCase(editGenre.rejected, (state, action) => {
      state.status = 'failed'
      state.errors = action.error.message
    })
    // ジャンル削除
    .addCase(deleteGenre.pending, (state) => {
      state.status = 'pendding'
    })
    .addCase(deleteGenre.fulfilled, (state, action) => {
      if(!state.genres){
        return undefined
      }else{
        state.genres = state.genres.filter((genre) => {
          return genre.id !== action.payload
        })
      }
    })
    .addCase(deleteGenre.rejected, (state) => {
      state.status = 'failed'
    })
  }
})

const genreReducer = genreSlice.reducer;


export { genreReducer }