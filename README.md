# 微信小程序一个圆点围绕一个圆弧转动

微信小程序看到一些类似于这种的转动，想看一下实现过程，
于是产生了这个demo,记录一下，

布局代码

```
<view class="wrap">
 <view class='bigCircle'></view>
  <view class='littleCircle'></view>
 <view class = 'crl-dot' animation='{{dotAnData}}'>
 </view>
</view>

```
css样式
```
.bigCircle{
  width: 420rpx;
  height: 420rpx;
  border-radius: 50%;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  background-color: red;
}
.littleCircle{
  width: 410rpx;
  height: 410rpx;
  border-radius: 50%;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  background-color: #fff;
}
.canvas{
  width: 420rpx;
  height: 420rpx;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto auto;
  z-index: 99;
}
.crl-dot{
  width: 30rpx;
  height: 30rpx;
  background: blue;
  border-radius: 50%;
  position: absolute;
  top:0;
  bottom: 0;
  left: -420rpx;
  right: 0;
  margin: auto auto;
  line-height: 30rpx;
}

```
js代码
```
var app = getApp()

Page({
  data: {

    dotAnData: {}

  },
  onShow: function () {

    var i = 0
    var dotAnData = wx.createAnimation({

      duration: 10000,//时间
      timingFunction: 'linear',
      transformOrigin: '740% 60%'//围绕转的中心

    })
    var dotAnFun = setInterval(function () {

      dotAnData.rotate(180 * (++i)).step()

      this.setData({

        dotAnData: dotAnData.export()

      })

    }.bind(this), 1000)

  }
})

```
主要用到了微信提供的一种旋转的动画。详情见文档https://developers.weixin.qq.com/miniprogram/dev/api/wx.createAnimation.html