import React from "react";
import styled from "styled-components";
import { BtnReport } from "components/buttons";

const Container = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: 10px;

  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  /* background-color: skyblue; */
`;

const Contents = styled.div`
  display: flex;
`;
const Item = styled.div`
  margin-right: 10px;
`;

/* NOTE 
  Props로 받은 컴포넌트들을 차례대로 뿌려주는 방식
  아래와 같이 props를 만들어 넣어주면 된다.
  const headerProps = [<Search />, <Dropdown />, <Search />];
  → props={headerProps}
*/

export const Header = ({ props }) => {
  return (
    <Container>
      <Contents>
        {props.map((item, index) => (
          <Item key={index}>{item}</Item>
        ))}
      </Contents>
      <BtnReport />
    </Container>
  );
};
