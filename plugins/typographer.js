import Vue from 'vue'

const Typographer = require('typograf')

const typographer = new Typographer({ locale: ['ru'] })

const typographContent = {
  inserted: (element, binding, vnode) => {
    vnode.children.forEach((chidlVnode) => {
      if (chidlVnode.elm.nodeName === '#text') {
        chidlVnode.elm.nodeValue = typographer.execute(chidlVnode.elm.nodeValue)
      }
    })
  },
}

Vue.directive('typograph-content', typographContent)

export default typographContent
