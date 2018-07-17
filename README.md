# reactBackstage
> react全家桶构建的后台管理系统
> 为了以后可能会用到，构建了一个通用的后台管理系统，方便快速使用
### 使用依赖
> 使用create-react-app创建
- react(^16.3.2)
- react-redux(^5.0.7)
- redux(^4.0.0)
- axios(^0.18.0)
- antd(^3.4.4)
- less(^3.0.2)
- react-router(^4.2.0)
- photoswipe(^4.1.2)
- recharts(^1.0.0-beta.10)
- screenfull(^3.3.2)
- webpack(3.8.1)
- 其它通用模块

后面会加上redux-saga,登录拦截等功能和模块，让它更加健壮和通用

### 暂时功能
> 由于是一个通用的后台管理，加上了一些常用的模块功能，后续有需求可以自己添加

- 首页（简单的一些展示）
- 基础组件（包括按钮，图标，轮播图，标签页，树形，模态框，提示和富文本框）
- 表单（基础表单和其它表单）
- 表格（基础表格，高级表格和异步表格）
- 图表（主要使用了recharts）
- 工具（简单的todoList和未完成的房贷计算器）
- 地图（使用了高德地图）
- 画廊（借鉴了[yezihaohao](https://github.com/yezihaohao)的实现，使用了photoswiper）

### 项目结构


```
+--reactBackstage               //整体目录
    +--config                   //配置文件目录
    +--public                   //包含入口html文件
    +--scripts                  //npm start,npm run build配置文件
    +--src                      //资源文件目录
        +--actions              //action文件所在目录
        +--api                  //接口文件目录
        +--component            //自己封装通用组件目录
        +--data                 //静态数据
        +--image                //图片
        +--layout               //主页布局文件目录
            +--bottom           //底部
            +--content          //内容区域
            +--header           //头部
            +--menu             //侧边菜单
            --index.js
        +--pages                //页面目录
            +--basic            //基础组件目录
            +--charts           //图表目录
            +--form             //表单目录
            +--gallery          //画廊目录
            +--index            //首页
            +--login            //登录
            +--map              //地图
            +--table            //表格
            +--utils            //工具
        +--reducers             //reducer所在目录
        +--route                //路由文件
        +--utils                //这里配置路由菜单
        --index.js              //入口文件
    +--theme                    //配置主题
    --package.json
```

### 运行
1. 安装依赖
```
npm/yarn install
```
2. 开发环境运行
```
npm/yarn start  or  npm/yarn run start
```
3. 线上打包

```
npm/yarn run build
```

> 这个版本还有很多不足，比如没有集成redux-saga，登录拦截问题，响应式问题，404页面等。后面有时间会慢慢完善--越努力，越幸运！！🌹
