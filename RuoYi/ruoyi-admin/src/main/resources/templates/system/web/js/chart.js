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
        { value: 123, name: '油温过高' },
		{ value: 735, name: '油温过低' },
        { value: 789, name: '电流异常' },
        { value: 100, name: '轴承异常' },
        { value: 111, name: '齿轮异常' },
		{ value: 222, name: '气压异常' },
		{ value: 333, name: '油压不足' },
		{ value: 444, name: '异常停机' },
		{ value: 555, name: '卡槽移位' },
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
	    { value: 1048, name: '油温过高' },
	    { value: 735, name: '油温过低' },
	    { value: 580, name: '电流异常' },
	    { value: 484, name: '轴承异常' },
	    { value: 300, name: '齿轮异常' },
		{ value: 580, name: '气压异常' },
		{ value: 484, name: '油压不足' },
		{ value: 300, name: '异常停机' },
		{ value: 1048, name: '卡槽移位' },
	  ]
	}
	
  ]
};
	myChart.setOption(option);
	window.addEventListener('resize',function(){
		myChart.resize();
	});
})();

// 设备故障预测
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
		
        data: [
            '2019-12-14 00:00:00', 
            '2019-12-15 00:00:00', 
            '2019-12-16 00:00:00', 
            '2019-12-17 00:00:00', 
            '2019-12-18 00:00:00', 
            '2019-12-19 00:00:00', 
            '2019-12-20 00:00:00'
        ],
        axisLabel: {
            formatter: function(res) {
                return res.split(" ")[0] + "\n" + res.split(" ")[1];
            },
			show:'true',
			textStyle:{
				color:'rgba(255,255,255,0.5)',
			},
        }
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
        name: "故障预测",
        smooth: true,
		symbolSize:'6',
        type: 'line',
		itemStyle:{
			normal:{
				lineStyle:{
					width:'3',
					// color:'#3aefc6',
				}
			}
		},
        data:[150, 100, 121, 164, 220, 260, 210],
        markArea: {
            silent: true,
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderType: 'dashed'
                }
            },
            data: [[
                {},
                {
                    name: '过去状态',
                    xAxis: '2019-12-16 00:00:00',
                    itemStyle: {
                        color: 'rgba(255,255,255,0.3)'
                    }
                }
            ], [
                {
                    name: '当前状态',
                    xAxis: '2019-12-16 00:00:00',
                    itemStyle: {
                        color:'rgba(226,176,25,0.3)'
                    }
                },
                {
                    xAxis: '2019-12-19 00:00:00'
                    
                }
            ], [
                {
                    name: '将来状态',
                    xAxis: '2019-12-19 00:00:00',
                    itemStyle: {
						color:'rgba(4,109,252,0.3)'
                        // color: getColor()
                    }
                },
                {}
            ]]
        },
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

