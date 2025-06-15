import type React from "react";
import type { TransactionForm } from "../schema/transactionFormSchema";
import * as Tabs from "@radix-ui/react-tabs";
import { useFormContext } from "react-hook-form";
import { useAppSelector } from "../../../app/hooks";
import { PaperClipIcon } from "../../../components/ui/Icons";


type TabContentProps = {
  value: "income" | "expense";
  type: "income" | "expense";
  setImageFile?: React.Dispatch<React.SetStateAction<File | null>>;
};

const TabContent: React.FC<TabContentProps> = ({value, type, setImageFile}) => {
  const {
    register,
    formState: {errors},
  } = useFormContext<TransactionForm>();
  const genres = useAppSelector((state) => state.genre.genres);

  return(
    <Tabs.Content value={value} className="h-full w-full p-2 bg-white shadow-lg">
      <div className="h-full w-full flex flex-col space-y-3 p-5">
        <div className="flex space-x-10 mb-4">
          <div className="w-1/2">
            <label className="block mb-1">日付</label>
            <input
              type="date"
              className="w-full p-2 rounded-md border border-slate-300"
              {...register("date")}
            />
            {errors.date && <p>{errors.date.message}</p>}
          </div>
          <div className="w-1/2">
            <label className="block mb-1">金額</label>
            <input
              type="number"
              className="w-full p-2 rounded-md border border-slate-300"
              {...register("amount", {valueAsNumber: true})}
            />
            {errors.amount && <p>{errors.amount.message}</p>}
          </div>
        </div>

        <div className="flex space-x-10 mb-4">
          <div className="w-1/2">
            <label className="block mb-1">ジャンル</label>
            <select
              className="w-full p-2 rounded-md border border-slate-300"
              {...register("genre_id", {valueAsNumber: true})}
            >
              {
                genres?.map((genre) => (
                  <option key={genre.id} value={genre.id}>
                    {genre.name}
                  </option>
                ))
              }
            </select>
            {errors.genre_id && <p>{errors.genre_id.message}</p>}
          </div>
          <div className={`${type === 'income' ? 'w-1/2' : 'h-0 w-0'}`}>
            <input
              type="hidden"
              className="w-full p-2 rounded-md border border-slate-300"
              {...register("type")}
            />
          </div>
          
          {type === 'expense' && (
            <div className="w-1/2">
              <label className="block mb-1">画像</label>
              <div className="flex items-center">
                <PaperClipIcon />
                <input
                  type="file"
                  className="w-full p-2 rounded-md text-white bg-slate-600"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if(file && setImageFile) {
                      setImageFile(file)
                    }
                  }}
                />
              </div>
            </div>
          )}

        </div>

        <div className="mb-4">
          <label className="block mb-1">メモ</label>
          <textarea
            className="w-full p-2 rounded-md border border-slate-300"
            {...register("memo")}
          />
          {errors.memo && <p>{errors.memo.message}</p>}
        </div>

        <div className="flex justify-center">
          <button className={`w-32 py-2 text-white ${type === 'income' ? "bg-cyan-200" : "bg-red-200"} font-bold rounded-md`}>
            登録
          </button>
        </div>
      </div>
    </Tabs.Content>
  );
};


export default TabContent;