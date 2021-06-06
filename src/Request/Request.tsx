import axios, { AxiosResponse } from 'axios';
import { PARAMS } from './Request.i';

const BASE_URL = "https://127.0.0.1:8000";
const UN_ERROR = {
  status: 500,
  data: {data: []}
}

async function getOne<T>({uri,id = 0, headers = {}, params = {}} : PARAMS ) : Promise<AxiosResponse<T>>
{

  try {
    let response = await axios.get(`${BASE_URL}/${uri}/${id}` , {
      headers: headers,
      params: params
    })

    let result: AxiosResponse<T> = response;
    return result;

  } catch (error) {

    if(!error.response) throw UN_ERROR
    throw error.response;
  }
}

async function getAll<T>({uri, headers = {}, params = {}} : PARAMS) : Promise<AxiosResponse<T>>
{

  try {
    let response = await axios.get(`${BASE_URL}/${uri}` , {
      headers: headers,
      params: params
    })

    let result: AxiosResponse<T> = response;
    return result;

  } catch (error) {

    if(!error.response) throw UN_ERROR
    throw error.response;   

  }
}

async function Request<T>({uri, method, data={}, headers = {}, params = {}} : PARAMS) : Promise<AxiosResponse<T>>
{
  try {
    let response = await axios({
      url: `${BASE_URL}/${uri}`,
      method: method,
      headers: headers,
      params: params,
      data: data
    });

    let result: AxiosResponse<T> = response;
    return result;

  } catch (error) {

    if(!error.response) throw UN_ERROR
    throw error.response;

  }

}

export {
  getOne,
  getAll,
  Request
}