// pages/4.4_API_WangLuo/4.4.js
Page({

  /**
   * Page initial data
   */
  data: {
    resData: [], num: 1
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getList();
  },

  nextPage: function () {
    this.data.num++;
    this.getList(this.data.num);
  },

  getList: function (p=1) {
    wx.request({
      url: 'https://edu.newsight.cn/wxList.php', //目标端口或json文件的url
      data: { //在端口script里定义的数值
        num: 5, //表示每页有5个object
        page: p //表示第几页
      }, 
      success: res => {  //成功调用之后 触发callback function
        console.log(res);
        this.setData({
          resData: res.data,  //更改resData的数值
        })
      }
    })
  },



  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})