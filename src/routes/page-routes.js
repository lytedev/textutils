import * as Pages from '../pages'
import Icons from '../pug-svg/index.js'

console.log('Pages:', Pages)

const PageRoutes = [
  {
    path: '/',
    component: Pages.Index,
    meta: {
      title: 'Index',
      description: 'Select your needed utility or perform a search.'
    }
  },
  {
    path: 'url-encoder-decoder',
    component: Pages.URLCoder,
    meta: {
      title: 'URL Encoder/Decoder',
      description: 'Encode or Decode a chunk of text for use in URLs.',
      iconHtml: Icons.Length,
      isShownInIndexMenu: true
    }
  },
  {
    path: 'length',
    component: Pages.Length,
    meta: {
      title: 'Length',
      description: 'Measure the length in characters, symbols, or code points of a block of text.',
      iconHtml: Icons.Length,
      isShownInIndexMenu: true
    }
  }
  // },
  // {
  //   path: '*',
  //   component: Pages.NotFound,
  //   meta: {
  //     title: '404 Not Found',
  //     description: 'Are you lost?'
  //   }
  // }
]

export default PageRoutes
