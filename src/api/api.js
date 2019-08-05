import axios from "axios";

export const get = (url, params) => {
  return new Promise((resolve, reject) =>
    axios
      .get(url, { params })
      .then(res => {
        console.log(res.data);
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      })
  );
};

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) =>
    axios
      .post(url, data)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      })
  );
};
//获得课程分类方向
export const getClassifyList = () => {
  return get("/api/classify")
    .then(res => {
      return res.classifyList;
    })
    .catch(() => {
      console.log("index classify loading failure!");
    });
};
//获得课程分类下小分类
export const getClassifyItems = params => {
  return get("/api/x", params)
    .then(res => {
      return res.classify;
    })
    .catch(() => {
      console.log(" classify loading failure!");
    });
};
//获得首页推荐课程
export const getRecommendList = params => {
  return get("/api/index/recommends", params)
    .then(res => {
      return res.courseList;
    })
    .catch(() => {
      console.log("course loading failure!");
    });
};
//获得分类下的课程
export const getCourseListByCondition = params => {
  return get("/api/courseList", params)
    .then(res => {
      return res.courseList;
    })
    .catch(() => {
      console.log("course loading failure!");
    });
};
