$(document).ready(function(){
	// $("header").load("header.html");
	// $("footer").load("footer.html");
	$(".xu-left-nav .nav-tit").click(function() {
		$(this).toggleClass("cur");
		$(this).siblings(".sub-nav").slideToggle();
	});
	$(".xu-left-nav .sub-nav a").click(function() {
		$(this).addClass('cur').siblings('a').removeClass('cur').parents("li").siblings('li').find('a').removeClass('cur');
	});
	$(".xiala").mCustomScrollbar();

	$(".xu-header-two .xu-header").width($('body').width()-200)

	var collect=true;
	$(".j-collect").click(function() {
		if(collect){
			collect=false;
			$(".xu-left-nav").animate({
				left: '-200px',
			}, function() {
				$('.nav-btn').find('span').text('>')
			});
			$(".xu-right-body").animate({
				'margin-left': '0',
			});
			
		}else{
			collect=true;
			$(".xu-left-nav").animate({
				left: '0',
			}, function() {
				$('.nav-btn').find('span').text('<')
			});
			$(".xu-right-body").animate({
				'margin-left': '200px',
			});
		}
	});

	// 点击链接加载对应页面
	$("body").on("click",".iframe_url",function(){
		$(".xu-iframe").attr("src",$(this).attr("url"));
	});
	// 子页面点击跳转iframe页面
	$("body").on("click",".page-iframe_url",function(){
		$(".xu-iframe",parent.document).attr("src",$(this).attr("url"));
	});

	// 下拉
	// $("body").click(function(event) {
	// 	$(".xu-select ul").slideUp();
	// });
	// $("body").on('click','.xu-select span',function(event) {
	// 	event.stopPropagation();
	// 	$(this).siblings("ul").slideToggle();
	// });
	// $("body").on('click','.xu-select li',function(event) {
	// 	$(this).parents('ul').siblings("span").text($(this).text());
	// });

	// 表格
	$('.xu-table').each(function() {
		var count = 0;
		$(this).find("tr").each(function() {
			$(this).css('background',count++ % 2 == 0 ? '#102462' : '#101036');
		});
	});
	// $(".xu-table tr:even").css("background", "#102462");
	$("body").on('click','.xu-table .sort em',function(event) {
		$(this).addClass('cur').siblings("em").removeClass("cur")
	});
	$("body").on('click','.table-page li',function(event) {
		$(this).addClass('cur').siblings("li").removeClass("cur")
	});
	$("body").on('click','.iframe-item-tab span',function(event) {
		$(".tab-item-main .tab-item").eq($(this).index()).show().siblings(".tab-item").hide();
		$(this).addClass('cur').siblings("span").removeClass("cur")
	});
	$("body").on('click','.iframe-statistics-tab span',function(event) {
		$(".tab-item-main .tab-item").eq($(this).index()).show().siblings(".tab-item").hide();
		$(this).addClass('cur').siblings("span").removeClass("cur")
	});

	// 巡检页左侧导航
	var treeNav=true;
	$("body").on('click','.tree-nav-icon',function(event) {
		if(treeNav){
			treeNav=false;
			$(".map-tree-nav").animate({left: 0},350);
		}else{
			treeNav=true;
			$(".map-tree-nav").animate({left: -200},350);
		}
	});
});

// 判断浏览器是否为ie8
(checkIE8 = document.createElement("b")).innerHTML = "<!--[if IE 8]><i></i><![endif]-->";
var isIE8 = checkIE8.getElementsByTagName("i").length == 1;

var screen=false;
// 判断是否为投屏页
if($('.xu-screen').length!=0){
	screen=true;
}

var icon_line_purple='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAqklEQVQY042QMQ6CUBBE336sQYhAwVk4gp12UqklHcego8XKkmNwFgpjAsELrAX4Y9CC1+3sZLMzwkxZdUfgBKSAAC1wL/KkYRYoq64GzvznVuTJRcqqOwCNKjyewvgSADxXiUNFpnG/ATKYTP0g9kw/CEYgChXgauaf7KVvhtFqqWElZk6H5+rPcutZrTXAHSAOlcBXHAccBwJfiXbWWK+vZ1F49gm3LPwNhFo2xPjW6rwAAAAASUVORK5CYII=';

var icon_line_orange='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAA+0lEQVQoz4XSL0/DUBQF8F9rEDMrmCUwR0IwqAU3Tz8IuCaMD8LEJHyPzc+RKQwhwVExQzYzgRriva4j6dbj3n3n3D/n3sQettNJhhGGGMTwAnM8J3mxrrjJnugOL7jQjG88JHkx2wmjaAo2S9Zf/MbkJ126l3R6VYI8yYtZsp1OunhH388Hq8/metkVZ9dQ4ibFE/o2y8Miwt9mKY4ySqMRob021JxhunOvmukYas4gbWc3I417Cu61oeYsUmG5wfI21Jx5ijFKnV6w/BCyq2qXJcZHDmAV28uaD6B6RfErzg/ULHH/7+T2xKd4FHZ7G8Nv0YdxkherivsHkxJQcoFe6RoAAAAASUVORK5CYII=';

