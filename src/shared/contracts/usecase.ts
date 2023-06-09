import { Result } from "./result";

export interface UseCase<PayloadType, ResultType> {
  execute: (payload: PayloadType) => Promise<Result<ResultType>>;
}
