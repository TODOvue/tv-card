import TvCard from './components/TvCard.vue'

(TvCard as any).install = (app: any) => {
  app.component('TvCard', TvCard)
};

export const TvCardPlugin = {
  install(app: any) {
    app.component('TvCard', TvCard)
  }
}

export { TvCard }
export default TvCard
