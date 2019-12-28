import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('inputの存在を確認', () => {
    // 初期設定
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.findAll('[data-test="input"]');

    // 結果
    expect(input.exists()).toBe(true);
  });
  it('inputの初期値は空です', () => {
    // 初期設定
    const wrapper = shallowMount(HelloWorld);
    const result = wrapper.vm.$data.inputValue;

    // 結果
    expect(result).toBe('');
  });
  it('inputのvalueが変化すれば、バインディングされたデータも共に変化', () => {
    // 初期設定
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.findAll('[data-test="input"]');

    // input情報を変化
    input.setValue('Python is the best language');
    const result = wrapper.vm.$data.inputValue;

    // 結果
    expect(result).toBe('Python is the best language');
  });
  it('inputのvalueが空の場合、Enter押してもmethod実行されない', () => {
    // 初期設定
    const wrapper = shallowMount(HelloWorld);
    const input = wrapper.findAll('[data-test="input"]');

    // テスト状況を設定
    input.setValue('');
    input.trigger('keyup.enter');

    // 結果
    expect(wrapper.emitted().search).toBeFalsy();
  });
});
