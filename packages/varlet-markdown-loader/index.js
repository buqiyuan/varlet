const markdown = require('markdown-it')
const hljs = require('highlight.js')

function cardWrapper(html) {
  const group = html.replace(/<h3/g, ':::<h3').replace(/<h2/g, ':::<h2').split(':::')

  return group.map((fragment) => (fragment.includes('<h3') ? `<div class="card">${fragment}</div>` : fragment)).join('')
}

function highlight(str, lang) {
  if (lang && hljs.getLanguage(lang)) {
    return `<pre>
         <code>
           <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css">
           ${hljs.highlight(lang, str, true).value}
         </code>
       </pre>
      `
  }

  return ''
}

function markLoader(source) {
  const md = markdown({
    html: true,
    typographer: true,
    highlight,
  })
  const html = cardWrapper(md.render(source))

  return `<template><div class="varlet-site-doc" v-pre>${html}</div></template>`
}

module.exports = markLoader
