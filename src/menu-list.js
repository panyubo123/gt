
 const menuList = [{
  name: '交易首页',
  path: '/page',
  icon: 'el-icon-s-flag'
}, {
  name: '消息提醒',
  path: '/dashboard/message-info',
  icon: 'el-icon-picture-outline-round'
}, {
  name: '公告信息',
  path: '',
  icon: 'el-icon-star-on',
  children: [{
    name: '采购公告',
    path: '/notice/list',
    icon: 'el-icon-s-platform'
  },
  {
    name: '系统公告',
    path: '/system-ad/system-ad',
    icon: 'el-icon-c-scale-to-original',
    children: []
  }]
}, {
  name: '我的项目',
  path: '/projects/proj-list',
  icon: 'el-icon-s-help'
}, {
  name: '我的邀请',
  path: '/notice/invitation-list',
  icon: 'el-icon-s-ticket'
}, {
  name: '开标大厅',
  path: '/open-hall',
  icon: 'el-icon-s-promotion'
}, {
  name: '竞价大厅',
  path: '/bidding/bidding-list',
  icon: 'el-icon-remove'
}, {
  name: '答疑澄清',
  path: '/dayi/dayi-list',
  icon: 'el-icon-phone'
}, {
  name: '订单管理',
  path: '/projects/order-invoice',
  icon: 'el-icon-eleme'
}, {
  name: '投标保证金',
  path: '/projects/bid-bond',
  icon: 'el-icon-location'
}
]

// 动态获取菜单
// 给每个配置项添加id
addIndex(menuList)

function addIndex(data, fatherId = '') {
  if (fatherId) {
    data.forEach((v, i) => {
      v.id = fatherId + '-' + i.toString()
      if (v.children) {
        addIndex(v.children, v.id)
      }
    })
  } else {
    data.forEach((v, i) => {
      v.id = i.toString()
      if (v.children) {
        addIndex(v.children, v.id)
      }
    })
  }
}

export default menuList
