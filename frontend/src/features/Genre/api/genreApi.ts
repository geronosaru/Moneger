import type { GenreFormType } from "../schema/genreFormSchema";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const BASE_URL = 'http://localhost/api/genres';

/**ジャンル一覧取得 */
const fetchGenres = createAsyncThunk('/genres/fetchGenres', async() => {
  const response = await axios.get(BASE_URL);
  return response.data.genres
});

/**ジャンル変更 */
const editGenre = createAsyncThunk('/genres/editGenre', async(data:{data: GenreFormType, id: number}) => {
  const response = await axios.patch(`${BASE_URL}/${data.id}`, data.data);
  return response.data.genre
});

/**ジャンル削除 */
const deleteGenre = createAsyncThunk('genres/deleteGenre', async(id: number) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data.genre_id
});


export { fetchGenres, editGenre, deleteGenre };