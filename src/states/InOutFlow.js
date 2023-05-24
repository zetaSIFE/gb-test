import { atom } from "recoil";

// 유입 유출
export const trafficState = atom({
  key: "traffic",
  default: true,
});

//기간 설정: 시작 날짜
export const startDateState = atom({
  key: "startDate",
  default: new Date(),
});

//기간 설정: 종료 날짜
export const endDateState = atom({
  key: "endDate",
  default: new Date(),
});

//시간 설정: 시작 시간
export const startTimeState = atom({
  key: "startTime",
  default: new Date(),
});

//시간 설정: 종료 시간
export const endTimeState = atom({
  key: "endTime",
  default: new Date(),
});

//성별 설정
export const genderState = atom({
  key: "gender",
  default: "",
});

//연령 설정
export const ageState = atom({
  key: "age",
  default: "",
});
