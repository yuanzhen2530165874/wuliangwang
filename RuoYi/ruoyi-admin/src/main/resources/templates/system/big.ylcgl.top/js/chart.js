// 饼图
(function(){
	var myChart = echarts.init(document.querySelector(".pie .matter"));
	var option = {
	// 颜色定义
		// color:["#60c8ff","#999999",],
	// 提示框
		tooltip: {
			trigger: 'item'
		},
	// 标题文字
		title:{
				text:"日报表/月报表",
				textStyle:{
					color:"#ffffff",
					fontSize:'12',
				},
				left:"center",
		},
	// 图例
		legend: {
			bottom: '2%', //  图例位置
			left: 'center',
			itemHeight:6, // 图例大小
			textStyle:{color:'rgba(255,255,255,0.8)',
					fontSize:6,
			},
			itemGap:4,
		},
		  
  series: [
    {
      name: '日报表',
      type: 'pie',
	  center:['25%','46%'],
	  // 第一个值是圆环的粗细，第二个值是圆环大小
      radius: ['32%', '62%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '18',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 123, name: '水温过高' },
		{ value: 735, name: '压力过高' },
        { value: 789, name: '流速过高' },
        { value: 100, name: '设备异常' },

      ]
    },
	
	{
	  name: '月报表',
	  type: 'pie',
	  center:["75%","46%"],
	  radius: ['32%', '62%'],
	  avoidLabelOverlap: false,
	  label: {
	    show: false,
	    position: 'center'
	  },
	  emphasis: {
	    label: {
	      show: true,
	      fontSize: '18',
	      fontWeight: 'bold'
	    }
	  },
	  labelLine: {
	    show: false
	  },
	  data: [
	    { value: 1048, name: '水温过高' },
	    { value: 735, name: '压力过高' },
	    { value: 580, name: '流速过高' },
	    { value: 484, name: '设备异常' },

	  ]
	}
	
  ]
};
	myChart.setOption(option);
	window.addEventListener('resize',function(){
		myChart.resize();
	});
})();

// 每日用电量
(function(){
	var myChart = echarts.init(document.querySelector(".line .matter"));
	var option = {
		// 提示框
    tooltip: {
        trigger: 'axis'
    },
	grid:{
		top:'18%',
		left:'14%',
		right:'8%',
		bottom:'22%',
	},
    xAxis: {
        type: 'category',
        data: ['4月09日', '4月10日', '4月11日', '4月12日', '4月13日', '4月14日', '4月15日']
    },
	// y轴的刻度颜色
    yAxis: {
        axisLabel:{
        	show:'true',
        	textStyle:{
        		color:'rgba(255,255,255,0.5)',
        	},
        },
		splitLine:{
			show:'true',
			lineStyle:{
				color:['rgba(255,255,255,0.4)'],
				width:1,
				type:'solid',
			}
		},
    },
	color: ['#00f2f1'],
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
};
function getColor() {
    var c1 = parseInt(Math.random() * 255);
    var c2 = parseInt(Math.random() * 255);
    var c3 = parseInt(Math.random() * 255);
    var c4 = Math.random();
    return "rgba("+c1+","+c2+","+c3+","+c4+")";
};
	myChart.setOption(option);
	window.addEventListener('resize',function(){
		myChart.resize();
	});
})();

