import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('inputの存在を確認', () => {
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.findAll('[data-test="input"]');
    expect(input.exists()).toBe(true);
  });
  it('inputの初期値は空です', () => {
    const wrapper = shallowMount(HelloWorld);
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('');
  });
  it('inputのvalueが変化すれば、バインディングされたデータも共に変化', () => {
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.findAll('[data-test="input"]');
    input.setValue('Python is the best language');
    const inputValue = wrapper.vm.$data.inputValue;
    expect(inputValue).toBe('Python is the best language');
  });
});
