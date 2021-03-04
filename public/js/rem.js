window.onload = window.onresize = function () {
  //1.得到新的设备尺寸
  //文档中的html的可视宽度
  var deviceW = document.documentElement.clientWidth;
  //如果得到的设备尺寸比设计稿大，最大适配到设计稿尺寸
  if (deviceW >= 750) {
    document.documentElement.style.fontSize = "100px";
    //其它尺寸下换算计算
  } else {
    // console.log(deviceW);
    //设计稿的宽度
    document.documentElement.style.fontSize = (deviceW / 750) * 100 + "px";
  }
};
