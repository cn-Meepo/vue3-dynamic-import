import {createStore} from 'vuex'

interface State {
    menus: any [],
    routers: any []
}

export default createStore({
    state: {
        menus: JSON.parse(<string>sessionStorage.getItem('menuList')),
        routers: sessionStorage.getItem('routerList')
    },

    mutations: {
        setMenuList(state: any, value: any) {
            state.menus = value
            sessionStorage.setItem('menuList', JSON.stringify(value))
        },
        setRouterList(state: any, value: any) {
            state.routers = value
            sessionStorage.setItem('routerList', value)
        }
    }
});
