import axios from "axios";

axios.defaults.withCredentials = true;

const APIServer = "http://localhost:8000";

const api = {
  
  config: {
    baseURL: APIServer,
    headers: {
      'Content-Type' : 'application/json; charset=UTF-8',
      'Authorization': ''
    }
  },

  setAuthorizationHeader(token: string) {
    this.config.headers.Authorization = `bearer ${token}`
    this.instance = axios.create(this.config)
  },

  instance: axios.create()
}

api.instance = axios.create(api.config)

export default api;




/*

interface apiInterface {
  data?: any;
  onSuccess: (data?: any, status?: number) => void;
  onError: (data?: any, status?: number) => void;
}



const API = {
  
  GET: async (url: string, {data, onSuccess, onError}: apiInterface) => {
    try {
      const response = await axiosAPI({
        method: "GET",
        url: url,
        data: data
      })

      onSuccess(response.data, response.status);
    } catch (error) {
      const { response } = error as AxiosError;
      if (typeof response === 'undefined') throw (error);

      onError(response.data, response.status);
    }
  },

  POST: async (url: string, {data, onSuccess, onError}: apiInterface) => {
    try {
      const response = await axiosAPI({
        method: "POST",
        url: url,
        data: data
      })

      onSuccess(response.data, response.status);
    } catch (error) {
      const { response } = error as AxiosError;
      if (typeof response === 'undefined') throw (error);

      onError(response.data, response.status);
    }
  }
}

API.GET("/auth/signin", {
  data: "",
  onSuccess: () => {},
  onError: () => {}
})
*/

/*
const header = {
  authorization: '',

  getAuthorization() {
    const token = window.sessionStorage.getItem('access-token');
    if (token) {
      header.authorization = `bearer ${token}`;
    }
    return header;
  }
};
*/