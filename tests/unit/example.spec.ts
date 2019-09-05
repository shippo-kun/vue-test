import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('inputの存在を確認', () => {
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.findAll('[data-test="input"]');
    expect(input.exists()).toBe(true);
  });
});
