<template>
  <div>
    <h1>Contacts</h1>
    <p>counter - {{ getCounter }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Contacts',
    data () {
      return {
        logo: 'MoneyGo'
      }
    },
    computed: {
      ...mapGetters(['getCounter'])
    }
  }
</script>

<style lang="scss">

</style>
