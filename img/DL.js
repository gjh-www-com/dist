$(function () {
  // 效果点击
  $(".top-left").click(function () {
    $(".centent-center-one")
      .show()
      .siblings(".centent-center-two")
      .hide()
    $(".top-left").addClass("font-color").siblings().removeClass("font-color")

  })
  $(".top-right ").click(function () {
    $(".centent-center-one")
      .hide()
      .siblings(".centent-center-two")
      .show()
    $(".top-right").addClass("font-color").siblings().removeClass("font-color")

  })
  $("#button-li").click(function () {
    $("#button-li ul").fadeToggle()
  })
  // 二维码划过效果
  $("#img1").hover(function () {
    $("#img1").stop().animate({
      left: "-60px"
    }, 500).next("#img2").stop().fadeIn(50)
  }, function () {
    $("#img1").stop().animate({
      left: "0px"
    }, 500).next("#img2").stop().fadeOut(50)
  })
})
$(function () {
  // $("#name").change(function(){
  //   var name=/^([\u4E00-\u9FA5])*$/;
  //   if(name==$("#name").val()){
  //   }else{
  //     $("#name").css({
  //       background:"red"
  //     })
  //     alert("名字不规范请重试")
  //   }
  // })
  $("#btn").click(function () {
    $.get("http://jx.xuzhixiang.top/ap/api/login.php", {
      username: $("#name").val(),
      password: $("passwoed").val()
    }, data => {
      console.log(data.data);
      if(data.code=1){
        alert("登录成功，跳入首页")
        location.href="SY.html"
      }else{
        alert("请你检查一下，密码格式")
      }
    })
  })


})