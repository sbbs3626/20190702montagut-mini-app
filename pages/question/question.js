// pages/question/question.js
import { question } from '../../utils/util.js';
const _ = require('lodash');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionList:[],
    isSelect: [{ id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }, { id: 0 }],
    a:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._question();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  _question(){
    let arr = _.sampleSize(question, 6);
    // 随机6个题目
    this.setData({
      questionList: arr
    })
  },
  _next:function(e){
    console.log(e)
  },
  _select(e){
    let isSelect = this.data.isSelect;
    isSelect[e.currentTarget.dataset.index]={
      'id': e.currentTarget.id,
      'val': e.currentTarget.dataset.val
    }
    this.setData({
      isSelect: isSelect
    })
    console.log(this.data.isSelect)
  }

})