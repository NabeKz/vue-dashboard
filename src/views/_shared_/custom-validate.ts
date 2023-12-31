import { z } from "zod"

/** superrefineに渡すバリデーションメソッド */
type Refinement<Value> = (value: Value, ctx: z.RefinementCtx) => void
/** カスタムバリデーション
 * @see https://zenn.dev/wintyo/articles/6122304cb56c86#%E3%82%AB%E3%82%B9%E3%82%BF%E3%83%A0%E3%83%AB%E3%83%BC%E3%83%AB%E3%81%AE%E6%8C%87%E5%AE%9A%E3%81%AE%E3%81%97%E3%82%84%E3%81%99%E3%81%95
 */
export const required = (): Refinement<string> => {
  return (value, ctx) => {
    console.log(ctx)
    if (!value.length) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `必須入力です`
      })
    }
  }
}
