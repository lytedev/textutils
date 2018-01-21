import App from '../App'
import PageRoutes from './page-routes.js'

// console.log('AppComponent:', App)
console.log('PagesRoutes:', PageRoutes)

export default [
  {
    path: '/',
    component: App,
    children: PageRoutes,
    meta: {
      title: 'Index',
      description: 'Select from a number of useful text utilities.'
    }
  }
]
