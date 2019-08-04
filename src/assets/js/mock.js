import Mock from "mockjs";

//首页轮播数据
Mock.mock(/\/api\/index\/swipper/, "get", {
  ret: 0,
  swipperList: [
    {
      swipperImg: "@dataImage('750x296','0基础入门vue2.0实战项目')",
      videoSrc: ""
    },
    {
      swipperImg: "@dataImage('750x296','0基础入门vue2.0实战项目')",
      videoSrc: ""
    },
    {
      swipperImg: "@dataImage('750x296','0基础入门vue2.0实战项目')",
      videoSrc: ""
    },
    {
      swipperImg: "@dataImage('750x296','0基础入门vue2.0实战项目')",
      videoSrc: ""
    }
  ]
});
//首页课程分类数据
Mock.mock(/\/api\/index\/classify/, "get", {
  ret: 0,
  classifyList: [
    {
      id: "@increment",
      name: "前沿"
    },
    {
      id: "@increment",
      name: "前端"
    },
    {
      id: "@increment",
      name: "后端"
    },
    {
      id: "@increment",
      name: "移动"
    },
    {
      id: "@increment",
      name: "云计算"
    },
    {
      id: "@increment",
      name: "运维"
    },
    {
      id: "@increment",
      name: "UI设计"
    }
  ]
});
//首页推荐课程
Mock.mock(/\/api\/index\/recommends/, "get", {
  ret: 0,
  courseList: [
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 1,
      price: 0
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 0,
      "price|100-500": 500
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 0,
      "price|100-500": 500
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 1,
      price: 0
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 0,
      "price|100-500": 500
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 0,
      "price|100-500": 500
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 1,
      price: 0
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 1,
      price: 0
    }
  ]
});
//我的课程
Mock.mock(/\/api\/myCourse[\S|\s*]/, "get", {
  ret: 0,
  myCourse: [
    {
      id: "175",
      name: " Linux达人养成计划 I",
      courseImg: "@dataImage('300x200', 'Linux')",
      progress: "5"
    },
    {
      id: "453",
      name: "H5+JS+CSS3实现七夕言情",
      courseImg: "@dataImage('300x200', 'Html5+JS+CSS')",
      progress: "10"
    },
    {
      id: "277",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      progress: "90"
    }
  ]
});

//延时100-500s请求到数据
Mock.setup({
  timeout: "100-500"
});
