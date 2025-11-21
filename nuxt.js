import { defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: '@todovue/tv-card',
    configKey: 'tvCard'
  },
  setup(_options, nuxt) {
    const cardCss = '@todovue/tv-card/style.css';
    const labelCss = '@todovue/tv-label/style.css';
    const buttonCss = '@todovue/tv-button/style.css';

    const pushUnique = (path) => {
      if (!nuxt.options.css.includes(path)) {
        nuxt.options.css.push(path);
      }
    };

    pushUnique(cardCss);
    pushUnique(labelCss);
    pushUnique(buttonCss);
  }
})
