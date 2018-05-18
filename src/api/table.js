//请求表格数据
import axios from 'axios'

export const getTableRandom = (params) => {
  return axios.get('https://randomuser.me/api', {params: params});
}