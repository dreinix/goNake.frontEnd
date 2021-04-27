import axios from "axios";
let HOST = "http://127.0.0.1:3001";
import Cookies from "js-cookie";

export const auth = async () => {
  try {
    const request = axios.get(`${HOST}/`);
    const response = await request;
    return response;
  } catch (e) {
    return e;
  }
};

export function getCookie(cname) {
  return Cookies.get(cname);
}
export function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  var multyplayer = 1*60*60*1000 // to hour
  //var multyplayer = 1*60*1000  //to minute
  d.setTime(d.getTime() + (exdays*multyplayer))// from miliseconds to days;
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}