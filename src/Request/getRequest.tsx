import { getAll, getOne, Request } from './Request';
import { RequestParams, RequestReturn } from './Request.i';

const InitialState = {
  data: null,
  error: null,
  isFailed: false,
  isLoading: true,
}

function getRequest<T>({
  event,
  config
  }:RequestParams
): Promise<RequestReturn<T>>  {


  async function fetchData<T>(): Promise<RequestReturn<T>> {
    let result: RequestReturn<T> = InitialState;
    let data: T | null = null;

    try {
      
      switch (event) {
        case 'GET':
          data = (await getAll<T>({...config})).data
          break;
    
        case 'GETONE':
          data = (await getOne<T>({...config})).data
          break;
      
        default:
          data = (await Request<T>({...config})).data
          break;
      }

      result = {
        data: data,
        isFailed: false,
        isLoading: false,
        error: null
      }

    } catch (error) {

      result = {
        data: null,
        isFailed: true,
        isLoading: false,
        error: error
      }

    }

    return result;
  }

  return fetchData<T>();

}

export {
  getRequest,
  InitialState
}