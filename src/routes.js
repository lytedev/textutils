import App from './App'
import * as Pages from './pages'

console.log(App)
console.log(Pages)

export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        component: Pages.Index
      },
      {
        path: 'length',
        component: Pages.Length
      },
      {
        path: '*',
        component: Pages.NotFound
      }
    ]
  }
]
