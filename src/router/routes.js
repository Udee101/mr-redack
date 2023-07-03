import Home from '../views/Home.vue';
import Category from '../views/Category.vue';

const routes = [
  {
    path: '/',
    redirect: to => {
      return {
        name: 'home'
      }
    }
  },

  {
    path: '/',
    name: 'home',
    component: Home
  },

  {
    path: '/portfolio/category',
    name: 'portfolio.category',
    component: Category
  }
]

export default routes
