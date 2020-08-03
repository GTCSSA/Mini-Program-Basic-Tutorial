// pages/3.7_bindtap/3.7.js
Page({

  /**
   * Page initial data
   */
  data: {
    name: "",
  },

  myTap: function(res) {
    console.log("我被点击了")
    console.log(res);
    console.log("id: " + res.currentTarget.dataset.id);
    console.log("name: " + res.currentTarget.dataset.name);
    console.log("title: " + res.currentTarget.dataset.title);
    
    var name = res.currentTarget.dataset.name;
    this.setData({
      name: name
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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