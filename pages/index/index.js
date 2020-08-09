import common from "../../utils/common.js";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getRequest();
  },

  getRequest(){
    //发送网络请求
    wx.request({
      url: 'https://ku.qingnian8.com/school/list.php',
      data:{
        num: 5,
      },
      success:res=>{
        res.data.forEach(item =>{
          // var time = item.posttime*1000; //time是一个时间戳
          // var d = new Date(time);
          // var year = d.getFullYear();
          // //月份要加一 因为默认是0-11月
          // //这里用到了ternary operation 格式为 condition ? (if true, then ...) : (if false, then ...)
          // var month = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1); 
          // var day = d.getDate() < 10 ? "0" + (d.getDate()) : (d.getDate());
          // var posttime = year + "-" + month + "-" + day
          // item.posttime = posttime
          item.posttime = common.getMyDate(item.posttime, "Y-m-d")
          item.title=common.getStrLen(item.title, 25)
        })
        this.setData({
          dataList: res.data
        })
      }
    })
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