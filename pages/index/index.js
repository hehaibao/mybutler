// pages/index/index.js
var imgPath = '../../images/';
var basePath = '../../pages/';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    server: [
      {
        img: imgPath+"hl.png",
        openpath: basePath+"historyToday/historyToday",
        text: "历史上今天"
      },
      {
        img: imgPath+"tianqi.png",
        openpath: basePath+"weather/weather",
        text: "天气预报"
      },
      {
        img: imgPath+"brain.png",
        openpath: basePath+"dukeDream/dukeDream",
        text: "周公解梦"
      },
      {
        img: imgPath+"sfz.png",
        openpath: basePath+"IDCard/IDCard",
        text: "身份证查询"
      },
      {
        img: imgPath+"response.png",
        openpath: basePath+"godReply/godReply",
        text: "神回复"
      },
      {
        img: imgPath+"yhk.png",
        openpath: basePath+"bankQuery/bankQuery",
        text: "银行查询"
      },
      {
        img: imgPath+"gsd.png",
        openpath: basePath+"MobileHome/MobileHome",
        text: "手机归属地"
      },
      {
        img: imgPath+"ip.png",
        openpath: basePath+"IP/IP",
        text: "IP查询"
      },
      {
        img: imgPath+"smiley.png",
        openpath: basePath+"joke/joke",
        text: "雷人笑话"
      }
    ],
    games: [
      
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
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

  }
})