import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

const links = {
  links: [
    {
      label: 'Twitter',
      href: 'https://twitter.com/bainarian',
    },
    {
      label: 'GitHub',
      href: 'https://github.com/kazto',
    },
    {
      label: 'Blog',
      href: 'https://www.kazto.net/blog/',
    },
    {
      label: 'Teratail',
      href: 'https://teratail.com/users/kazto',
    },
    {
      label: 'E-mail',
      href: 'mailto:kazto@kazto.dev',
    },
  ]
}

new Vue({
  render: (h) => h(App),
  data: links,
}).$mount('#app');
