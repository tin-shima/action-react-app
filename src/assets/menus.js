const menus = [
    {
        label: '首页',
        name: 'home',
        icon: 'IconHome'
    },
    {
        label: '商城',
        name: 'mall'
    },
    {
        label: '用户',
        name: 'user'
    },
    {
        label: '其他',
        name: 'other',
        children: [
            {
                label: '页面一',
                name: 'page-one'
            },
            {
                label: '页面二',
                name: 'page-two'
            }
        ]
    },

];

export default menus;