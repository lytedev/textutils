import Icons from '../pug-svg/index.js'
console.log('IconsModule:', Icons)

export const URLCoder = {
  relativeUrl: '/url-encoder-decoder',
  title: 'URL Encoder/Decoder',
  description: 'Encode or Decode a chunk of text for use in URLs.',
  iconHtml: Icons.Length,
  isShownInIndexMenu: true,
  file: './URLCoder.vue'
}

export const Length = {
  relativeUrl: '/length',
  title: 'Length',
  description: 'Calculate the number of characters (letters, numbers, or symbols) in a string or a bit of text.',
  iconHtml: Icons.Length,
  isShownInIndexMenu: true,
  file: './Length.vue'
}

export default {
  Length,
  URLCoder
}
