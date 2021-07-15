// src/root/callApiService.js
import axios, {AxiosRequestConfig} from 'axios';

type propCall = {
  url: string
  method: string
  query: any
  contentType: string
}

export function* callApiService({url, method, query, contentType}: propCall): any {
  if (!url) {
    return
  }
  let keys: any[] = []
  if (!query) {
    query = []
  } else {
    keys = Object.keys(query)
  }
  if (method) {
    method = method.toLowerCase()
  }
  let params: any[] = []

  function getFormQuery() {
    keys.forEach(key => {
      let value = query[key]
      if (typeof value === 'string') {
        params[key] = value
      } else {
        params[key] = JSON.stringify(value);
      }
    })
  }

  function axiosGet() {
    return axios
    .get(url, {params})
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error
    });
  }

  function axiosDelete() {
    return axios
    .delete(url, {params})
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error
    });
  }

  function axiosPost(data: any, headers: any) {
    let axiosRequestConfig: AxiosRequestConfig = {
      method: "POST",
      url,
      data,
      headers: {headers}
    }
    return axios(axiosRequestConfig)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error
    });
  }

  let headers = {'Content-Type': 'multipart/form-data'}
  let dataForm: (FormData | any) = new FormData();

  function getFormPostPut() {
    if (contentType !== "json") {
      keys.forEach(key => {
        let value = query[key]
        if (typeof value === 'string') {
          dataForm.append(key, value);
        } else {
          let data1 = JSON.stringify(value)
          dataForm.append(key, data1);
        }
      })
    } else {
      headers['Content-Type'] = 'application/json'
      dataForm = query
    }
  }

  switch (method) {
    case 'post':
      getFormPostPut();
      return yield axiosPost(dataForm, headers);
    case 'put':
      getFormPostPut();
      return yield axiosPost(dataForm, headers);
    case 'delete':
      getFormQuery();
      return yield axiosDelete();
    case 'get':
      getFormQuery();
      return yield axiosGet();
    default:
      getFormQuery();
      return yield axiosGet();
  }
}
