import React from "react";
import styled from "styled-components";

const TableBox = styled.table`
width: 100%;
height: 80%;
padding:5px;

* {
  border: 1px solid #ccc;
  vertical-align: middle;
  padding: 10px;
}
`;
const Title = styled.td`
background-color: #F3F3F3;

`;
const Val = styled.td`
/* background-color: gray; */
`;

export const Table = () => {
  const data =  [
    {
      name: '1위',
      tableVal: '경남 의령군',
    },
    {
      name: '2위',
      tableVal: '경북 봉화군',
    },
    {
      name: '3위',
      tableVal: '강원 고성군',
    },
    {
      name: '4위',
      tableVal: '경북 영양군',
    },
    {
      name: '5위',
      tableVal: '경북 청송군',
    },
  ]
  const columns = ["Name", "tableVal", "Phone"];
  return (
    <TableBox>
      {/* <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead> */}
      <tbody>
        {data.map(({ name, tableVal }) => (
          <tr key={name + tableVal}>
            <Title>{name}</Title>
            <Val>{tableVal}</Val>
          </tr>
        ))}
      </tbody>
    </TableBox>
  );
};
