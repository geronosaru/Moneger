import type React from "react";
import dayjs from 'dayjs';
import Template from "../../../app/components/Template";
import TabTrigger from "../components/TabTrigger";
import TabContent from "../components/TabContent";
import * as Tabs from "@radix-ui/react-tabs";
import { fetchGenres } from "../../Genre/api/genreApi";
import { storeExpensePhoto, storeTransaction } from "../api/transactionApi";
import { setFormData } from "../slices/tempSlice";
import { transactionForm, type TransactionForm } from "../schema/transactionFormSchema";
import { FormProvider, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { zodResolver } from "@hookform/resolvers/zod";



const TransactionStorePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.tempTransactionForm.data);
  const [tabValue, setTabValue] = useState<"income" | "expense">("expense");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const safeFormData: Partial<TransactionForm> = {
    genre_id: formData?.genre_id,
    type: formData?.type,
    date: formData?.date,
    amount: formData?.amount,
    memo: formData?.memo
  };

  const completeFormData = (tabValue: "income" | "expense", data?: Partial<TransactionForm>): TransactionForm => {
    return {
      genre_id: data?.genre_id ?? 0,
      type: data?.type ?? tabValue,
      date: data?.date ?? dayjs(new Date()).format('YYYY-MM-DD HH:MM'),
      amount: data?.amount ?? 0,
      memo: data?.memo ?? '',
    };
  }
  const defaultValues = completeFormData(tabValue, safeFormData);
  const methods = useForm<TransactionForm>({
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
      methods.reset();
      setImageFile(null);
    }catch(e){
      console.error('画像を保存できませんでした', e);
    }
  };

  useEffect(() => {
    const subscription = methods.watch((value) => {
      dispatch(setFormData(value));
    });
    dispatch(fetchGenres());
    return () => subscription.unsubscribe();
  }, [methods.watch, dispatch]);

  return (
    <>
      <Template isMenu selectDomain={"支出管理"}>
        <div className="h-full w-full flex flex-col p-10">
          <div className="h-1/12 w-full">
            <h1 className="text-2xl font-bold">収支登録</h1>
          </div>

          <div className="flex-1 h-full w-full flex justify-center items-center">
            <FormProvider {...methods}>
              <form
                className="w-7/12 rounded-sm p-6"
                onSubmit={methods.handleSubmit(onSubmit)}
              >
                <Tabs.Root
                  defaultValue="expense"
                  value={tabValue}
                  onValueChange={(value) => {
                    const newType = value as "income" | "expense";
                    setTabValue(newType);
                    methods.setValue("type", newType);
                  }}
                >
                  <Tabs.List className="flex justify-between space-x-2 border-b text-white font-bold">
                    <TabTrigger value="income" title="収入" />
                    <TabTrigger value="expense" title="支出" />
                  </Tabs.List>

                  <TabContent value="income" type="income" />
                  <TabContent value="expense" type="expense" setImageFile={setImageFile} />
                </Tabs.Root>
              </form>
            </FormProvider>
          </div>
        </div>
      </Template>
    </>
  );
};


export default TransactionStorePage;