import { defineCustomElement } from 'vue'
import BlogList from './blog-list.ce.vue'

customElements.define(
  'blog-list',
  defineCustomElement(BlogList, { shadowRoot: false }) // 👈 Shadow DOM aus
)
