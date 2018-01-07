import Vue from 'vue'
import Router from 'vue-router'
import index from 'src/components/index'
import about from 'src/components/about'
import product from 'src/components/product'
import merchantsJoin from 'src/components/merchantsJoin'
/*import news from 'src/components/news'*/
import hr from 'src/components/hr'
import connectUs from 'src/components/connectUs'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      name:'index',
      path: '/index',
      component: index
    },
    {
      name:'about',
      path: '/about',
      component: about
    },
    {
      name:'product',
      path: '/product',
      component: product
    },
    {
      name:'merchantsJoin',
      path: '/merchantsJoin',
      component: merchantsJoin
    },
    /*{
      name:'news',
      path: '/news',
      component: news
    },*/
    {
      name:'hr',
      path: '/hr',
      component: hr
    },
    {
      name:'connectUs',
      path: '/connectUs',
      component: connectUs
    }
  ]
})
