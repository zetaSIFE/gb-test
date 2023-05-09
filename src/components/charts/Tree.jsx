import React from 'react';
import ReactECharts from 'echarts-for-react';

const Tree = () => {
  const option = {
    series: [
      {
        type: 'treemap',
        data: [
          {
            name: '제조업',
            value: 40,
            // children: [
            //   {
            //     name: 'nodeAa',
            //     value: 4
            //   },
            //   {
            //     name: 'nodeAb',
            //     value: 6
            //   }
            // ]
          },
          {
            // children 안에 children
            name: 'nodeB',
            value: 7,
            children: [
              {
                name: 'nodeBa',
                value: 5,
                children: [
                  {
                    name: 'nodeBa1',
                    value: 15
                  }
                ]
              },
              
            ]
          },
          {
            name: '보건및서비스',
            value: 13,
            children: [
              {
                name: '보건업',
                value: 5,
              },
              {
                name: '사회복지 서비스업',
                value: 8,
              }
            ]
          },
          {
            name: 'nodeD',
            value: 20,
            children: [
              {
                name: 'nodeDa',
                value: 5,
              },
              {
                name: 'nodeDa1',
                value: 15
              },
              {
                name: 'nodeDa2',
                value: 15
              },
              {
                name: 'nodeDa3',
                value: 15
              }
            ]
          }
        ]
      }
    ],
    tooltip: {
      formatter: function (info) {
        var value = info.value;
        var treePathInfo = info.treePathInfo;
        var treePath = [];
        for (var i = 1; i < treePathInfo.length; i++) {
          treePath.push(treePathInfo[i].name);
        }
        return [
          '<div class="tooltip-title">' +
          treePath + '</div>'+ ' val : '+ value 
        ].join('');
      }
    },
  }
  return (
    <>
      <ReactECharts
        option={option}
        style={{borderBottom:"3px solid #000" }}
      ></ReactECharts>
    </>
  );
};

export {Tree};
