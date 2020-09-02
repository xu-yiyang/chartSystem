// 地图html
dialog_map_html='<div class="table-dialog xu-display-table">'+
	'	<div class="xu-table-cell">'+
	'		<div class="dialog-main xu-maps-box_bg">'+
	'			<h3 class="dialog-tit">'+
	'				<span>设备信息</span>'+
	'				<i class="iconfont j-close-dialog">&#xe64c;</i>'+
	'			</h3>'+
	'			<div id="xu-map" class="xu-map">'+
	'				'+
	'			</div>'+
	'			<div class="dialog-msg">'+
	'				<label>'+
	'					<em>摄像头编号：</em>'+
	'					<i>devnum_865</i>'+
	'				</label>'+
	'				<label>'+
	'					<em>归属警种：</em>'+
	'					<i>交管局</i>'+
	'				</label>'+
	'				<label>'+
	'					<em>IP地址：</em>'+
	'					<i>32.62.111.2</i>'+
	'				</label>'+
	'				<label>'+
	'					<em>摄像头名称：</em>'+
	'					<i>name-11981</i>'+
	'				</label>'+
	'				<label>'+
	'					<em>状态：</em>'+
	'					<i>离线</i>'+
	'				</label>'+
	'				<label>'+
	'					<em>MAC地址：</em>'+
	'					<i>MACDZ_865</i>'+
	'				</label>'+
	'			</div>'+
	'			<div class="dialog-btn">'+
	'				<a href="##">'+
	'					查看全部访问日志'+
	'				</a>'+
	'				<a href="##">'+
	'					查看全部维修记录'+
	'				</a>'+
	'			</div>'+
	'		</div>'+
	'	</div>'+
	'</div>';

// 图表html
dialog_chart_html='<div class="table-dialog xu-display-table">'+
	'	<div class="xu-table-cell">'+
	'		<div class="dialog-main xu-maps-box_bg">'+
	'			<h3 class="dialog-tit">'+
	'				<span class="i">用户信息</span>'+
	'				<div class="msg i">'+
	'					<label>账号：<i>18852550</i></label>'+
	'					<label>警种：<i>交警局</i></label>'+
	'					<label>执行区域：<i>广东省湛江市廉江市</i></label>'+
	'				</div>'+
	'				<i class="iconfont j-close-dialog">&#xe64c;</i>'+
	'			</h3>'+
	'			<div class="xu-dialog-chart">'+
	'				<div id="xu-chart-line" class="chart"></div>'+
	'			</div>'+
	'			<div class="xu-dialog-table">'+
	'				<table>'+
	'					<thead>'+
	'						<tr>'+
	'							<th>终端</th>'+
	'							<th>动作</th>'+
	'							<th>访问时间</th>'+
	'						</tr>'+
	'					</thead>'+
	'					<tbody>'+
	'						<tr>'+
	'							<td>92.90.23.12</td>'+
	'							<td>开始预览视频</td>'+
	'							<td>2018-01-02 09:10:50</td>'+
	'						</tr>'+
	'						<tr>'+
	'							<td>92.90.23.12</td>'+
	'							<td>开始预览视频</td>'+
	'							<td>2018-01-02 09:10:50</td>'+
	'						</tr>'+
	'						<tr>'+
	'							<td>92.90.23.12</td>'+
	'							<td>开始预览视频</td>'+
	'							<td>2018-01-02 09:10:50</td>'+
	'						</tr>'+
	'					</tbody>'+
	'				</table>'+
	'			</div>'+
	'			<div class="dialog-btn">'+
	'				<a href="##">'+
	'					查看全部访问历史'+
	'				</a>'+
	'			</div>'+
	'		</div>'+
	'	</div>'+
	'</div>';

