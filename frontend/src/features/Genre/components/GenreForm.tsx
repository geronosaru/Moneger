import type React from "react";
import { editGenre } from "../api/genreApi";
import { genreFormSchema, type GenreFormType } from "../schema/genreFormSchema";
import { useAppDispatch } from "../../../app/hooks";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


type GenreFormProps = {
  genreId: number;
  defaultName: string;
  setEditingGenreId: React.Dispatch<React.SetStateAction<number | null>>;
};

const GenreForm: React.FC<GenreFormProps> = ({
  genreId, 
  defaultName, 
  setEditingGenreId
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue
  } = useForm<GenreFormType>({
    resolver: zodResolver(genreFormSchema)
  });
  const dispatch = useAppDispatch();
  
  const onSubmit = (data: GenreFormType) => {
    const arg = {
      data: data,
      id:genreId
    };
    dispatch(editGenre(arg));
    reset();
    setEditingGenreId(null);
  };

  useEffect(() => {
    setValue("name", defaultName)
  },[]);

  return(
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-full w-full flex justify-between items-center"
      >
        <div className="h-full w-4/5 flex flex-col">
          <input 
            type="text"
            className="h-full w-full border-2 border-bg-slate-400 rounded-lg"
            {...register('name')}
          />
          {errors.name && <p className="text-red-400">{errors.name.message}</p>}
        </div>

        <div className="flex-1 h-hull w-full flex justify-end items-center">
          <button className="h-4/5 bg-purple-400 rounded-md shadow-sm">
            変更
          </button>
        </div>
      </form>
    </>
  )
};


export default GenreForm;