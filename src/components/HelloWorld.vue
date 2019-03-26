<template>
  <div class="hello">
    <p class="title">
      <slot name="title"></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  margin: 50px 0 0 0;
}
p.title {
  padding-left: 150px;
  font-size: 10em;
  font-weight: bold;
}

br.sp {
  display: none;
}

@media (max-width: 576px) {
  .hello {
    margin: 20px 20px 0 20px;
    text-align: justify;
    text-justify: inter-cluster;
  }
  p.title {
    font-size: 6em;
    text-align: justify;
    text-justify: inter-cluster;
    word-break: break-all;
    line-height: 85%;
    padding-left: 0;
    margin-top: 40px;
  }

  br.sp {
    display: block;
  }
}
</style>
