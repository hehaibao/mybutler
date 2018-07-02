// pages/historyToday/historyToday.js
var API_INFO = require('../../utils/util.js').API_CONST;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    historys: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.showLoading({
        title: '加载中',
    });
    wx.request({
        url: API_INFO.TIAN_API_URL+'lishi/?key='+API_INFO.TIAN_API_KEY,
        data: {
            type: 'json' 
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            var data = res.data;
            wx.hideLoading();
            if(data.code == 200) {
                that.setData({historys: data.newslist});
            } else {
              wx.showToast({
                title: data.msg,
                icon: 'none',
                image: '../../images/error.png',
                duration: 2000
              })
            }
        }
    });
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

  }
})