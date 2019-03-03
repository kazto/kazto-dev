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
  data: object[] = [
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
      label: 'E-mail',
      url: 'mailto:kazto@kazto.dev',
    },
  ];
}

</script>

<style scoped lang="scss">
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