// 设备运行效率
(function(){
	var myChart = echarts.init(document.querySelector(".ybp"));
	 var highlight = '#03b7c9';
	
	  var demoData = [
	     {
	          name: '综合效率',
	          value: 90,
	          unit: '%',
	          pos: ['50%', '46%'],//表盘位置
	          range: [0, 100],
	          splitNum: 10,
	          YS: [
	              [0.3, '#f3390d'],
	              [0.8, '#30da74'],
	              [1, '#119eff'],
	          ]
	      }
	  ];
	var  option = {
      series: (function() {
          var result = [];
			
          demoData.forEach(function(item) {
              result.push(
                  // 外围刻度
                  {
                      type: 'gauge',
                      center: item.pos,
                      radius: '50%', // 1行2个
                      splitNumber: item.splitNum || 10,
                      min: item.range[0],
                      max: item.range[1],
                      startAngle: 225,
                      endAngle: -45,
                      axisLine: {
                          show: true,
                          lineStyle: {
                              width: 2,
                              shadowBlur: 0,
                              color: [
                                  [1, highlight]
                              ]
                          }
                      },
					
                      axisTick: {
                          show: true,
                          lineStyle: {
                              color: highlight,
                              width: 1, //内部小指针的粗细
                          },
                          length: -5,//内部小指针的长短
                          splitNumber:5,//内部小指针疏密
						  distance:-1,//内部小指针的距离
                      },
                      splitLine: {
                          show: true,
                          length: -8,//大指针的长短
						  distance:-2,//大指针的距离
                          lineStyle: {
                              color: highlight,
                          }
                      },
					  // 刻度数字圆圈大小
                      axisLabel: {
                          distance: -14,
                          textStyle: {
                              color: highlight,
                              fontSize: '10',

                          }
                      },
                      pointer: {
                          show: 0
                      },
                      detail: {
                          show: 0
                      }
                  }, {
                      name: '速度',
                      type: 'gauge',
                      center: item.pos,
                      splitNumber: item.splitNum || 10,
                      min: item.range[0],
                      max: item.range[1],
                      radius: '54%',//内部圆圈的大小
                      axisLine: { // 坐标轴线
                          show: false,
                          lineStyle: { // 属性lineStyle控制线条样式
                              color: item.YS,
                              shadowColor: "#ccc",
                              shadowBlur: 25,
                              width: 0
                          }
                      },
                      axisLabel: {
                          show: false
                      },
                      axisTick: { // 坐标轴小标记
                          // show: false,
                          length:12, // 属性length控制线长
                          lineStyle: { // 属性lineStyle控制线条样式
                              color: 'auto',
                              width: 1.4
                          }
                      },
                      splitLine: { // 分隔线
                          show: false,
                          length: 10, // 属性length控制线长
                          lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                              color: 'auto'
                          }
                      },
                      title: {
                          textStyle: { // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                              fontWeight: 'bolder',
                              fontSize: 20,
                              fontStyle: 'italic'
                          }
                      },
                      detail: {
						  padding:[35,0,0,0],
                          show: true,
                          offsetCenter: [0, '100%'],
                          textStyle: {
                              fontSize: 22,
							  color: '#4be4de'
                          },
                          formatter: [
                              '{value} ' + (item.unit || ''),
                              '{name|' + item.name + '}'
                          ].join('\n'),
                          rich: {
                              name: {
                                  fontSize: 14,
                                  lineHeight: 10,
                                  color: 'rgba(181,247,253,0.8)'
                              }
                          }
                      },
                      data: [{
                          value: item.value
                      }],
                      pointer: {
                          width: 4
                      }
                  },
                  // 内侧指针、数值显示
                  {
                      name: item.name,
                      type: 'gauge',
                      center: item.pos,
                      radius: '40%',
                      startAngle: 225,
                      endAngle: -45,
                      min: item.range[0],
                      max: item.range[1],
                      axisLine: {
                          show: true,
                          lineStyle: {
                              width: 16,
                              color: [
                                  [1, 'rgba(75,228,255,.1)']
                              ]
                          }
                      },
                      axisTick: {
                          show: 0,
                      },
                      splitLine: {
                          show: 0,
                      },
                      axisLabel: {
                          show: 0
                      },
                      pointer: {
                          show: true,
                          length: '90%',
                          width: 3,
                      },
                      itemStyle: { //表盘指针的颜色
                          color: 'rgba(255, 153, 0, 0.31)',
                          borderColor: '#ff9900',
                          borderWidth: 1
                      },
                      detail: {
                          show: false,
                          offsetCenter: [0, '100%'],
                          textStyle: {
                              fontSize: 20,
                              color: '#00eff2'
                          },
                          formatter: [
                              '{value} ' + (item.unit || ''),
                              '{name|' + item.name + '}'
                          ].join('\n'),
                          rich: {
                              name: {
                                  fontSize: 14,
                                  lineHeight: 30,
                                  color: '#00eff2'
                              }
                          }
                      },

                      data: [{
                          value: item.value
                      }]
                  }
              );
          });
          return result;
      })()
  };
	myChart.setOption(option);
	window.addEventListener('resize',function(){
		myChart.resize();
	});
})();


// 机器甘特图
(function(){
	var myChart = echarts.init(document.querySelector(".gantt .matter"));
	var types = [
	    {name: '运行', color: '#75d874'},
	    {name: '故障', color: '#bd6d6c'},
	    {name: '等待', color: '#e0bc78'},
	    {name: '备用', color: '#7b9ce1'},
	];
	


	var option = {
    //鼠标提示
    tooltip: {
        trigger: 'axis'
    },
    // //标题
    // title: {
    //     text: '甘特图-机器运行状态',
    //     left: 'center'
    // },
  legend: {
        show : true,
        data: ['运行', '故障', '等待', '备用'],
        right: 80,
        top: 12,
        left:'center',
		textStyle:{
			color:'rgba(255,255,255,0.5)'
		}
    },    

    grid: {
        top:'10%',
        left:'10%',
        right:'6%',
        bottom:'0%',
        height: '130'
    },
    xAxis: {
        type: 'category',
        data: ['运行', '故障', '待机', '备用']
    },
    yAxis: {
       
    },

    series: [{
        data: [120, 200, 150, 80],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(220, 220, 220, 0.8)'
        }
    }]
};
	myChart.setOption(option);
	window.addEventListener('resize',function(){
		myChart.resize();
	});
})();

// 剩余寿命预测
(function(){
	var myChart = echarts.init(document.querySelector(".forecast .matter"));	
	var option = {
    legend: {
		top: '4%', //  图例位置
		left: 'center',
        data: [],
		textStyle:{
			color:'rgba(255,255,255,0.5)',
		},
    },
	grid:{
		top:'20%',
		left:'14%',
		right:'16%',
		bottom:'15%',
	},
    tooltip: {
        trigger: 'axis'
    },
    // calculable: true,
    xAxis: {},
    yAxis: {},
    series: [
        {
            symbolSize: 15,
            data: [
                [10.0, 8.04],
                [8.0, 6.95],
                [13.0, 7.58],
                [9.0, 8.81],
                [11.0, 8.33],
                [14.0, 9.96],
                [6.1, 7.24],
                [4.0, 4.26],
                [12.0, 10.84],
                [7.0, 4.82],
                [5.0, 5.68]
            ],
            type: 'scatter'
        }
    ]
};
	myChart.setOption(option);
	window.addEventListener('resize',function(){
		myChart.resize();
	});
})();

