var app = getApp()

Page({
  data: {

    dotAnData: {}

  },
  onShow: function () {

    var i = 0
    var dotAnData = wx.createAnimation({

      duration: 10000,
      timingFunction: 'linear',
      transformOrigin: '740% 60%'

    })
    var dotAnFun = setInterval(function () {

      dotAnData.rotate(180 * (++i)).step()

      this.setData({

        dotAnData: dotAnData.export()

      })

    }.bind(this), 1000)

  }
})