// 设备OEE
(function(){
	var myChart = echarts.init(document.querySelector(".ybp"));
	 var highlight = '#03b7c9';
	
	  var demoData = [
	     {
	          name: '设备综合效率',
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
	var data = [];
	var dataCount = 40;
	var startTime = +new Date();
	var categories = [''];
	var types = [
	    {name: '运行', color: '#75d874'},
	    {name: '故障', color: '#bd6d6c'},
	    {name: '等待', color: '#e0bc78'},
	    {name: '备用', color: '#7b9ce1'},
	];
	
	//产生模拟数据
	echarts.util.each(categories, function (category, index) {
	    var baseTime = startTime;
	    for (var i = 0; i < dataCount; i++) {
	        var typeItem = types[Math.round(Math.random() * (types.length-1))];
	        var duration = Math.round(Math.random() * 1000000);
	        data.push({
	            name: typeItem.name,
	            value: [
	                index,
	                baseTime,
	                baseTime += duration,
	                duration
	            ],
	            itemStyle: {
	                normal: {
	                    color: typeItem.color
	                }
	            }
	        });
	        baseTime += Math.round(Math.random() * 2000);
	    }
	});
	//设定图形效果
	function renderItem(params, api) {
	    var categoryIndex = api.value(0);
	    var start = api.coord([api.value(1), categoryIndex]);
	    var end = api.coord([api.value(2), categoryIndex]);
	    var height = api.size([0, 1])[1] * 0.6;
	
	    var rectShape = echarts.graphic.clipRectByRect({
	        x: start[0],
	        y: start[1] - height / 2,
	        width: end[0] - start[0],
	        height: height
	    }, {
	        x: params.coordSys.x,
	        y: params.coordSys.y,
	        width: params.coordSys.width,
	        height: params.coordSys.height
	    });
	
	    return rectShape && {
	        type: 'rect',
	        shape: rectShape,
	        style: api.style()
	    };
	
	}

	var option = {
    //鼠标提示
    tooltip: {
        formatter: function (params) {
            return params.marker + params.name + ': ' + params.value[3] + ' ms';
        }
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
    //缩放
    dataZoom: [{
        type: 'slider',
        show : false,
        filterMode: 'weakFilter',
        showDataShadow: false,
        top: 550,
        height: 10,
        borderColor: 'transparent',
        backgroundColor: '#e2e2e2',
        handleIcon: 'M10.7,11.9H9.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z', //jshint ignore:line
        handleSize: 20,
        handleStyle: {
            shadowBlur: 6,
            shadowOffsetX: 1,
            shadowOffsetY: 2,
            shadowColor: '#aaa'
        },
        labelFormatter: '',
         start: 0,
         end: 70,
    }, {
        type: 'inside',
        filterMode: 'weakFilter'

    }],
    grid: {
        top:'25%',
        left:'6%',
        right:'6%',
        bottom:'0%',
        height: '120'
    },
    xAxis: {
        min: startTime,
        scale: true,
        axisLabel: {
            formatter: function (val) {
                return Math.max(0, val - startTime) + ' ms';
            },
			textStyle:{
				color:'rgba(255,255,255,0.4)'
			}
        }
    },
    yAxis: {
        data: categories
    },

    series: [{
        name:'运行',
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
            opacity: 0.8,
            color: "#75d874"
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: data
    },
    {
        name:'故障',
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
            opacity: 0.8,
             normal: {
                    color: "#bd6d6c",
                    borderWidth: 2
                }
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: data
    },
    {
        name:'等待',
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
            opacity: 0.8,
             normal: {
                    color: "#e0bc78",
                    borderWidth: 2
                }
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: data
    },
    {
        name:'备用',
        type: 'custom',
        renderItem: renderItem,
        itemStyle: {
            opacity: 0.8,
             normal: {
                    color: "#7b9ce1",
                    borderWidth: 2
                }
        },
        encode: {
            x: [1, 2],
            y: 0
        },
        data: data
    }
    ]
};
	myChart.setOption(option);
	window.addEventListener('resize',function(){
		myChart.resize();
	});
})();

// 剩余寿命预测
(function(){
	var myChart = echarts.init(document.querySelector(".forecast .matter"));
	let arr2 = [1000000, 630000, 900000, 1250000, 1954000, 2192000, 1835000, 1789000, 2393000, 1750000, 2400000, 2500000];
	let arr1 = [1123180.15, 655552.2, 1347675.87, 1481906.4, 3866326.82, 3147657.91, 2432494.66, 1782080.1, 969800];
	
	let budget = [0];
	let realIncome = [0];
	
	for (let i = 0; i < 12; i++) {
	    let tmp = arr1[i] || NaN;
	    tmp = parseFloat((tmp / 100000).toFixed(1));
	    budget.push(tmp + budget[i]);
	}
	for (let i = 0; i < 12; i++) {
	    let tmp = arr2[i] || NaN;
	    tmp = parseFloat((tmp / 100000).toFixed(1));
	    realIncome.push(tmp + realIncome[i]);
	}
	budget = budget.slice(1);
	realIncome = realIncome.slice(1);
	console.log(budget)
	console.log(realIncome)
	
	var option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
		top: '4%', //  图例位置
		left: 'center',
        data: ['当前寿命', '预测寿命'],
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
    calculable: true,
    xAxis: [{
		axisLabel:{
			show:'true',
			textStyle:{
				color:['red'],
			},
		},
        type: 'category',
        splitLine: {
            show: false
        },
        data: function() {
            var list = [];
            for (var i = 1; i <= 12; i++) {
                list.push(i + '月');
            }
            return list;
        }()
    }],
    yAxis: [{
        type: 'value',
		axisLabel:{
			show:'true',
			textStyle:{
				color:'rgba(255,255,255,0.5)',
			},
		},
		// data:['1','2']
		splitLine:{
			show:'true',
			lineStyle:{
				color:['rgba(255,255,255,0.4)'],
				width:1,
				type:'solid',
			}
		},
		
    }],
    series: [{
            name: '当前寿命',
            type: 'line',
            data: budget,
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        },
		
        {
            name: '预测寿命',
            type: 'line',
            data: realIncome,
            markLine: {
                data: [{
                    type: 'average',
                    name: '平均值'
                }]
            }
        }
    ]
};
	myChart.setOption(option);
	window.addEventListener('resize',function(){
		myChart.resize();
	});
})();

