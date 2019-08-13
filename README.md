#### install dependencies
```
npm install
```
#### serve with hot reload at localhost:8080
```
npm run serve
```
#### build for production with minification
```
npm run build
```
#### [项目演示](https://wangyh-quuo.github.io/txcourse-vue/dist/#/)
#### 文件目录
```
|-api
|   - api.js            --Axios请求
|-assets
|   - css
|   - js
|       - mock.js       --mock模拟数据
|-components
|   - common
|       - Back.vue      --返回组件
|       - Header.vue    --页面头部分组件
|       - Loading.vue   --加载组件
|       - More.vue      --更多选项组件
|       - Search.vue    --搜索组件
|       - Swipper.vue   --轮播组件
|       - Tabber.vue    --底部导航组件
|   - course
|       - ClassifyItem.vue    -- 课程分类组件
|       - ClassifyTitle.vue   -- 课程方向(一级分类)组件
|       - CourseChapter.vue   -- 课程章节组件
|       - CourseDiscuss.vue   -- 课程有关用户提问讨论组件
|       - CourseIntroduce.vue -- 课程介绍组件
|       - CourseItem.vue      -- 课程列表组件
|       - DropMenu.vue        -- 课程筛选下拉菜单组件
|   - user
|       - Group.vue     --导航组
|       - List.vue      --一些选项
|       - Login.vue     --登录组件
|       - MyCourse.vue  --个人课程组件
|       - UserInfo.vue  --个人信息组件
|-view
|   - Auth.vue              --注册登录页面
|   - Classify.vue          --课程分类页面
|   - ClassifyCourse.vue    --分类下的课程列表页面
|   - CourseDetail.vue      --课程详细页面
|   - Home.vue              --首页
|   - UserCourse.vue        --我的课程页面
|   - UserProfile.vue       --个人主页
|   - Video.vue             --视频播放页面
|-store
|   modules
|       - course.js   --课程模块状态管理
|       - user.js     --用户模块状态管理
|   mutations.js
|   state.js          --state
|   store.js          --导出store
|
|
```
#### 简述
做该项目是为了练习vue,将这段时间学习总结一下。使用vue实现视频学习网站,仿照腾讯课堂实现一些功能。
#### 功能实现
##### 首页
- 1.swipper轮播
- 2.课程方向展示,切换课程方向展示不同的课程列表
- 3.下滑加载更多课程
##### 课程分类
- 1.课程方向导航
- 2.切换课程分类
##### 课程列表
- 1.展示课程列表
- 2.条件筛选,排序展示
- 3.下滑加载更多课程
##### 课程详细
- 1.展示课程的介绍和章节
- 2.展示课程的用户问题讨论
- 3.加入学习
##### 用户
- 1.用户登录
- 2.我的课程

#### 总结:
1. 熟悉了vue2.0的使用
2. 使用VantUI的部分组件
3. 使用Vuex来对数据状态管理,更好的来维护操作数据
4. 使用mockjs模拟后台数据
5. 将axios异步请求接口统一放入文件，便于管理
6. 熟悉路由钩子的用法
