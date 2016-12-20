import App from './App'
import * as Pages from './pages'

console.log('AppComponent:', App)
console.log('PagesModule:', Pages)

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
        path: 'url-encoder-decoder',
        component: Pages.Length
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
