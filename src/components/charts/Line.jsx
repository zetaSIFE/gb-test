import React, { useEffect, useState } from 'react';
import ECharts, { EChartsReactProps } from 'echarts-for-react';

const Line = () => {
	fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      // .then(json => console.log(json))
			
  const [options, setOptions] = useState({
		xAxis: {
	    type: 'category',
	    data: ['일', '이', '삼', '사', '오', '육', '칠']
	  },
	  yAxis: {
	    type: 'value'
	  },
	  series: [
	    {
	      data: [150, 230, 224, 218, 135, 147, 260],
	      type: 'line'
	    }
	  ]
	});	

	return (
    <>

      <ECharts
        option={options}
        opts={{ renderer: 'svg', width: 'auto', height: '400px' }}
      />
    </>
  );
}
export default Line;