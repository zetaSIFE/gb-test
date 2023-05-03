import React, { useEffect, useState } from 'react';
import ECharts, { EChartsReactProps } from 'echarts-for-react';

const Chart = () => {
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
      <p>제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야 하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다. 다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 모든 국민은 법률이 정하는 바에 의하여 선거권을 가진다. 국가는 국민 모두의 생산 및 생활의 기반이 되는 국토의 효율적이고 균형있는 이용·개발과 보전을 위하여 법률이 정하는 바에 의하여 그에 관한 필요한 제한과 의무를 과할 수 있다.

중앙선거관리위원회는 대통령이 임명하는 3인, 국회에서 선출하는 3인과 대법원장이 지명하는 3인의 위원으로 구성한다. 위원장은 위원중에서 호선한다. 언론·출판에 대한 허가나 검열과 집회·결사에 대한 허가는 인정되지 아니한다. 국회는 국민의 보통·평등·직접·비밀선거에 의하여 선출된 국회의원으로 구성한다.</p>
      <ECharts
        option={options}
        opts={{ renderer: 'svg', width: 'auto', height: '400px' }}
      />
    </>
  );
}
export default Chart;