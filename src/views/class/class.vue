<template>
  <div>es6 class</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    testclass() {
      class Api {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this._init();
        }

        _init() {
          console.log(this.x, "this.x");
        }
      }
      var api = new Api(2, 3);
    },
  },
  mounted() {
    this.testclass();
  },
};
</script>
