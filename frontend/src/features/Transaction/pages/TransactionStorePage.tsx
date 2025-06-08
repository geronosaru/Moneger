import type React from "react";
import Template from "../../../app/components/Template";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { transactionForm, type TransactionForm } from "../schema/transactionFormSchema";
import { useEffect, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchGenres } from "../../Genre/api/genreApi";
import { storeExpensePhoto, storeTransaction } from "../api/transactionApi";
import { setFormData } from "../slices/tempSlice";
import dayjs from 'dayjs';


const TransactionStorePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const genres = useAppSelector((state) => state.genre.genres);
  const formData = useAppSelector((state) => state.tempTransactionForm.data); // Partial<TransactionForm>
  const [tabValue, setTabValue] = useState<"income" | "expense">("expense");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const safeFormData: Partial<TransactionForm> = {
    genre_id: formData?.genre_id,
    type: formData?.type,
    date: formData?.date,
    amount: formData?.amount,
    memo: formData?.memo
  };

  function completeFormData(tabValue: "income" | "expense", data?: Partial<TransactionForm>): TransactionForm {
    return {
      type: data?.type ?? tabValue,
      date: data?.date ?? dayjs(new Date()).format('YYYY-MM-DD HH:MM'),
      amount: data?.amount ?? 0,
      genre_id: data?.genre_id ?? 0,
      memo: data?.memo ?? '',
    };
  }


  const defaultValues = completeFormData(tabValue, safeFormData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm<TransactionForm>({
    resolver: zodResolver(transactionForm),
    defaultValues
  });

  const onSubmit = async(data: TransactionForm) => {
    try{
      const response = await dispatch(storeTransaction(data)).unwrap();
      const transactionId = response.id;

      if(imageFile){
        storeExpensePhoto(transactionId, imageFile)
      }

      reset();
      setImageFile(null);
    }catch(e){
      console.error('画像を保存できませんでした', e);
    }
  }

  useEffect(() => {
    const subscription = watch((value) => {
      dispatch(setFormData(value));
    });
    dispatch(fetchGenres());
    return () => subscription.unsubscribe();
  }, [watch, dispatch]);

  return (
    <>
      <Template isMenu selectDomain={"支出管理"}>
        <div className="h-full w-full flex flex-col p-10">
          <div className="h-1/12 w-full">
            <h1 className="text-2xl font-bold">収支登録</h1>
          </div>

          <div className="flex-1 h-full w-full flex justify-center items-center">
            <form
              className="w-7/12 rounded-sm p-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Tabs.Root
                defaultValue="expense"
                value={tabValue}
                onValueChange={(value) => {
                  const newType = value as "income" | "expense";
                  setTabValue(newType);
                  setValue("type", newType);
                }}
              >
                <Tabs.List className="flex justify-between space-x-2 border-b text-white font-bold">
                  <Tabs.Trigger value="income" className="px-4 py-2 w-1/2 rounded-t bg-gray-300 data-[state=active]:bg-cyan-200 transition-all duration-300">
                    収入
                  </Tabs.Trigger>
                  <Tabs.Trigger value="expense" className="px-4 py-2 w-1/2 rounded-t bg-gray-300 data-[state=active]:bg-red-200 transition-all duration-300">
                    支出
                  </Tabs.Trigger>
                </Tabs.List>

                {/* 収入 */}
                <Tabs.Content value="income" className="h-full w-full p-2 bg-white shadow-lg">
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
                      <div className="w-1/2">
                        <input
                          type="hidden"
                          className="w-full p-2 rounded-md border border-slate-300"
                          {...register("type")}
                        />
                      </div>
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
                      <button className="w-32 py-2 text-white bg-cyan-200 font-bold rounded-md">
                        登録
                      </button>
                    </div>
                  </div>
                </Tabs.Content>

                {/* 支出 */}
                <Tabs.Content value="expense" className="h-full w-full p-2 bg-white shadow-lg">
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
                      <div className="w-1/2">
                        <label className="block mb-1">画像</label>
                        <div className="flex items-center">
                          <svg className="w-6 h-6 text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"/>
                          </svg>
                          <input
                            type="file"
                            className="w-full p-2 rounded-md text-white bg-slate-600"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if(file) {
                                setImageFile(file)
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="h-0 w-0">
                      <input
                          type="hidden"
                          className="w-full p-2 rounded-md border border-slate-300"
                          {...register("type")}
                        />
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
                      <button className="w-32 py-2 text-white bg-red-200 font-bold rounded-md">
                        登録
                      </button>
                    </div>
                  </div>

                </Tabs.Content>
              </Tabs.Root>
            </form>
          </div>
        </div>
      </Template>
    </>
  );
};

export default TransactionStorePage;
