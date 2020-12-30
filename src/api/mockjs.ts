import Mock from 'mockjs'


Mock.mock('/api/getMenus', 'get', {
    "data": [
        {
            "id": "1",
            "name": "首　页",
            "path": "/first",
            "icon": "el-icon-s-home"
        },
        {
            "id": "2",
            "name": "第二页",
            "path": "/second",
            "icon": "el-icon-menu"
        }
    ]
})
