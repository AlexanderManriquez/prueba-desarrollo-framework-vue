import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Contador from '@/components/Contador.vue';

describe('Contador.vue', () => {
  let store;
  let mutations;
  let state;

  beforeEach(() => {
    state = {
      count: 0
    };

    mutations = {
      increment: jest.fn(state => state.count++),
      decrement: jest.fn(state => state.count--)
    };

    store = createStore({
      state,
      mutations
    });
  });

  it('a. Verificar que se reciba un valor inicial en el contador', () => {
    const wrapper = shallowMount(Contador, {
      global: {
        plugins: [store]
      }
    });
    expect(wrapper.find('p').text()).toContain('Count: 0');
  });

  it('b. Probar la funcionalidad de incremento del contador', async () => {
    const wrapper = shallowMount(Contador, {
      global: {
        plugins: [store]
      }
    });
    await wrapper.find('button').trigger('click');
    expect(mutations.increment).toHaveBeenCalled();
    expect(state.count).toBe(1);
  });

  it('b. Probar la funcionalidad de decremento del contador', async () => {
    const wrapper = shallowMount(Contador, {
      global: {
        plugins: [store]
      }
    });
    await wrapper.findAll('button').at(1).trigger('click');
    expect(mutations.decrement).toHaveBeenCalled();
    expect(state.count).toBe(-1);
  });
});