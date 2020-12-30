import instance from './axios'

export const getMenus = () => {
    return instance({
        url: '/getMenus'
    })
}
export default {
    getMenus
}
