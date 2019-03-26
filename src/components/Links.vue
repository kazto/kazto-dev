<template>
    <ul>
      <li v-for="item in data" :key="item.label">
        <a :href="item.url" >{{ item.label }}</a>
      </li>
    </ul>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Links extends Vue {
  private data: object[] = [
    {
      label: 'Twitter',
      url: 'https://twitter.com/bainarian',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/kazto',
    },
    {
      label: 'Blog',
      url: 'https://www.kazto.net/blog/',
    },
    {
      label: 'Teratail',
      url: 'https://teratail.com/users/kazto',
    },
    {
      label: 'Speakerdeck',
      url: 'https://speakerdeck.com/kazto',
    },
    {
      label: 'たまもく',
      url: 'https://tamamoku.tokyo/',
    },
  ];
}

</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
  margin-left: 50px;
  margin-right: 50px;
  text-align: center;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
