<template>
  <div class="hello">
    <input
      data-test="input"
      v-model="inputValue"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>

<style scoped lang="stylus">
</style>
