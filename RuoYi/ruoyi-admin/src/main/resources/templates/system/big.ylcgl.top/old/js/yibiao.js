function yibiaoyl(){
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);
    var option;
    
    option = {
      series: [
        {
          type: 'gauge',
          startAngle: 180,
          endAngle: 0,
          min: 0,
          max: 240,
          splitNumber: 12,
          itemStyle: {
            color: '#58D9F9',
            shadowColor: 'rgba(0,138,255,0.45)',
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
          progress: {
            show: true,
            roundCap: true,
            width: 18
          },
          pointer: {
            icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
            length: '75%',
            width: 16,
            offsetCenter: [0, '5%']
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 18
            }
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          splitLine: {
            length: 12,
            lineStyle: {
              width: 3,
              color: '#999'
            }
          },
          axisLabel: {
            distance: 30,
            color: '#999',
            fontSize: 20
          },
          title: {
            show: false
          },
          detail: {
            backgroundColor: '#fff',
            borderColor: '#999',
            borderWidth: 2,
            width: '60%',
            lineHeight: 40,
            height: 40,
            borderRadius: 8,
            offsetCenter: [0, '35%'],
            valueAnimation: true,
            formatter: function (value) {
              return '{value|' + value.toFixed(0) + '}{unit|km/h}';
            },
            rich: {
              value: {
                fontSize: 50,
                fontWeight: 'bolder',
                color: '#777'
              },
              unit: {
                fontSize: 20,
                color: '#999',
                padding: [0, 0, -20, 10]
              }
            }
          },
          data: [
            {
              value: 100
            }
          ]
        }
      ]
    };
    
    option && myChart.setOption(option);

}

function yibiao(){
//基于准备好的DOM，初始化ECharts图表
		var myChart = echarts.init(document.getElementById("main"));
		//指定图表的配置项和数据
		var option = {  //指定图表的配置项和数据
			backgroundColor: 'rgba(128, 128, 128, 0.1)',  //rgba设置透明度0.1
			title: {  //配置标题组件
				text: '多仪表盘实例 (共四个仪表盘)',
				x: 'center', y: 100,
				show: true,  //设置是否显示标题，默认true
				offsetCenter: [50, "20%"],  //设置相对于仪表盘中心的偏移
				textStyle: {
					fontFamily: "黑体",  //设置字体名称，默认宋体
					color: "blue",  //设置字体颜色，默认#333
					fontSize: 20,  //设置字体大小，默认15
				}
			},
			tooltip: { formatter: "{a} <br/>{c} {b}" },  //配置提示框组件
			series: [  //配置数据系列，共有4个仪表盘
				{   //设置数据系列之1：速度
					name: '速度', type: 'gauge', z: 3,
					min: 0,  //设置速度仪表盘的最小值
					max: 220,  //设置速度仪表盘的最大值
					splitNumber: 22,  //设置速度仪表盘的分隔数目为22
					radius: '50%',  //设置速度仪表盘的大小
					axisLine: { lineStyle: { width: 10 } },
					axisTick: {  //设置坐标轴小标记
						length: 15,  //设置属性length控制线长
						splitNumber: 5,  //设置坐标轴小标记的分隔数目为5
						lineStyle: {  //设置属性lineStyle控制线条样式
							color: 'auto'
						}
					},
					splitLine: { length: 20, lineStyle: { color: 'auto' } },
					title: { textStyle: { fontWeight: 'bolder', fontSize: 20, fontStyle: 'italic' } },
					detail: { textStyle: { fontWeight: 'bolder' } },
					data: [{ value: 40, name: '流量L' }]
				}
			
			]
		};
		setInterval(function () {
			option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
			myChart.setOption(option, true);
		}, 3000);  //每间2秒重新渲染一次，以实现动态效果


}
