type Transaction = {
  id: number;
  user_id: number;
  genre_id: number;
  type: "income" | "expense";
  amount: number;
  date: string;
  memo?: string;
}


export type {Transaction}