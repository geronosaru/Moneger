import { z } from "zod";


const genreFormSchema = z.object({
  'name': z.string().max(20,'20字以内で入力してください')
})

type GenreFormType = z.infer<typeof genreFormSchema>


export { genreFormSchema }
export type { GenreFormType }