/* global SELECTOR, OPTIONS */

import './style.css'
import Vue from 'vue'

import BrowserFrame from './BrowserFrame'

const ALTFILTERMATCH = '(browserframe)'

export default {

  // components: [BrowserFrame],

  data: () => ({  }),

  mounted () {
    const BrowserFrameClass = Vue.extend(BrowserFrame)  

    setTimeout( () => {
      let images = document.querySelectorAll(SELECTOR)

      images = Array.prototype.filter.call(images, (img) => {
        console.log()
        const alt = img.getAttribute('alt')
        return alt.toLowerCase().includes(ALTFILTERMATCH.toLowerCase())
      })


      images.forEach((img) => {
        const url = ''
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt')
        const browserFrame = new BrowserFrameClass(
          {
            propsData: { src, url, alt, imgElement: img }
          }
        )
        browserFrame.$mount()
        img.parentNode.appendChild(browserFrame.$el)
        img.parentNode.removeChild(img)
      })
    }, 1000)
  },

  updated () {

  },

  methods: {
  }
}