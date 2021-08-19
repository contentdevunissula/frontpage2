import axios from "../../../src/configs/axios";
import Cookies from 'js-cookie'

const token = Cookies.get('TokenAuthorization') != undefined ? Cookies.get('TokenAuthorization') : ""

export default {
  all: (options = { params: { status: "published" } }) =>
    axios.get(`/courses`, options).then((res) => res.data),
  details: (id, options = {headers : { Authorization : token }}) => axios.get(`/courses/${id}`, options).then((res) => res.data),
};
