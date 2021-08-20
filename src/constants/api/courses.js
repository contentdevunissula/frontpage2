import axios from "../../../src/configs/axios";
import Cookies from 'js-cookie'

const user_id = Cookies.get('id') !== undefined ? Cookies.get('id') : ""
export default {
  all: (options = { params: { status: "published" } }) =>
    axios.get(`/courses`, options).then((res) => res.data),
  details: (id, options = {headers : { Authorization : user_id }}) => axios.get(`/courses/${id}`, options).then((res) => res.data),
};
