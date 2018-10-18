$(document).ready(function(){


// top-left, companies
Vue.component("carousel", {
  template: "#v-carousel",
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 98,
      currentItem: 0,
      items: [
        {img: './img/icon-company.png', visible: 'visible'},
        {img: './img/1.png', visible: 'visible'},
        {img: './img/blank.png', visible: 'visible'},
        {img: './img/icon-company.png', visible: 'hidden'},
        {img: './img/1.png', visible: 'hidden'},
        {img: './img/blank.png', visible: 'hidden'},
      ]
    }
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.items[this.currentItem+this.windowSize].visible = 'visible';
        this.currentOffset -= this.paginationFactor;
        this.items[this.currentItem].visible = 'hidden';
        this.currentItem++;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.items[this.currentItem-1].visible = 'visible';
        this.currentOffset += this.paginationFactor;
        this.items[this.currentItem+this.windowSize-1].visible = 'hidden';
        this.currentItem--;
      }
    },
  }
});

// albums in profile
Vue.component("carouselalbums", {
  template: "#v-carouselalbums",
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 122,
      currentItem: 0,
      items: [
        {img: './img/album.png', visible: 'visible', text: 'Я на море1'},
        {img: './img/album.png', visible: 'visible', text: 'Я на море2'},
        {img: './img/album.png', visible: 'visible', text: 'Я на море3'},
        {img: './img/album.png', visible: 'hidden', text: 'Я на море4'},
        {img: './img/album.png', visible: 'hidden', text: 'Я на море5'},
        {img: './img/album.png', visible: 'hidden', text: 'Я на море6'},
      ]
    }
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.items[this.currentItem+this.windowSize].visible = 'visible';
        this.currentOffset -= this.paginationFactor;
        this.items[this.currentItem].visible = 'hidden';
        this.currentItem++;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.items[this.currentItem-1].visible = 'visible';
        this.currentOffset += this.paginationFactor;
        this.items[this.currentItem+this.windowSize-1].visible = 'hidden';
        this.currentItem--;
      }
    },
  }
});

// news-list in profile
Vue.component("carouselnews", {
  template: "#v-carouselnews",
  data() {
    return {
      currentOffset: 0,
      windowSize: 2,
      paginationFactor: 541,
      currentItem: 0,
      items: [
        {img: './img/news1.png', visible: 'visible'},
        {img: './img/news2.png', visible: 'visible'},
        {img: './img/news1.png', visible: 'hidden'},
        {img: './img/news2.png', visible: 'hidden'},
        {img: './img/news1.png', visible: 'hidden'},
        {img: './img/news2.png', visible: 'hidden'},
      ]
    }
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.items[this.currentItem+this.windowSize].visible = 'visible';
        this.currentOffset -= this.paginationFactor;
        this.items[this.currentItem].visible = 'hidden';
        this.currentItem++;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.items[this.currentItem-1].visible = 'visible';
        this.currentOffset += this.paginationFactor;
        this.items[this.currentItem+this.windowSize-1].visible = 'hidden';
        this.currentItem--;
      }
    },
  }
});



new Vue({
  el:"#app",
    data:{
    rating: 3,
    tabIndex: 0,
  },
  methods: {
    setRating: function(rating){
      this.rating= rating;
    },
    setActiveNavItem: function(idx) {
      if (window.document.querySelectorAll('.win-cont .nav-tabs li').length) {
        let liList = window.document.querySelectorAll('.win-cont .nav-tabs li');
        for (let i = 0; i < liList.length; i++) {
          liList[i].classList.remove('active');
        }
        let li = window.document.querySelector('.win-cont .nav-tabs li:nth-child('+(idx+1)+')');
        li.classList.add('active');
      }
    }
  },
});


});