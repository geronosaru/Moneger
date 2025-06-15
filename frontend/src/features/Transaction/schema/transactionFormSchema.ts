import { z } from "zod";


const transactionForm = z.object({
  genre_id: z.number(),
  type: z.enum(['income', 'expense'], {
    errorMap: () => ({message: "収支の種類は'income'または'expense'にしてください"}),
  }),
  amount: z.number().min(0, '金額は0以上で入力して下さい'),
  date: z.string().refine(val => /^\d{4}-\d{2}-\d{2}$/.test(val), {
    message: "日付の形式が正しくありません"
  }),
  memo: z.string().max(255, "255文字以内で入力してください")
});

type TransactionForm = z.infer<typeof transactionForm>;


export type { TransactionForm };
export { transactionForm };