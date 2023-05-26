import axios from "axios";

export const getSggList = (params) => {
  return axios.get("http://192.168.11.11:20000/addrgeo/administ/sgg/list", {
    params: {
      targetSrid: 5186,
      retGeom: false,
      crtfckey: "tmiKPqf1niMu5rq1VcG49XKIYmhwDJEh",
      ctprvnCd: 47, //경북 지역코드
    },
  });
};
