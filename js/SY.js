"use strict";$(function(){$("#temai").hover(function(){$("#temai ul").stop().fadeToggle(50)}),$("#deng").hover(function(){$("#deng div").stop().fadeToggle(50)}),$("#huiyuan").hover(function(){$("#huiyuan ul").stop().fadeToggle(50)}),$("#kehu").hover(function(){$("#kehu ul").stop().fadeToggle(50)}),$("#shouji").hover(function(){$("#shouji div").stop().fadeToggle(50)}),$("#gengduo").hover(function(){$("#gengduo ul").stop().fadeToggle(50)}),$("#qiandao").hover(function(){$("#qiandao>div").stop().fadeToggle(50),$("#qiandao>div div").stop().fadeIn(50)}),$(".list").hover(function(){$(".list div").stop().fadeToggle(50)}),$(".right-header-1").hover(function(){$(".right-header-1 div").stop().animate({left:"-300px"},300)},function(){$(".right-header-1 div").stop().animate({left:"300px"},300)}),$(".right-header-3 li").hover(function(){$(this).addClass("vip");var o=$(this).index();$(".right-header-3 li p").eq(o).stop().animate({left:"-110px"},200),console.log(o)},function(){$(this).removeClass("vip");var o=$(this).index();$(".right-header-3 li p").eq(o).stop().animate({left:"100px"},200)}),$(".one").hover(function(){$(".one ul").stop().animate({top:"45px"},50).slideDown(50)},function(){$(".one>ul").stop().animate({top:"45px"},50).slideUp(50)}),$(".one>ul li").mouseover(function(){$(".one-div").stop().fadeIn(50)}),$(".one-div").mouseout(function(o){$(".one-div").stop().fadeOut(50)}),$("#duo").hover(function(){$("#duo ul").stop().fadeIn(50),$("#duo").addClass("f4f4f4")},function(){$("#duo ul").stop().fadeOut(50),$("#duo").removeClass("f4f4f4")}),$(".shishang-one li").click(function(){$(this).addClass("shishang-one-li-red").siblings().removeClass("shishang-one-li-red")}),$(window).scroll(function(){var e=$(this).scrollTop();3100<e?$(".louti").fadeIn(500):$(".louti").fadeOut(500),$(".loutu").find(".shishang").each(function(){var o;e>$(this).offset().top-$(this).outerHeight()/2&&(o=$(this).index,console.log(o),$(".louti li").eq(o).addClass("louti-color").siblings().removeClass("louti-color"))})})});