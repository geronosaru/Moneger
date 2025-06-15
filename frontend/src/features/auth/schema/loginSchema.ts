import { z } from "zod";


const loginForm = z.object({
  'email': z.string().email(),
  'password': z.string().min(10,'10文字以上12文字以下で入力してください').max(12,'10文字以上12文字以下で入力してください')
});

type LoginForm = z.infer<typeof loginForm>;


export { loginForm };
export type { LoginForm };