var icon_line_green='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABGUlEQVQoz52SMUvDQBTHfznCLUK6xKAR1KXUOUM+hKgIoh+guyCO+QDZdfcTSEGE+iEs2FVUBIe2ELLY0OUI1cG7cGlTh/63e+/97r27/3OwFKSlD1wDx0Bbh1+BR+A2S9zc1DoWdAbcAS2aNQW6WeL2KlBD9/ZFK/QDnGeJ23OCtNwEPgAPwGspojhnO5wBMBlv8PLsM/2Wdue2C1za0OHpF1LOqxa7+wVb4Yynhz0De8CVAE5MURTnNchIyjlRnNuhIwEcmJMZr0nhTi3XEawnJbRP1Ues0nhUy30K/swFYDjwUWp5CKUEw4Fvh/pOkJYB8L5kh37TZNRsx9oLIAD0Gl0AxT9QYSAWOywseQdQwBvQB27sJf8FmFBijvGBBs0AAAAASUVORK5CYII=';

var label_screen='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAaCAYAAADFTB7LAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAg0lEQVRYw+3OsQmAMBRF0Wu2sHaBrOEc2jqDcYbU7uQCKSWOYSMWIlr44Uf4t3zF41Q+phaYgZqyykDnCsVxmGZXKO5EOm3BWwY0oHYGNKB2BjSgdgY0oHa/AGZtxEObA3pg05bctAJdJfHkYwrAeJmnZWjC128R4A1SBCeejykcULF2OzcYWjRMKLAAAAAASUVORK5CYII=';

var label_screen_left='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAoCAYAAADg+OpoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMxOUMzQTA1NDg2MTExRTg4MUVBOTE1NDQxQUE1MTg2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMxOUMzQTA2NDg2MTExRTg4MUVBOTE1NDQxQUE1MTg2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzE5QzNBMDM0ODYxMTFFODgxRUE5MTU0NDFBQTUxODYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzE5QzNBMDQ0ODYxMTFFODgxRUE5MTU0NDFBQTUxODYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7UanPiAAAAgElEQVR42mI0mHyXAQmIAvEuIDZgoB64AMRuLGiCe4BYj4G6AOToXUxogtS2BG4ZEwOdwKhFoxaNWjRq0ahFNLLIgR4WgSzZT2uLaG4J3ePoABA70stHNLcMOegOjGbYUYtGLRq1aNSiUYvwW3SWRvZcQLfIE4gvUdsSUPcfIMAAFIsPB2iwPC8AAAAASUVORK5CYII=';

// 头部添加tab
$("body").on("click",".sessionSet",function(){
	sessionStorage.setItem('tab_default_name',$(this).attr("name"));
	sessionStorage.setItem('tab_default_url',$(this).attr("url"));
});
$("body").on("click",".add_tab",function(){
	sessionStorage.setItem('tab_default_name',$(this).attr("name"));
	sessionStorage.setItem('tab_default_url',$(this).attr("url"));
	// sessionStorage.setItem('tab_default_name',$(this).attr("name"));
	// sessionStorage.setItem('tab_default_url',$(this).attr("url"));
	var nav_text=$(this).attr("name");
	var url=$(this).attr("url");
	add_tab(nav_text,url);
});
function add_tab(nav_text,url) {
	$(".xu-iframe").attr("src",url);
	$(".xu-tab .swiper-slide").removeClass('cur');
	var blo=false;
	$(".xu-tab .swiper-slide").each(function(){
		if($(this).find("a").attr("name")==nav_text){
			$(".xu-tab .swiper-slide").eq($(this).index()).addClass("cur");
			tabSwiper.swipeTo($(this).index());
			blo=true;
			return;
		}
	})
	if(blo==true){
		return;
	}
	var tabSlideHtml='<a href="#'+url.slice(10,-5)+'" url="'+url+'" name="'+nav_text+'" class="iframe_url"><span>'+nav_text+'<i class="iconfont i close-tab">&#xe64c;</i></span>' +
					'</a>';
	tabSwiper.appendSlide(tabSlideHtml);
	tabActive=$(".xu-tab .swiper-slide").length-1;
	tabSwiper.swipeTo(tabActive);
	$(".xu-tab .swiper-slide:last-child").addClass("cur");
}
