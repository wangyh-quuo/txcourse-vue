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

//课程方向数据
Mock.mock(/\/api\/classify/, "get", {
  ret: 0,
  classifyList: [
    {
      id: "1",
      name: "前端"
    },
    {
      id: "2",
      name: "前沿"
    },
    {
      id: "3",
      name: "后端"
    },
    {
      id: "4",
      name: "移动"
    },
    {
      id: "5",
      name: "云计算"
    },
    {
      id: "6",
      name: "运维"
    },
    {
      id: "7",
      name: "UI设计"
    }
  ]
});
//课程方向下的分类数据
Mock.mock(/\/api\/x/, "get", {
  ret: 0,
  classify: [
    {
      id: "1",
      name: "前端开发",
      classifyItems: [
        {
          id: "@increment",
          name: "HTML"
        },
        {
          id: "@increment",
          name: "JavaScript"
        },
        {
          id: "@increment",
          name: "Vue.js"
        },
        {
          id: "@increment",
          name: "React.js"
        },
        {
          id: "@increment",
          name: "Angular"
        },
        {
          id: "@increment",
          name: "Node.js"
        },
        {
          id: "@increment",
          name: "Bootstrap"
        },
        {
          id: "@increment",
          name: "Sass/Less"
        },
        {
          id: "@increment",
          name: "WebApp"
        },
        {
          id: "@increment",
          name: "小程序"
        },
        {
          id: "@increment",
          name: "前端工具"
        },
        {
          id: "@increment",
          name: "Html5"
        },
        {
          id: "@increment",
          name: "CSS3"
        }
      ]
    },
    {
      id: "2",
      name: "前沿技术",
      classifyItems: [
        {
          id: "@increment",
          name: "前沿技术微服务"
        },
        {
          id: "@increment",
          name: "区块链"
        },
        {
          id: "@increment",
          name: "以太坊"
        },
        {
          id: "@increment",
          name: "人工智能"
        },
        {
          id: "@increment",
          name: "机器学习"
        },
        {
          id: "@increment",
          name: "深度学习"
        },
        {
          id: "@increment",
          name: "计算机视觉"
        },
        {
          id: "@increment",
          name: "自然语言处理"
        },
        {
          id: "@increment",
          name: "数据分析 & 挖掘"
        }
      ]
    },
    {
      id: "3",
      name: "后端开发",
      classifyItems: [
        {
          id: "@increment",
          name: "Java"
        },
        {
          id: "@increment",
          name: "SpringBoot"
        },
        {
          id: "@increment",
          name: "Spring Cloud"
        },
        {
          id: "@increment",
          name: "Python"
        },
        {
          id: "@increment",
          name: "爬虫"
        },
        {
          id: "@increment",
          name: "Django"
        },
        {
          id: "@increment",
          name: "Tornado"
        },
        {
          id: "@increment",
          name: "Go"
        },
        {
          id: "@increment",
          name: "PHP"
        },
        {
          id: "@increment",
          name: "C"
        },
        {
          id: "@increment",
          name: "C++"
        },
        {
          id: "@increment",
          name: "C#"
        },
        {
          id: "@increment",
          name: "Ruby"
        }
      ]
    },
    {
      id: "4",
      name: "移动开发",
      classifyItems: [
        {
          id: "@increment",
          name: "Android    "
        },
        {
          id: "@increment",
          name: "iOS"
        },
        {
          id: "@increment",
          name: "React native"
        },
        {
          id: "@increment",
          name: "WEEX"
        }
      ]
    },
    {
      id: "5",
      name: "云计算&大数据",
      classifyItems: [
        {
          id: "@increment",
          name: "大数据"
        },
        {
          id: "@increment",
          name: "Hadoop"
        },
        {
          id: "@increment",
          name: "Spark"
        },
        {
          id: "@increment",
          name: "Hbase"
        },
        {
          id: "@increment",
          name: "Storm"
        },
        {
          id: "@increment",
          name: "云计算"
        },
        {
          id: "@increment",
          name: "AWS"
        },
        {
          id: "@increment",
          name: "Docker"
        },
        {
          id: "@increment",
          name: "Kubernetes"
        }
      ]
    },
    {
      id: "6",
      name: "运维",
      classifyItems: [
        {
          id: "@increment",
          name: "自动化运维"
        },
        {
          id: "@increment",
          name: "运维工具"
        },
        {
          id: "@increment",
          name: "中间件"
        },
        {
          id: "@increment",
          name: "Linux"
        },
        {
          id: "@increment",
          name: "测试"
        },
        {
          id: "@increment",
          name: "MySQL"
        },
        {
          id: "@increment",
          name: "Redis"
        },
        {
          id: "@increment",
          name: "MongoDB"
        },
        {
          id: "@increment",
          name: "Oracle"
        }
      ]
    },
    {
      id: "7",
      name: "UI设计",
      classifyItems: [
        {
          id: "@increment",
          name: "动效动画"
        },
        {
          id: "@increment",
          name: "设计基础"
        },
        {
          id: "@increment",
          name: "设计工具"
        },
        {
          id: "@increment",
          name: "APPUI设计"
        },
        {
          id: "@increment",
          name: "产品交互"
        }
      ]
    }
  ]
});

//分类下的课程
Mock.mock(/\/api\/courseList/, "get", {
  ret: 0,
  courseList: [
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 1,
      price: 0,
      "learning|100-10000": 10000
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 0,
      "price|100-500": 500,
      "learning|100-10000": 10000
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 0,
      "price|100-500": 500,
      "learning|100-10000": 10000
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 1,
      price: 0,
      "learning|100-10000": 10000
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 0,
      "price|100-500": 500,
      "learning|100-10000": 10000
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 0,
      "price|100-500": 500,
      "learning|100-10000": 10000
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 1,
      price: 0,
      "learning|100-10000": 10000
    },
    {
      id: "@increment",
      name: "JavaScript深入浅出",
      courseImg: "@dataImage('300x200', 'JavaScript深入浅出')",
      free: 1,
      price: 0,
      "learning|100-10000": 10000
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
