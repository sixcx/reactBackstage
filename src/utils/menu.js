export const menus = [
  {
    name: '首页',
    url: '/app/index',
    icon: 'home'
  },
  {
    name: '基础组件', url: '/app/basic', icon: 'appstore-o',
    sub: [
      {name: '按钮', url: '/app/basic/button', icon: ''},
      {name: '图标', url: '/app/basic/icon', icon: ''},
      {name: '轮播图', url: '/app/basic/carousel', icon: ''},
      {name: '标签页', url: '/app/basic/tabs', icon: ''},
      {name: '树形', url: '/app/basic/tree', icon: ''},
      {name: '模态框', url: '/app/basic/modal', icon: ''},
      {name: '提示', url: '/app/basic/tipNote', icon: ''},
      {name: '富文本框', url: '/app/basic/richText', icon: ''}
    ]
  },
  {
    name: '表单', url: '/app/form', icon: 'edit',
    sub: [
      {name: '基础表单', url: '/app/form/basicForm', icon: ''},
      {name: '其它表单', url: '/app/form/otherForm', icon: ''}
    ]
  },
  {
    name: '表格', url: '/app/table', icon: 'copy',
    sub: [
      {name: '基础表格', url: '/app/table/basicTable', icon: ''},
      {name: '高级表格', url: '/app/table/seniorTable', icon: ''},
      {name: '远程数据', url: '/app/table/dataTable', icon: ''}
    ]
  },
  {
    name: '图表', url: '/app/charts', icon: 'area-chart',
    sub: [
      {name: 'echarts', url: '/app/charts/echarts', icon: ''}
    ]
  },
  {
    name: '工具', url: '/app/utils', icon: 'tool',
    sub: [
      {name: '待办事项', url: '/app/utils/todoList', icon: ''}
    ]
  },
  {
    name: '地图', url: '/app/map', icon: 'environment-o'
  },
  {
    name: '画廊', url: '/app/gallery', icon: 'picture'
  }
]