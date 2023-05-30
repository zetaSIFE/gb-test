import { atom } from "recoil";

// 선택된 시군구
export const SelectSggState = atom({
  key: "sgg",
  default: "47170", //안동시 지역코드
});

// 선택된 읍면동
export const SelectEmgState = atom({
  key: "emg",
  default: "47170310", //와룡면 지역코드
});

// 선택된 리
export const SelectRiState = atom({
  key: "ri",
  default: "리",
});

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
