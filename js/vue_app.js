var app = new Vue({
  el: '#app',
  components: {
    'image-slider': imageSlider
  },
  data: {},
  methods: {
    switchLanguage: function(event) {
      event.preventDefault();

      if (Vue.config.lang === '_de') {
        Vue.config.lang = '_en';
      } else {
        Vue.config.lang = '_de';
      }
    }
  }
});

Vue.config.lang = '_de';
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
});