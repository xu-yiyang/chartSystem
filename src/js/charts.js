// JavaScript Document
$(document).ready(function(){
	

	// 摄像头每月访问数----柱状图
	var accessChart = echarts.init(document.getElementById('eharts-access'));
    accessOption = {
        tooltip: {
            trigger: 'item',
            show:screen ? false : true,
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            position: "top",
            formatter: function(params) {
                return "<div class='tooltipTop'><div class='tooltipTxtTop'></div>" + params.value + "</div>";
            },
            backgroundColor: 'transparent'
        },
        "legend": {
		    "data": [{
		        "name": "每月访问数",
		        "icon": "circle",
		        "textStyle": {
		            "color": "#fff"
		        }
		    }],
		    "top": "8%",
		    'right':'4%'
		},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            data: ['01月','02月','03月','04月','05月','06月'],
            axisLine:{
            	lineStyle:{
            		color:"#1e326a"
            	}
            },
	        //刻度横线
	        axisTick: {
	            show: false
	        },
	        //刻度字样式
	        axisLabel: {
	            textStyle: {
	                color: '#8f97a1',
	                fontSize:'10',
	                align: 'center'
	            },
	        },
        }],
        yAxis: [{
        	// 刻度线
            axisLine:{
            	lineStyle:{
            		color:"#1e326a"
            	}
            },
	        //刻度横线
	        axisTick: {
	            show: false
	        },
	        //刻度字样式
	        axisLabel: {
	            textStyle: {
	                color: '#8f97a1',
	                fontSize:'10',
	                align: 'center'
	            },
	            margin: 15,
	        },
	        //网格线
	        splitLine:{
				lineStyle:{
					type:'dashed',
					color: '#1e326a'//网格线颜色
				}
			},
        }],
        series: [{
            name: '每月访问数',
            type: 'bar',
            barWidth: '40%',
            data: [500,290,410,350,295,410],
            label: {
                normal: {
                    show: screen ? true : false,
                    position: 'top',
					padding:[6,10,10],
                    color:'#fff',
                    formatter: '{c}',
					backgroundColor:{
						image:label_screen
					},
                }
            },
            itemStyle: {
                normal: {
                    color:isIE8==true ? 'rgba(58,45,215, 1)' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(109,215,247, 1)'
                    }, {
                        offset: 1,
                        color:screen!=true ? 'rgba(58,45,215, 1)' : 'transparent'
                        // color: 'transparent'
                    }]),
                    // shadowColor: 'rgba(58,45,215, 0.1)',
                    // shadowBlur: 10
                }
            }
        }],
    };
    accessChart.setOption(accessOption);


    // 摄像头每月维护数----柱状图
	var mtChart = echarts.init(document.getElementById('eharts-maintenance'));
    mtOption = {
        tooltip: {
            trigger: 'item',
            show:screen ? false : true,
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            position: "top",
            formatter: function(params) {
                return "<div class='tooltipTop'><div class='tooltipTxtTop'></div>" + params.value + "</div>";
            },
            backgroundColor: 'transparent'
        },
        "legend": {
		    "data": [{
		        "name": "每月访问数",
		        "icon": "circle",
		        "textStyle": {
		            "color": "#fff"
		        }
		    }],
		    "top": "8%",
		    'right':'4%'
		},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            data: ['01月','02月','03月','04月','05月','06月'],
            axisLine:{
            	lineStyle:{
            		color:"#1e326a"
            	}
            },
	        //刻度横线
	        axisTick: {
	            show: false
	        },
	        //刻度字样式
	        axisLabel: {
	            textStyle: {
	                color: '#8f97a1',
	                fontSize:'10',
	                align: 'center'
	            },
	        },
        }],
        yAxis: [{
        	// 刻度线
            axisLine:{
            	lineStyle:{
            		color:"#1e326a"
            	}
            },
	        //刻度横线
	        axisTick: {
	            show: false
	        },
	        //刻度字样式
	        axisLabel: {
	            textStyle: {
	                color: '#8f97a1',
	                fontSize:'10',
	                align: 'center'
	            },
	            margin: 15,
	        },
	        //网格线
	        splitLine:{
				lineStyle:{
					type:'dashed',
					color: '#1e326a'//网格线颜色
				}
			},
        }],
        series: [{
            name: '每月访问数',
            type: 'bar',
            barWidth: '40%',
            data: [500,290,410,350,295,410],
            label: {
                normal: {
                    show: screen ? true : false,
                    position: 'top',
					padding:[6,10,10],
                    color:'#fff',
                    formatter: '{c}',
					backgroundColor:{
						image:label_screen
					},
                }
            },
            itemStyle: {
                normal: {
                    color:isIE8==true ? 'rgba(247,103,20, 1)' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(222,147,60, 1)'
                    }, {
                        offset: 1,
                        color:  screen!=true ? 'rgba(247,103,20, 1)' : 'transparent'
                        // color: 'transparent'
                    }]),
                    // shadowColor: 'rgba(247,103,20, 0.1)',
                    // shadowBlur: 10
                }
            }
        }],
    };
    mtChart.setOption(mtOption);

    // 当前摄像头异常总数-----横向柱状图
	var abnormalChart = echarts.init(document.getElementById('eharts-abnormal'));
	var abnormalData=[500,290,350,295,410];//数据
	var yAbnormaldata=['离线总数','摄像头聚焦总数','图像亮度不正常总数','图像颜色失真总数','视频流卡顿总数'];//y轴刻度
	var dataShadow = [];//背景阴影
	for (var i = 0; i < abnormalData.length; i++) {
	    dataShadow.push(500);
	}
	var toolRightBefore="";
    abnormalOption = {
        tooltip: {
            trigger: 'item',
            show:screen ? false : true,
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            // confine:true,
            // position: "right",
          	position: function (point, params, dom, rect, size) {
          		toolRightBefore=rect.height+6
			    // 固定在顶部
			    return 'right';
			},
            formatter: function(params) {
            	return "<div class='tooltipRight'><i class='toolBefore' style='height:"+toolRightBefore+"px;margin-top:-"+toolRightBefore/2+"px;'></i><div class='tooltipTxtRight'></div>" + params.value + "</div>";
            },
            backgroundColor: 'transparent'
        },
        "legend": {
		    "data": [{
		        "name": "摄像头异常数",
		        "icon": "circle",
		        "textStyle": {
		            "color": "#fff"
		        }
		    }],
		    "top": "8%",
		    'right':'4%'
		},
        grid: {
            left: '0',
            right: '-13%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
        	// 刻度线
            axisLine:{
            	lineStyle:{
            		color:"#1e326a"
            	}
            },
	        //刻度横线
	        axisTick: {
	            show: false
	        },
	        //刻度字样式
	        axisLabel: {
	            textStyle: {
	                color: '#8f97a1',
	                fontSize:'10',
	                align: 'center'
	            },
	        },
	        //网格线
	        splitLine:{
				show:false
			},
        }],
        yAxis: [{
            data: yAbnormaldata,
        	// 刻度线
            axisLine:{
            	lineStyle:{
            		color:"#1e326a"
            	}
            },
	        //刻度横线
	        axisTick: {
	            show: false
	        },
	        //刻度字样式
	        axisLabel: {
	            textStyle: {
	                color: '#8f97a1',
	                fontSize:'10',
	                align: 'right'
	            },
	            margin: 15,
	        },
        },{
            type: 'category',
            axisLine: {show:false},
            axisTick: {show:false},
            axisLabel: {show:false},
            splitArea: {show:false},
            splitLine: {show:false},
            data: yAbnormaldata
        }],
        series: [{//背景
	            type: 'bar',
	            barWidth: '60%',
	            //颜色透明度
	            itemStyle: {
	                normal: {
	                    color: '#242444'
	                }
	            },
        		silent: true,
	            barGap:'-100%',
	            barCategoryGap:'40%',
	            data: dataShadow,
		        animation: false
	        },{
                type: 'bar',
                name: '摄像头异常数',
            	yAxisIndex:1,
                barWidth: '60%',
                data:abnormalData,
	            label: {
	                normal: {
	                    show: screen ? true : false,
	                    position: 'right',
						padding:[10,6,10,10],
	                    color:'#fff',
	                    formatter: '{c}',
						backgroundColor:{
							image:label_screen_left
						},
	                }
	            },
                itemStyle: {
                    normal: {
                        color: '#02dfe2',
                    }
                }
            }
        ],
    };
    abnormalChart.setOption(abnormalOption);


    // 新增摄像头总数----折线图
    var totalChart = echarts.init(document.getElementById('eharts-total'));
	var totalData=[500,290,410,350,295,410];//数据
	var xTotaldata=['01月','02月','03月','04月','05月','06月'];//y轴刻度
    totalOption = {
        tooltip: {
            trigger: 'item',
            show:screen ? false : true,
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            // position: "right",
          	position: function (point, params, dom, rect, size) {
			    // 固定在顶部
			    return 'top';
			},
            formatter: function(params) {
                return "<div class='tooltipTop'><div class='tooltipTxtTop'></div>" + params.value + "</div>";
            },
            backgroundColor: 'transparent'
        },
        "legend": {
		    "data": [{
		        "name": "摄像头数",
		        "icon": "circle",
		        "textStyle": {
		            "color": "#fff"
		        }
		    }],
		    "top": "8%",
		    'right':'4%'
		},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            data: xTotaldata,
		    boundaryGap: false,
        	// 刻度线
            axisLine:{
            	lineStyle:{
            		color:"#1e326a"
            	}
            },
	        //刻度横线
	        axisTick: {
	            show: false
	        },
	        //刻度字样式
	        axisLabel: {
	            textStyle: {
	                color: '#8f97a1',
	                fontSize:'10',
	                align: 'center'
	            },
	        },
	        //网格线
	        splitLine:{
	        	show:true,
		        interval: 'auto',
				lineStyle:{
					type:'dashed',
					color: '#1e326a'//网格线颜色
				}
			},
        }],
        yAxis: [{
        	// 刻度线
            axisLine:{
            	lineStyle:{
            		color:"#1e326a"
            	}
            },
	        //刻度横线
	        axisTick: {
	            show: false
	        },
	        //刻度字样式
	        axisLabel: {
	            textStyle: {
	                color: '#8f97a1',
	                fontSize:'10',
	                align: 'center'
	            },
	            margin: 15,
	        },
	        //网格线
	        splitLine:{
				lineStyle:{
					type:'dashed',
					color: '#1e326a'//网格线颜色
				}
			},
        }],
        series: [{
                type: 'line',
                name: '摄像头数',
		        symbol:'image://'+icon_line_purple,
		        symbolSize:'10',
                data:totalData,
                itemStyle: {
                    normal: {
                        color: '#5b64d8',
                    }
                },
	            label: {
	                normal: {
	                    show: screen ? true : false,
	                    position: 'top',
						padding:[6,10,10],
	                    color:'#fff',
	                    formatter: '{c}',
						backgroundColor:{
							image:label_screen
						},
	                }
	            },
                areaStyle: {
                    normal: {
                        color:isIE8==true ? 'rgba(40,45,110, 1)' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(40,45,110, 1)'
                        }, {
                            offset: 1,
                            color: 'rgba(58,45,215, 0)'
                        }]),
                    }
                }
            }
        ],
    };
    totalChart.setOption(totalOption);

    // 摄像头警钟分布----南丁格尔饼图
    var dbChart = echarts.init(document.getElementById('eharts-distribution'));
    dbOption = {
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
        	type: 'scroll',//设置翻页
            textStyle:{
            	color:'#fff',
            	fontSize:14
            },
            pageIconColor:"#fff",//翻页按钮
            x: 'center',
            bottom: 10,
	        itemWidth:10,
	        itemHeight:10,
	        padding:13,
            backgroundColor:'#112e7a',
            borderColor:'#76c5fc',
            borderWidth:1,
            pageTextStyle:{
            	color:'#fff',//翻页文字颜色
            },
	        data: ['海康', '天地伟业', '宇视', '大华', '其他'],
        },
        series: [{
            type: 'pie',
            radius: [0, '60%'],
		    center: ['50%', '41%'],
            roseType: 'area',
			data: [
				// {
				//     value: 0,
				//     name: 'rose1',
				//     label: {
				//         show: false
				//     },
				//     labelLine: {
				//         show: false
				//     }
				// }, 
				{
					value: 15,
					name: '海康',
					itemStyle: {
						normal: {
							color: "#19dc7c"
						}
					}
				}, {
					value: 20,
					name: '天地伟业',
					itemStyle: {
						normal: {
							color: "#01a2f0"
						}
					}
				}, {
					value: 25,
					name: '宇视',
					itemStyle: {
						normal: {
							color: "#ce3636"
						}
					}
				}, {
					value: 30,
					name: '大华',
					itemStyle: {
						normal: {
							color: "#8c70f8"
						}
					}
				}, {
					value: 35,
					name: '其他',
					itemStyle: {
						normal: {
							color: "#fa9022"
						}
					}
				}
			],
            label: {
                normal: {
                    position: 'outside',
                    fontSize: 12,
                    color: '#fff',
                    lineHeight: 20,
                    verticalAlign:'top',
                    formatter: function(params) {
                    	var h="";
                    	if(params.name.length==4){
                    		h='{hb2|'+params.name+'}'+'\n{hr|'+params.percent+'%}';
                    	}else{
                    		h='{hb1|'+params.name+'}'+'\n{hr|'+params.percent+'%}';
                    	}
                    	return h
                    },
                    // formatter:'{b}\n{hr|{d}%}{hb|}',
                    rich:{
                    	hr:{
                    		padding:[20,25,0],
                    		color:'#fff',
                    		fontSize:14
                    	},
                    	hb1:{
                    		width:10,
                    		height:10,
                    		color:'#fff',
                    		padding: [0, -30],
                    	},
                    	hb2:{
                    		width:10,
                    		height:10,
                    		color:'#fff',
                    		padding: [0, -50],
                    	}
                    },
                    borderWidth: 20,
                    borderRadius: 4,
                }
            },
	        labelLine:{
	        	normal:{
	        		length:0,
	        		length2:60,
	        	}
	        },
            itemStyle: {
	            normal:{
	                shadowBlur: 25,
	                shadowColor: 'rgba(0, 0, 0, 0.7)',
	            },
	        },
            animationType: 'scale',
        }]
    };
    dbChart.setOption(dbOption);


    // 摄像头在线状态-----环形图
    var stateChart = echarts.init(document.getElementById('eharts-state'));
    stateOption = {
        // title: {
        //     text: '{a}',
        //     x: '25%',
        //     y: 'center',
        //     textStyle: {
        //         fontWeight: 'bold',
        //         color: '#fff',
        //         fontSize: '28'
        //     }
        // },
	    series: [
	        //中间圆环
	        {
	            type: 'pie',
	            hoverAnimation: false, //鼠标移入变大
	            center: ['25%', '50%'],
                radius: ['50%', '66%'],
                // color: ['#f81858', 'none'],
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                },
	            data:  [{
				    value: 100,
				    name: '在线状态',
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: function(params) {
                                return '{percent|' + params.percent + '%}';
                            },
                            rich: {
                                percent: {
                                    color: '#fff',
                                    fontSize: 26,
                                    fontWeight: 'bold'
                                },
                            }
                        }
                    },
				    itemStyle: {
				        normal: {
				            color: "#01a1f0",
				        }
				    },
				}, {
				    value: 100,
				    name: '不在线状态',
				    itemStyle: {
				        normal: {
				            color: "#fe6682",
				        }
				    },
				}]
	        }

	    ],
	};
    stateChart.setOption(stateOption);


    // 江西地图
	// var uploadedDataURL = "http://gallerybox.echartsjs.com/asset/get/s/data-1509940365453-SkScnUTCW.json";
    var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value),
                });
            }
        }
        // 有数据的地区的名称和value值
        return res;
    };
	function showProvince() {
		var name = 'jiangxi';
    	var stateChart = echarts.init(document.getElementById('eharts-map'));
        stateChart.showLoading();
        $.get('src/js/'+map_src, function(geoJson) {
            echarts.registerMap(name, geoJson);
            stateChart.hideLoading();
			stateChart.setOption({
				tooltip: {
					trigger: 'item',
        			formatter: '{b}:{c}'
				},
		        geo: {
		            show: true,
		            map: name,
                    label: {
                        normal: {
                            show: true,
                            color:'#fff',
                            position: 'right',
                            // formatter:'{b}\n{c}'
                        },
                        emphasis: {
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
		            itemStyle: {
                        normal: {
                            // areaColor: 'rgb(128, 128, 128)',
                            areaColor:isIE8==true ? 'transparent' : {
                                type: 'radial',
                                x: 0.5,
                                y: 0.5,
                                r: 0.8,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(147, 235, 248, .3)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            borderColor: '#94edfa',
                        },
                        emphasis: {
                            areaColor: '#b2e7ff',
                            borderWidth: 0
                        }
                    }
		        },
				series: [{
					type: 'map',
					map: name,
                    geoIndex: 0,
                    roam: true,
					// label: {
					// 	normal: {
					// 		show: true,
					// 		color:'#fff',
     //                		position: 'right',
					// 		// formatter:'{b}\n{c}'
					// 	},
					// 	emphasis: {
					// 		textStyle: {
					// 			color: '#fff'
					// 		}
					// 	}
					// },
					// itemStyle: {
					// 	normal: {
     //                		// areaColor: 'rgb(128, 128, 128)',
					// 		areaColor:isIE8==true ? 'transparent' : {
					// 			type: 'radial',
					// 			x: 0.5,
					// 			y: 0.5,
					// 			r: 0.8,
					// 			colorStops: [{
					// 				offset: 0,
					// 				color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
					// 			}, {
					// 				offset: 1,
					// 				color: 'rgba(147, 235, 248, .3)' // 100% 处的颜色
					// 			}],
					// 			globalCoord: false // 缺省为 false
					// 		},
					// 		borderColor: '#94edfa',
					// 	},
					// 	emphasis: {
					// 		areaColor: '#b2e7ff',
					// 		borderWidth: 0
					// 	}
					// },
					// animation: false,
					data: jxData
				}, {
		            name: '点',
		            type: 'scatter',
		            coordinateSystem: 'geo',
		            symbol: 'pin',
		            symbolSize: 50,
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        color: '#fff',
		                        fontSize: 19,
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#1392ff', //标志颜色
		                }
		            },
		            zlevel: 6,
		            data: convertData(jxData)
		        }],

			});
		});
	}
	showProvince();
    
});