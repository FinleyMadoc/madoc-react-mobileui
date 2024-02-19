import { SWRConfiguration, SWRResponse } from 'swr';
import { AxiosRequestConfig, AxiosError } from 'axios';
interface Return<Data, Error>
  extends Pick<SWRResponse<Response<Data>, AxiosError<Error>>, 'isValidating' | 'error' | 'mutate'> {
  data: Data | undefined;
  response: Response<Data> | undefined;
}
interface Config<Data = unknown, Error = unknown>
  extends Omit<SWRConfiguration<Response<Data>, AxiosError<Error>>, 'fallbackData'> {
  fallbackData?: Data;
}
interface Response<Data> {
  code: number;
  data: Data;
  msg: string;
}
declare function useRequest<Data = unknown, Error = unknown>(
  request: AxiosRequestConfig,
  { fallbackData, ...config }?: Config<Data, Error>
): Return<Data, Error>;
export default useRequest;
