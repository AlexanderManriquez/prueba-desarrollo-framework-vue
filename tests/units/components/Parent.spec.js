import { shallowMount } from '@vue/test-utils';
import Parent from '@/components/Parent.vue';
import Child from '@/components/Child.vue';

describe('Parent.vue', () => {
  it('debería recibir texto del componente Child', async () => {
    const wrapper = shallowMount(Parent);
    const childComponent = wrapper.findComponent(Child);

    // Simula la entrada de texto y el clic en el botón
    childComponent.vm.inputText = 'Texto de prueba';
    await childComponent.vm.$emit('send-text', 'Texto de prueba');

    // Verifica que el texto recibido sea el correcto
    expect(wrapper.text()).toContain('Texto de prueba');
  });
});