var app = new Vue({
  el: '#app',
  components: {
    'image-slider': imageSlider
  },
  data: {
    latestEvent: events[events.length - 1],
  },
  methods: {
    switchLanguage: function(event) {
      event.preventDefault();

      if (Vue.config.lang === '_de') {
        Vue.config.lang = '_en';
      } else {
        Vue.config.lang = '_de';
      }
    },
    getEventUrl: function(event) {
      return "https://www.facebook.com/events/" + event.id + "/";
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
    },
    shortenEvent: function(event) {
      if (Vue.config.lang === '_de') {
        return event.date.format("DD.MM") + ", " + event.title.de;
      } else {
        event.date.locale('en');
        return event.date.format("MM/DD") + ", " + event.title.en;
      }
    }
  },
  computed: {
    registerEvents: function() {
      return events.filter(function (row) {
        return row.registration;
      });
    }
  }
});

Vue.config.lang = '_de';
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
});