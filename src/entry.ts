import type { App, Plugin } from 'vue'
import _TvCard from './components/TvCard.vue'
import './style.scss'

const TvCard = _TvCard as typeof _TvCard & Plugin;
TvCard.install = (app: App) => {
  app.component('TvCard', TvCard)
};

export { TvCard }

export const TvCardPlugin: Plugin = {
  install: TvCard.install
};
export default TvCard;

declare module 'vue' {
  export interface GlobalComponents {
    TvCard: typeof TvCard;
  }
}
