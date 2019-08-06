export default {
  //开始加载
  startLoading(state) {
    state.loading = true;
  },
  //加载完毕
  overLoading(state){
    state.loading = false;
  },
  //无更多数据
  noMoreData(state){
    state.noMore = true;
  },
  moreData(state){
    state.noMore = false;
  },
  setCurrent(state,param){
    state.currentSection = param;
  }
};
