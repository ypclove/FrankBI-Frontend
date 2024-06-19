export default [
  { path: '/welcome', name: '首页', icon: 'smile', component: './Welcome' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
  {
    path: '/user',
    layout: false,
    routes: [
      { path: '/user/login', name: '登录', component: './UserCenter/Login' },
      { path: '/user/register', name: '注册', component: './UserCenter/Register' },
      { component: './404' }
    ]
  },
  {
    path: '/add_chart',
    name: 'BI智能分析(同步)',
    icon: 'barChart',
    component: './AddChart'
  },
  {
    path: '/add_chart_async',
    name: 'BI智能分析(异步)',
    icon: 'lineChart',
    component: './AsyncAddChart'
  },
  { path: '/gen_chart', name: '图表中心', icon: 'pieChart', component: './ChartManage' },
  {
    path: '/ai_question',
    name: 'Frank AI 助手',
    icon: 'robot',
    routes: [
      { path: '/ai_question/assistant', name: 'Frank AI', component: './AiChatAssistant/AddChat' },
      {
        path: '/ai_question/history',
        name: 'Frank AI 解答',
        component: './AiChatAssistant/AiChatManage'
      }
    ]
  },
  {
    path: '/viewChartData/:id',
    icon: 'checkCircle',
    component: './ViewChartData',
    name: '查看图表',
    hideInMenu: true
  },
  {
    path: '/person',
    icon: 'user',
    name: '个人中心',
    routes: [
      { path: '/person/user_info', name: '个人信息', component: './UserCenter/UserInfo/' },
      { path: '/person/order', name: '个人订单', component: './UserCenter/UserOrder' },
      { path: '/person/pay_order', name: '订单付款', component: './UserCenter/UserPayOrder' },
      { path: '/person/payInfo', name: '支付信息查询', component: './UserCenter/UserPayInfo' }
    ]
  },
  {
    path: '/admin',
    icon: 'appstore',
    name: '系统管理',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      {
        path: '/admin/user_manage',
        name: '用户管理',
        component: './Admin/UserManage'
      },
      { path: '/admin/adduser', name: '添加用户', component: './Admin/AddUser' },
      { path: '/admin/chart_manage', name: '图表管理', component: './Admin/ChartManage' },
      { path: '/admin/chat_manage', name: '对话管理', component: './Admin/AiChatManage' },
      { path: '/admin/user_order_manage', name: '订单管理', component: './Admin/UserOrderManage' },
      {
        path: '/admin/user_pay_order_manage',
        name: '管理员支付订单',
        component: './Admin/UserPayOrderManage'
      },
      {
        path: '/admin/user_pay_info_manage',
        name: '支付信息结果查询',
        component: './Admin/UserPayInfoManage'
      }
    ]
  }
];
