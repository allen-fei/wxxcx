//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '前端',
    userInfo: {},
    myInfo: {
      github: 'https://github.com/allen-fei/vue2'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  sendup:function(event){
    wx.showToast({
      title: event.detail.value,
      icon: 'success',
      duration: 2000
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      console.log(userInfo)
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
