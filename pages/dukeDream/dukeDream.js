// pages/dukeDream/dukeDream.js

var API_INFO = require('../../utils/util.js').API_CONST;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dreamInfo: "",
    dreamRes: {},
    show: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  /**
   * 获取用户输入 
   */
  dreamInfo: function (e) {
    this.setData({
      dreamInfo: e.detail.value
    })
  },
  /**
   *用户点击获取数据事件 
   */
  getdata: function (e) {
    var that = this;
    wx.showLoading({
      title: '加载中',
    });
    var dreamInfo = this.data.dreamInfo;
    if (dreamInfo == '') {
      wx.showToast({
        title: '输入不合法',
        icon: 'none',
        image: '../../images/error.png',
        duration: 2000
      })
      return false;
    }
    
    // 请求数据
    wx.request({
      url: API_INFO.TIAN_API_URL+'dream/?key='+API_INFO.TIAN_API_KEY+'&word='+dreamInfo+'&num=10',
      data: { },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var data = res.data;
        wx.hideLoading();
        if(data.code == 200) {
            that.setData({
                show: true,
                dreamRes: data.newslist
            });
        } else {
            that.setData({
                show: false
            });
            wx.showToast({
              title: data.msg,
              icon: 'none',
              image: '../../images/error.png',
              duration: 2000
            })
        }
      }
    })
  }
})