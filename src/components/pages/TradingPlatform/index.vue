<template>
  <div>
    <h1 @click="increment">TPlatform {{ counter }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'TPlatform',
    data () {
      return {
        logo: 'MoneyGo'
      }
    },
    methods: {
        increment () {
            console.log('increment')
            this.$store.state.counter++
        }
    },
    computed: {
        counter () {
            return this.$store.state.counter
        }
    }
  }
</script>

<style lang="scss">

</style>
