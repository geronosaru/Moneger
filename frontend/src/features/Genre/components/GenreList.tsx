import type React from "react";
import DeleteConfirmDialog from "../../../app/components/DeleteConfirmDialog";
import GenreItem from "./GenreItem";
import { deleteGenre, fetchGenres } from "../api/genreApi";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect, useState } from "react";


const GenreList: React.FC = () => {
  const genres = useAppSelector((state) => state.genre.genres);
  const dispatch = useAppDispatch();
  const [editingGenreId, setEditingGenreId] = useState<number | null>(null);
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(null);
  const [selectedGenreName, setSelectedGenreName] = useState<string>("");

  const clearSelection = () => {
    setSelectedGenreId(null);
    setSelectedGenreName("");
  };

  const handleDelete = async(id: number) => {
    await dispatch(deleteGenre(id));
    clearSelection();
    dispatch(fetchGenres());
  };

  useEffect(() => {
    dispatch(fetchGenres());
  }, []);

  return(
    <div className="size-96">
      <ul className="h-full w-full p-3 flex flex-col justify-center items-start space-y-2 overflow-auto">
        {genres !== undefined && (genres.map((genre) => (
          <GenreItem
            key={genre.id}
            genre={genre}
            isEditing={editingGenreId === genre.id}
            onEdit={() => setEditingGenreId(genre.id)}
            setEditingGenreId={setEditingGenreId}
            onOpenDeleteDialog={() => {
              setSelectedGenreId(genre.id);
              setSelectedGenreName(genre.name);
            }}
          />
        )))}
      </ul>
      {
        selectedGenreId !== null && (
          <DeleteConfirmDialog
            deleteGenreId={selectedGenreId}
            deleteGenreName={selectedGenreName}
            onConfirm={() => handleDelete(selectedGenreId)}
            onCancel={clearSelection}
          />
        )
      }
    </div>
  );
}


export default GenreList;