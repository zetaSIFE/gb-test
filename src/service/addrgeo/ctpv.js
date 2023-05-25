import axios from "axios";

export const getCtpvList = () => {
  return axios.get("http://192.168.11.11:20000/addrgeo/administ/ctpv/list?", {
    params: {
      targetSrid: 5186,
      retGeom: false,
      crtfckey: "tmiKPqf1niMu5rq1VcG49XKIYmhwDJEh",
    },
  });
};
