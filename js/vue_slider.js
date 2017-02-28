var imageSlider = {
  data: function() {
    return {
      images: [
        'img/slider/bread.jpg',
        'img/slider/oil.jpg',
        'img/slider/spoons.jpg',
        'img/slider/tomatoes.jpg',
        'img/slider/veggies.jpg'
      ],
      currentNumber: 0,
      timer: null
    };
  },

  ready: function () {
    this.startRotation();
  },

  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 3000);
    },

    stopRotation: function () {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function () {
      this.currentNumber += 1
    },
    prev: function () {
      this.currentNumber -= 1
    }
  }
};
