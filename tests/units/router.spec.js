import { shallowMount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: AboutView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

describe('Vue Router', () => {
  it('debería tener un componente HomeView', async () => {
    router.push('/');
    await router.isReady();
    const wrapper = shallowMount(HomeView, {
      global: {
        plugins: [router]
      }
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('debería tener un componente AboutView', async () => {
    router.push('/about');
    await router.isReady();
    const wrapper = shallowMount(AboutView, {
      global: {
        plugins: [router]
      }
    });
    expect(wrapper.exists()).toBe(true);
  });
});