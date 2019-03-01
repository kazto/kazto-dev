<template>
    <ul>
      <li v-for="(href, label) in links" :key="label">
        <a :href=href >{{ label }}</a>
      </li>
    </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Links extends Vue {
  @Prop() private links!: Array<Object>;
}
</script>

<style scoped lang="scss">
.hello {
  margin: 200px 0 0 0;
}
h1 {
  font-size: 10em;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
