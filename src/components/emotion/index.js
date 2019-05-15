import EmotionComponent from './Emotion.vue'

const emotionComp = {
  install: Vue=>{
    Vue.component('emotion-list', EmotionComponent);
  }
}

export default emotionComp;