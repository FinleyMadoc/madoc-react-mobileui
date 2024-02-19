import { AxiosRequestConfig, AxiosError } from 'axios';
import { SWRInfiniteConfiguration, SWRInfiniteResponse } from 'swr/infinite';
interface Return<Data, Error>
  extends Pick<
    SWRInfiniteResponse<Response<Data>, AxiosError<Error>>,
    'isValidating' | 'error' | 'mutate' | 'size' | 'setSize'
  > {
  data: Data[] | undefined;
  response: Response<Data>[] | undefined;
}
interface Response<Data> {
  code: number;
  data: Data;
  msg: string;
}
export interface Config<Data = unknown, Error = unknown>
  extends Omit<SWRInfiniteConfiguration<Response<Data>, AxiosError<Error>>, 'fallbackData'> {
  fallbackData?: Data[];
}
declare function useRequestInfinite<Data = unknown, Error = unknown>(
  request: AxiosRequestConfig,
  { fallbackData, ...config }?: Config<Data, Error>
): Return<Data, Error>;
export default useRequestInfinite;
