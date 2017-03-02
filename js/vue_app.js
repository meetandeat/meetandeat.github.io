var app = new Vue({
  el: '#app',
  components: {
    'image-slider': imageSlider
  },
  data: {
    latestEvent: events[events.length - 1]
  },
  methods: {
    switchLanguage: function(event) {
      event.preventDefault();

      if (Vue.config.lang === '_de') {
        Vue.config.lang = '_en';
      } else {
        Vue.config.lang = '_de';
      }
    }
  },
  filters: {
    translateKey: function(data) {
      if (Vue.config.lang === '_de') {
        return data.de;
      } else {
        return data.en;
      }
    },
    datetime: function(moment) {
      if (Vue.config.lang === '_de') {
        return moment.format("DD.MM.YYYY, HH:mm");
      } else {
        moment.locale('en');
        return moment.format("YYYY/MM/DD, LT");
      }

    }
  }
});

Vue.config.lang = '_de';
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
});