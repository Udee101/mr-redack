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
    path: '/categories/:id',
    name: 'categories.id',
    component: Category,
    props: true
  }
]

export default routes
