"use strict";$(function(){$("#btn").click(function(){$.get("http://jx.xuzhixiang.top/ap/api/reg.php",{username:$("#tet").val(),password:$("#password").val()},function(t){1==t.code?(alert("注册成功跳转到首页"),location.href="SY.html"):alert("注册失败，请重试")})}),$("#password").change(function(){})});