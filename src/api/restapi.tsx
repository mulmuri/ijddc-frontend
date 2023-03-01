import { obj } from "../type/basic";
import api from "./api";



const restapi = {

  get: async (url: string) : Promise<any> => {
    return api.instance.get(url)
    .then(res => res.data)
    .catch(e => { throw new Error(e) })
  },

  post: async(url: string, data?: obj) : Promise<any> => {
    return api.instance.post(url, data)
    .then(res => res.data)
    .catch(e => { throw new Error(e) })
  }
}

export default restapi;