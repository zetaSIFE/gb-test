import React, { useEffect, useState } from 'react';
import ECharts, { EChartsReactProps } from 'echarts-for-react';

const Pictorial = (prop) => {
  const menColor = '#4283d8';
  const womenColor = '#ff7c9e';

  const symbolsWemen = [
    // 'path://M816.467 706.534C989.331 706.534 1129.47 548.371 1129.47 353.267C1129.47 158.163 989.331 0 816.467 0C643.603 0 503.469 158.163 503.469 353.267C503.469 548.371 643.603 706.534 816.467 706.534Z M1690.64 1813.59L1481.85 934.162C1481.74 933.483 1481.51 932.804 1481.36 932.124L1477.68 916.626L1477.15 916.796C1458.11 849.752 1403.11 800.923 1337.39 800.923C1336.86 800.923 1336.41 801.093 1335.89 801.093V798.036H353.252V800.923C287.53 800.923 232.529 849.794 213.493 916.796L212.967 916.626L209.28 932.082C209.13 932.804 208.904 933.483 208.791 934.205L0 1813.59L1.95617 1814.19C1.01567 1821.45 0 1828.71 0 1836.27C0 1876.09 14.0149 1914.28 38.9618 1942.43C63.9087 1970.59 97.744 1986.41 133.024 1986.41C159.711 1986.37 185.769 1977.27 207.8 1960.27C229.832 1943.27 246.813 1919.18 256.531 1891.13L257.471 1891.42L410.622 1246.33V1248.75H411.826C416.002 1227.52 431.99 1211.3 452.079 1211.3C472.169 1211.3 488.157 1227.52 492.333 1248.75H493.574V1255.71C493.65 1256.77 494.139 1257.71 494.139 1258.77C494.139 1259.83 493.65 1260.76 493.574 1261.83V1268.41L248.367 2301.29C244.352 2310.57 241.964 2320.63 241.332 2330.93L240.806 2333.09L241.106 2333.18C241.069 2334.37 240.806 2335.47 240.806 2336.66C240.806 2381.16 272.783 2417.21 312.208 2417.21H493.537V3099.96C493.537 3146.03 509.751 3190.21 538.614 3222.79C567.476 3255.37 606.622 3273.67 647.44 3273.67C688.258 3273.67 727.404 3255.37 756.266 3222.79C785.129 3190.21 801.343 3146.03 801.343 3099.96V2417.21H888.848V3099.96C888.848 3146.03 905.062 3190.21 933.925 3222.79C962.787 3255.37 1001.93 3273.67 1042.75 3273.67C1083.57 3273.67 1122.71 3255.37 1151.58 3222.79C1180.44 3190.21 1196.65 3146.03 1196.65 3099.96V2417.21H1378.55C1387.92 2417.21 1397.21 2415.13 1405.87 2411.09C1414.53 2407.04 1422.4 2401.11 1429.03 2393.63C1435.66 2386.15 1440.93 2377.27 1444.51 2367.49C1448.1 2357.72 1449.95 2347.24 1449.95 2336.66C1449.95 2335.47 1449.69 2334.32 1449.65 2333.18L1449.95 2333.09L1449.42 2330.93C1448.79 2320.63 1446.4 2310.57 1442.39 2301.29L1197.9 1271.51L1198.69 1271.25C1197.67 1267.18 1196.43 1263.14 1196.43 1258.68C1196.43 1232.53 1215.24 1211.21 1238.49 1211.21C1258.24 1211.21 1274.08 1226.97 1278.55 1247.73L1280.17 1247.26L1433.1 1891.34L1434 1891.04C1445.26 1923.64 1466.26 1950.76 1493.37 1967.72C1520.49 1984.67 1552 1990.39 1582.45 1983.88C1612.91 1977.36 1640.38 1959.03 1660.12 1932.06C1679.86 1905.08 1690.62 1871.17 1690.53 1836.18C1690.53 1828.62 1689.51 1821.36 1688.57 1814.1L1690.64 1813.59Z'
    // 'path://M672.271 702.458C844.138 702.458 983.463 545.208 983.463 351.229C983.463 157.251 844.138 0 672.271 0C500.404 0 361.078 157.251 361.078 351.229C361.078 545.208 500.404 702.458 672.271 702.458Z M1261.51 796.889V795.191H146.605V796.337C107.931 796.347 70.8292 813.613 43.3878 844.37C15.9463 875.128 0.390865 916.882 0.112852 960.53H0V1955.75H1.46718C1.46718 1975.14 4.85055 1994.34 11.4241 2012.25C17.9977 2030.16 27.6327 2046.43 39.779 2060.14C51.9253 2073.85 66.3451 2084.73 82.2151 2092.15C98.0851 2099.56 115.094 2103.38 132.272 2103.38C149.449 2103.38 166.459 2099.56 182.329 2092.15C198.199 2084.73 212.618 2073.85 224.765 2060.14C236.911 2046.43 246.546 2030.16 253.12 2012.25C259.693 1994.34 263.077 1975.14 263.077 1955.75H263.378V1261.02H263.716C264.105 1248.91 268.637 1237.43 276.36 1229.01C284.082 1220.59 294.396 1215.87 305.136 1215.84C327.633 1215.84 345.69 1235.93 346.631 1261.02H346.969V3082.77C346.994 3128.58 363.142 3172.5 391.86 3204.87C420.577 3237.24 459.513 3255.42 500.101 3255.39C540.69 3255.36 579.606 3237.13 608.288 3204.72C636.971 3172.31 653.071 3128.36 653.046 3082.55V2165.25H654.174C654.005 2158.85 654.976 2152.47 657.03 2146.5C659.084 2140.53 662.178 2135.09 666.13 2130.49C670.082 2125.9 674.811 2122.24 680.037 2119.75C685.263 2117.26 690.879 2115.97 696.553 2115.97C702.227 2115.97 707.843 2117.26 713.069 2119.75C718.295 2122.24 723.024 2125.9 726.976 2130.49C730.928 2135.09 734.022 2140.53 736.076 2146.5C738.13 2152.47 739.101 2158.85 738.932 2165.25H740.023V3082.55C741.106 3127.56 757.706 3170.31 786.292 3201.71C814.878 3233.11 853.192 3250.67 893.08 3250.67C932.968 3250.67 971.282 3233.11 999.868 3201.71C1028.45 3170.31 1045.05 3127.56 1046.14 3082.55V1261.02C1046.14 1248.51 1050.54 1236.51 1058.38 1227.66C1066.22 1218.82 1076.85 1213.85 1087.93 1213.85C1099.02 1213.85 1109.65 1218.82 1117.49 1227.66C1125.33 1236.51 1129.73 1248.51 1129.73 1261.02V1955.79H1131.16C1131.16 1994.96 1144.94 2032.52 1169.48 2060.22C1194.02 2087.91 1227.3 2103.47 1262 2103.47C1296.7 2103.47 1329.98 2087.91 1354.52 2060.22C1379.06 2032.52 1392.84 1994.96 1392.84 1955.79H1393.11V960.573C1393.18 875.016 1335.36 805.424 1261.51 796.889Z'
'path://M53.39 47.7C66.562 47.7 77.24 37.022 77.24 23.85C77.24 10.678 66.562 0 53.39 0C40.218 0 29.54 10.678 29.54 23.85C29.54 37.022 40.218 47.7 53.39 47.7Z M26.5901 63.9601C22.8401 66.1801 20.1401 69.8201 19.0101 74.0301L0.990124 140.98C0.990124 140.98 -3.47988 156.86 6.58012 157.97C16.6401 159.08 18.8801 153.5 20.8901 144.33C22.4301 137.33 30.1901 109.24 33.7701 96.3501C34.0601 95.3001 35.6001 95.5201 35.6101 96.6001L35.6501 112.25C35.6501 112.32 35.6501 112.38 35.6201 112.45L16.9001 180.29C16.7701 180.76 17.1301 181.22 17.6101 181.21L29.7601 181.01C30.1701 181.01 30.5001 181.33 30.5001 181.74V261.44C30.5001 261.84 30.8301 262.17 31.2301 262.17H50.1201C50.5201 262.17 50.8501 261.84 50.8501 261.44V181.05C50.8501 180.65 51.1801 180.32 51.5801 180.32H60.1901C60.5901 180.32 60.9201 180.65 60.9201 181.05V261.44C60.9201 261.84 61.2501 262.17 61.6501 262.17H80.3201C80.7201 262.17 81.0501 261.84 81.0501 261.44V181.73C81.0501 181.33 81.3801 181 81.7801 181H92.8501C93.3301 181 93.6801 180.55 93.5501 180.08L75.2601 112.19C75.2401 112.13 75.2301 112.06 75.2301 112V96.6501C75.2301 95.5601 76.7801 95.3501 77.0701 96.4001L91.3201 147.86C91.3201 147.86 91.3301 147.91 91.3401 147.94C91.4401 148.6 93.0101 158.19 100.5 158.19C105.27 158.19 111.9 154.61 109.89 140.75C108.25 129.47 95.9501 88.4201 91.4301 73.5301C90.2201 69.5501 87.5801 66.1801 84.0301 64.0201C74.0801 57.9701 52.2001 48.8101 26.6001 63.9501L26.5901 63.9601Z'
  ];
  const symbolsMen = [
    // 'path://M672.271 702.458C844.138 702.458 983.463 545.208 983.463 351.229C983.463 157.251 844.138 0 672.271 0C500.404 0 361.078 157.251 361.078 351.229C361.078 545.208 500.404 702.458 672.271 702.458Z M1261.51 796.889V795.191H146.605V796.337C107.931 796.347 70.8292 813.613 43.3878 844.37C15.9463 875.128 0.390865 916.882 0.112852 960.53H0V1955.75H1.46718C1.46718 1975.14 4.85055 1994.34 11.4241 2012.25C17.9977 2030.16 27.6327 2046.43 39.779 2060.14C51.9253 2073.85 66.3451 2084.73 82.2151 2092.15C98.0851 2099.56 115.094 2103.38 132.272 2103.38C149.449 2103.38 166.459 2099.56 182.329 2092.15C198.199 2084.73 212.618 2073.85 224.765 2060.14C236.911 2046.43 246.546 2030.16 253.12 2012.25C259.693 1994.34 263.077 1975.14 263.077 1955.75H263.378V1261.02H263.716C264.105 1248.91 268.637 1237.43 276.36 1229.01C284.082 1220.59 294.396 1215.87 305.136 1215.84C327.633 1215.84 345.69 1235.93 346.631 1261.02H346.969V3082.77C346.994 3128.58 363.142 3172.5 391.86 3204.87C420.577 3237.24 459.513 3255.42 500.101 3255.39C540.69 3255.36 579.606 3237.13 608.288 3204.72C636.971 3172.31 653.071 3128.36 653.046 3082.55V2165.25H654.174C654.005 2158.85 654.976 2152.47 657.03 2146.5C659.084 2140.53 662.178 2135.09 666.13 2130.49C670.082 2125.9 674.811 2122.24 680.037 2119.75C685.263 2117.26 690.879 2115.97 696.553 2115.97C702.227 2115.97 707.843 2117.26 713.069 2119.75C718.295 2122.24 723.024 2125.9 726.976 2130.49C730.928 2135.09 734.022 2140.53 736.076 2146.5C738.13 2152.47 739.101 2158.85 738.932 2165.25H740.023V3082.55C741.106 3127.56 757.706 3170.31 786.292 3201.71C814.878 3233.11 853.192 3250.67 893.08 3250.67C932.968 3250.67 971.282 3233.11 999.868 3201.71C1028.45 3170.31 1045.05 3127.56 1046.14 3082.55V1261.02C1046.14 1248.51 1050.54 1236.51 1058.38 1227.66C1066.22 1218.82 1076.85 1213.85 1087.93 1213.85C1099.02 1213.85 1109.65 1218.82 1117.49 1227.66C1125.33 1236.51 1129.73 1248.51 1129.73 1261.02V1955.79H1131.16C1131.16 1994.96 1144.94 2032.52 1169.48 2060.22C1194.02 2087.91 1227.3 2103.47 1262 2103.47C1296.7 2103.47 1329.98 2087.91 1354.52 2060.22C1379.06 2032.52 1392.84 1994.96 1392.84 1955.79H1393.11V960.573C1393.18 875.016 1335.36 805.424 1261.51 796.889Z'
    // 'path://M79.3601 113.33C79.3401 113.27 79.3301 113.2 79.3301 113.14L79.2201 97.79C79.2201 96.7 80.7701 96.49 81.0601 97.54L93.3001 148.94L93.3401 149.14C93.5101 150.21 95.1901 159.32 102.49 159.32C107.26 159.32 113.89 155.74 111.88 141.88C110.24 130.6 97.9401 89.55 93.4201 74.66C92.2101 70.68 89.5701 67.31 86.0201 65.15C76.1601 59.15 52.6301 50.11 27.3001 64.67C23.1601 67.05 20.1301 70.99 18.8901 75.6L0.990124 142.11C0.990124 142.11 -3.47988 157.99 6.58012 159.1C16.6401 160.21 18.8801 154.63 20.8901 145.46C22.4301 138.46 26.2701 110.37 29.8601 97.48C30.1501 96.43 31.6901 96.65 31.7001 97.73C31.7001 97.73 31.7601 113.15 31.7401 113.22L30.9101 258.8C30.9101 259.42 31.4101 259.93 32.0301 259.92L48.7901 259.82C49.4101 259.82 49.9001 259.31 49.9001 258.7L49.3601 156.42C49.3601 155.48 50.1101 154.72 51.0501 154.72L58.8401 154.67C59.7701 154.67 60.5401 155.42 60.5501 156.35L61.4201 258.82C61.4201 259.43 61.9301 259.93 62.5401 259.93L79.4301 259.83C80.0501 259.83 80.5401 259.32 80.5401 258.71L79.3701 113.34L79.3601 113.33Z'
    'path://M79.3601 113.33C79.3401 113.27 79.3301 113.2 79.3301 113.14L79.2201 97.79C79.2201 96.7 80.7701 96.49 81.0601 97.54L93.3001 148.94L93.3401 149.14C93.5101 150.21 95.1901 159.32 102.49 159.32C107.26 159.32 113.89 155.74 111.88 141.88C110.24 130.6 97.9401 89.55 93.4201 74.66C92.2101 70.68 89.5701 67.31 86.0201 65.15C76.1601 59.15 52.6301 50.11 27.3001 64.67C23.1601 67.05 20.1301 70.99 18.8901 75.6L0.990124 142.11C0.990124 142.11 -3.47988 157.99 6.58012 159.1C16.6401 160.21 18.8801 154.63 20.8901 145.46C22.4301 138.46 26.2701 110.37 29.8601 97.48C30.1501 96.43 31.6901 96.65 31.7001 97.73C31.7001 97.73 31.7601 113.15 31.7401 113.22L30.9101 258.8C30.9101 259.42 31.4101 259.93 32.0301 259.92L48.7901 259.82C49.4101 259.82 49.9001 259.31 49.9001 258.7L49.3601 156.42C49.3601 155.48 50.1101 154.72 51.0501 154.72L58.8401 154.67C59.7701 154.67 60.5401 155.42 60.5501 156.35L61.4201 258.82C61.4201 259.43 61.9301 259.93 62.5401 259.93L79.4301 259.83C80.0501 259.83 80.5401 259.32 80.5401 258.71L79.3701 113.34L79.3601 113.33Z M55.87 47.7C69.042 47.7 79.72 37.022 79.72 23.85C79.72 10.678 69.042 0 55.87 0C42.698 0 32.02 10.678 32.02 23.85C32.02 37.022 42.698 47.7 55.87 47.7Z'
  ];
  //https://echarts.apache.org/en/option.html#series-pictorialBar.symbol 
  const bodyMax =100;
  const symbolSize = [80, 170];
  const labelSetting = {

    show: true,
    position: 'top',
    formatter: function (param) {
      return ((param.value / bodyMax) * 100).toFixed(0) + '%';
    },
    fontSize: 20,
    fontFamily: 'Arial',
    lineHeight: 25,
    fontWeight: "bolder"
  };

  const options = {
    title: {
      text: "성별 유입율",
    },
    tooltip: {},
    legend: {
      show: false,
      selectedMode: 'multiple'
    },
    colorBy: 'data',
    xAxis: {
      data: ['남', '여'],
      // data: ['a', 'b' , 'c', 'd', 'e'],
      axisTick: { show: false },
      axisLine: { show: false },
      axisLabel: { show: false }
    },
    yAxis: {
      // max: bodyMax,
      show: false,
      splitLine: { show: false }
    },
    grid: {
      left: "25%",
      top: "25%",
      botton:"10%",
      width: "55%",
      height: "70%"
    },
    markLine: {
      z: -100
    },
    series: [
      {
        name: 'typeA',
        type: 'pictorialBar',
        symbolClip: true,
        symbolBoundingData: bodyMax,
        symbolSize: symbolSize,
        label: labelSetting,
        data: [
          {
            value: 55,
            symbol: symbolsMen[0],
            label: {
              show: true,
              color: menColor
            },
            itemStyle:{
              color:menColor
            }
          },
          {
            value: 90,
            symbol: symbolsWemen[0],
            label: {
              show: true,
              color: womenColor
            },
            itemStyle:{
              color:womenColor
            }
          },
          // {
          //   value: 101,`
          //   symbol: symbols[2]
          // },
          // {
          //   value: 89,
          //   symbol: symbols[3]
          // },
          // {
          //   value: 72,
          //   symbol: symbols[4]
          // }
        ],
        // markLine: markLineSetting,
        // markLine: symbols, 이게뭐지
        z: 10
      },
      // {
      //   name: 'typeB',`
      //   type: 'pictorialBar',
      //   symbolClip: true,
      //   symbolBoundingData: bodyMax,
      //   label: labelSetting,
      //   data: [
      //     {
      //       value: 12,
      //       symbol: symbolsMen[0]
      //     },
      //     {
      //       value: 44,
      //       symbol: symbolsWemen[0]
      //     },
      //     // {
      //     //   value: 131,
      //     //   symbol: symbols[2]
      //     // },
      //     // {
      //     //   value: 33,
      //     //   symbol: symbols[3]
      //     // },
      //     // {
      //     //   value: 142,
      //     //   symbol: symbols[4]
      //     // }
      //   ],
      //   markLine: markLineSetting,
      //   z: 10
      // },
      {
        name: 'full',
        type: 'pictorialBar',
        symbolBoundingData: bodyMax,
        symbolSize: symbolSize,
        animationDuration: 0,
        itemStyle: {
          color: '#bdbdbdc1'
        },
        data: [
          {
            value: bodyMax,
            symbol: symbolsMen[0]
          },
          {
            value: bodyMax,
            symbol: symbolsWemen[0]
          },
          // {
          //   value: 1,
          //   symbol: symbols[2]
          // },
          // {
          //   value: 1,
          //   symbol: symbols[3]
          // },
          // {
          //   value: 1,
          //   symbol: symbols[4]
          // }
        ]
      }
    ]
  }
	return (
    <>

      <ECharts
        option={options}
        style={{height:"100%", width:"78%"}}
      />
    </>
  );
}
export {Pictorial};