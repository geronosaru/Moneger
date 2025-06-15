import type React from "react";
import type { Genre } from "../types";
import GenreForm from "./GenreForm";
import { EditIcon, TrashBinIcon } from "../../../components/ui/Icons";


type GenreItemProps = {
  genre: Genre;
  isEditing: boolean;
  onEdit: () => void;
  setEditingGenreId: React.Dispatch<React.SetStateAction<number | null>>;
  onOpenDeleteDialog: () => void;
};

const GenreItem: React.FC<GenreItemProps> = ({
  genre,
  isEditing,
  onEdit,
  setEditingGenreId,
  onOpenDeleteDialog,
}) => {
  if(isEditing){
    return(
      <li
        key={genre.id}
        className="h-10 w-full p-1 flex justify-between items-center rounded-sm shadow-sm bg-white"
      >
        <GenreForm
          genreId={genre.id}
          defaultName={genre.name}
          setEditingGenreId={setEditingGenreId}
        />
      </li>
    );
  }

  return(
    <li
      key={genre.id}
      className="h-10 w-full p-1 flex justify-between items-center rounded-sm shadow-sm bg-white"
    >
      <p className="h-full w-2/3 flex justify-start items-center">{genre.name}</p>
      {!genre.is_default && (
        <div className="h-full w-1/3 flex justify-end items-center">
          <div onClick={onEdit}>
            <EditIcon />
          </div>
          <div onClick={onOpenDeleteDialog}>
            <TrashBinIcon />
          </div>
        </div>
      )}
    </li>
  );
}


export default GenreItem;