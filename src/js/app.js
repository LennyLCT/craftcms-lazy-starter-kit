import '../css/app.css'
import 'glightbox/dist/css/glightbox.css'
import { animate, stagger, onScroll } from 'animejs'
import GLightbox from 'glightbox'

// START
document.documentElement.classList.add('js-enabled')
console.log(
  '%cMade with Craft CMS and 🤍 by Andi Grether / webworker.me',
  'font-size: 13px; font-weight: bold; color: #fff; background-color: #e5422b; padding: 10px 12px; margin: 5px 0;',
)

// GLIGHTBOX
const lightbox = GLightbox({
  selector: '[data-gallery]',
  touchNavigation: true,
  loop: true,
  zoomable: false,
  openEffect: 'fade',
})

// ANIMEJS
document.addEventListener('DOMContentLoaded', () => {
  const groups = document.querySelectorAll('[data-animate-group]')

  const effects = {
    'fade-up': { opacity: [0, 1], translateY: [50, 0], duration: 800, easing: 'easeOutElastic(1, .5)' },
    'fade-in': { opacity: [0, 1], duration: 800, easing: 'easeOutElastic(1, .5)' },
    'slide-left': { opacity: [0, 1], translateX: [-60, 0], duration: 800, easing: 'easeOutExpo' },
    'slide-right': { opacity: [0, 1], translateX: [60, 0], duration: 800, easing: 'easeOutExpo' },
    'zoom-in': { opacity: [0, 1], scale: [0.9, 1], duration: 800, easing: 'easeOutElastic(1, .5)' },
  }

  groups.forEach((group) => {
    const elements = group.querySelectorAll('[data-animate]')
    if (!elements.length) {
      return
    }

    elements.forEach((el, i) => {
      const type = el.dataset.animate
      const animation = effects[type] || effects['fade-in']

      animate(el, {
        ...animation,
        delay: i * 150,
        autoplay: onScroll({
          target: group,
          enter: '80% 0%',
          once: true,
          debug: false,
        }),
      })
    })
  })
})
