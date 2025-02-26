/*
 * @Author: shaojilin 1634072334@qq.com
 * @Date: 2025-02-26 16:39:20
 * @LastEditors: shaojilin 1634072334@qq.com
 * @LastEditTime: 2025-02-26 16:39:30
 * @FilePath: \AI_Project\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/a.html'
  },
  {
    path: '/a.html',
    name: 'A',
    component: () => import('../views/APage.vue')
  },
  // 其他路由...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 