// 终端html
dialog_terminal_html='<div class="table-dialog xu-display-table">'+
	'	<div class="xu-table-cell">'+
	'		<div class="dialog-main xu-maps-box_bg">'+
	'			<h3 class="dialog-tit">'+
	'				<span class="i">终端信息</span>'+
	'				<div class="msg i">'+
	'					<label>IP地址：<i>192.168.2.68</i></label>'+
	'					<label>区域：<i></i></label>'+
	'				</div>'+
	'				<i class="iconfont j-close-dialog">&#xe64c;</i>'+
	'			</h3>'+
	'			<div class="xu-dialog-chart">'+
	'				<div id="xu-chart-line" class="chart"></div>'+
	'			</div>'+
	'			<div class="xu-dialog-table">'+
	'				<table>'+
	'					<thead>'+
	'						<tr>'+
	'							<th>账号</th>'+
	'							<th>动作</th>'+
	'							<th>访问时间</th>'+
	'						</tr>'+
	'					</thead>'+
	'					<tbody>'+
	'						<tr>'+
	'							<td>admin</td>'+
	'							<td>开始预览视频</td>'+
	'							<td>2018-01-02 09:10:50</td>'+
	'						</tr>'+
	'						<tr>'+
	'							<td>admin</td>'+
	'							<td>开始预览视频</td>'+
	'							<td>2018-01-02 09:10:50</td>'+
	'						</tr>'+
	'						<tr>'+
	'							<td>admin</td>'+
	'							<td>开始预览视频</td>'+
	'							<td>2018-01-02 09:10:50</td>'+
	'						</tr>'+
	'					</tbody>'+
	'				</table>'+
	'			</div>'+
	'			<div class="dialog-btn">'+
	'				<a href="##">'+
	'					查看全部历史'+
	'				</a>'+
	'			</div>'+
	'		</div>'+
	'	</div>'+
	'</div>';

// 表格弹窗事件
$("body").on('click','.dialog_show',function(event) {
	// sessionStorage.setItem('mapPoint',$(this).attr("mapPoint"));
	$("body").append(dialog_map_html).parent();
	map_generate($(this).attr("mapPointLng"),$(this).attr("mapPointLat"));//获取标签上面的经纬度
});
$("body").on('click','.dialog_chart_show',function(event) {
	$("body").append(dialog_chart_html).parent();
	var data={
		name:'本月用户使用摄像头时长/天'
	};
	dialogChart(data);
});
$("body").on('click','.dialog_terminal_show',function(event) {
	$("body").append(dialog_terminal_html).parent();
	var data={
		name:'本月改终端使用时长/天'
	};
	dialogChart(data);
});
// 关闭弹窗
$("body").on('click','.j-close-dialog',function(event) {
	// sessionStorage.setItem('mapPoint',$(this).attr("mapPoint"));
	$(".table-dialog").remove();
});

// 折线图
function dialogChart(data) {
	var lineChart = echarts.init(document.getElementById('xu-chart-line'));
	var lineData=[500,290,410,350,295,410];//数据
	var xTotaldata=['01月','02月','03月','04月','05月','06月'];//y轴刻度
	lineOption = {
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
		        "name": data.name,
		        "icon": "circle",
		        "textStyle": {
		            "color": "#fff"
		        }
		    }],
		    "top": "4%",
		    'right':'4%'
		},
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        top:'10%',
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
	            name: data.name,
		        symbol:'image://'+icon_line_orange,
		        symbolSize:'10',
	            data:lineData,
	            itemStyle: {
	                normal: {
	                    color: '#ff9343',
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
	                    color:isIE8==true ? 'rgba(178,76,31, 1)' : new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: 'rgba(159,108,60, 1)'
	                    }, {
	                        offset: 1,
	                        color: 'rgba(178,76,31, 1)'
	                    }]),
	                }
	            }
	        }
	    ],
	};
	lineChart.setOption(lineOption);
}

// 我这里使用的是百度地图，后台对接麻烦的话可以也可以直接套用你们原来所使用的地图代码
function map_generate(mapPointLng,mapPointLat) {
	var map = new BMap.Map(document.getElementById("xu-map"),{
	    enableMapClick: false,//去除默认poi点击事件
	});
	var myCity = new BMap.LocalCity();
	var poi = new BMap.Point(mapPointLng,mapPointLat);//设置地图中心点
	var marker = new BMap.Marker(poi);  // 创建标注
	map.centerAndZoom(poi, 15);//设置地图级别
	//开启鼠标滚轮事件
	map.enableScrollWheelZoom(); 
	map.addControl(new BMap.NavigationControl({
		anchor: BMAP_ANCHOR_TOP_RIGHT, 
		type: BMAP_NAVIGATION_CONTROL_SMALL,
		offset:new BMap.Size(35, 10)
	}));
	// 添加定位控件
	var geolocationControl = new BMap.GeolocationControl({
		// anchor: BMAP_ANCHOR_BOTTOM_LEFT,
		// offset:new BMap.Size(32, 10)
	});
	geolocationControl.addEventListener("locationSuccess", function(e){
		// 定位成功事件
		var address = '';
		address += e.addressComponent.province;
		address += e.addressComponent.city;
		address += e.addressComponent.district;
		address += e.addressComponent.street;
		address += e.addressComponent.streetNumber;
		alert("当前定位地址为：" + address);
	});
	geolocationControl.addEventListener("locationError",function(e){
		// 定位失败事件
		alert(e.message);
	});
	
	map.addOverlay(marker); // 将标注添加到地图中
	map.addControl(geolocationControl);
}