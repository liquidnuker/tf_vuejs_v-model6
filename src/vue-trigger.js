new Vue({
  el: "#app",
  data: {
    selected: "Select Item"
  }
});

new Vue({
  el: "#app2",
  data: {
    selected: ""
  },
  computed: {
    toStr: function () {
      return this.selected.toString();
    }
  }
});

var app3_items = [{
  text: "One",
  value: "A"
}, {
  text: "Two",
  value: "B"
}, {
  text: "Three",
  value: "C"
}];

new Vue({
  el: "#app3",
  data: {
    selected: "A",
    options: app3_items
  }
});