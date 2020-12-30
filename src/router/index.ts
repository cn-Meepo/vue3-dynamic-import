import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import {getMenus} from "../api";
import home from "../views/home.vue";
import store from '../store'
import doDynamicImport from "../utils/doDynamicImport";

let isAddDynamicMenuRoutes = false
export let mainRoute: RouteRecordRaw = {
    path: '/',
    name: '/',
    component: home,
    redirect: {
        name: 'home'
    },
    children: [
        {path: '/home', name: 'home', component: home},
    ]
}

const routes: Array<RouteRecordRaw> = []

const router = createRouter({
    history: createWebHistory(),
    routes: routes.concat(mainRoute)
})

router.beforeEach(async (to, from, next) => {
    if (isAddDynamicMenuRoutes) {
        fnAddDynamicMenuRoutes(store.state.menuList)
        next()
    } else {
        await getMenu().then(res => {
            isAddDynamicMenuRoutes = true
            fnAddDynamicMenuRoutes(res.data.data)
            store.commit('setMenuList', res.data.data)
            next({...to, replace: true})
        })
    }
})

function fnAddDynamicMenuRoutes(menuList: any = [], routeList: Array<RouteRecordRaw> = []) {
    let temp: any[] = []
    let children: any = mainRoute.children
    for (let menu of menuList) {
        if (menu.children && menu.children.length >= 1) {
            temp = temp.concat(menu.children)
        } else if (/\S/.test(menu.path)) {
            const route: RouteRecordRaw = {
                path: menu.path,
                component: doDynamicImport(menu.path),
                name: menu.path.replace(/\//g, '-')
            }
            console.log(route)
            children.push(route)
        }
    }
    if (temp.length >= 1) {
        fnAddDynamicMenuRoutes(temp, routeList)
    } else {
        const pathNames: (string | symbol | undefined)[] = [], routeResult: RouteRecordRaw[] | undefined = []
        // @ts-ignore
        mainRoute.children.forEach(item => {
            if (pathNames.indexOf(item.name) === -1) {
                pathNames.push(item.name)
                routeResult.push(item)
            }
        })
        mainRoute.children = routeResult
        store.commit('setRouterList', mainRoute)
        router.addRoute(mainRoute)
    }
}

const getMenu = async () => {
    return await getMenus()
}

export default router


