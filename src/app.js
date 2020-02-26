import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      currencies: [],
      // rates: []
    },
    computed: {
    },
    mounted() {
      this.fetchMoney();
    },
    methods: {
      fetchMoney: function () {
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(payload => this.currencies = payload.rates)
        // .then(payload => this.rates = payload.rates)
        // console.log(rates);
      }
    }
  });
});
