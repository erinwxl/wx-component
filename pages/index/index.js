//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title:"这是标题",
    content:"这是弹窗内容",
    cancelText:"我再想想",
    confirmText:"确定"
  },
  onLoad: function () {
    
  },
  onReady: function () {
    //   selectComponent
      this.dialog = this.selectComponent("#dialogs")
  },
  showTap:function(){
      this.dialog.showDialog()
  }
})
