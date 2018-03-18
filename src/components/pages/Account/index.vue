<template>
  <div>
    <h1 class="category">Account</h1>
    <div class="form-container">
      <form class="form" @submit.prevent="onSubmit">
        <input class="form__item" type="name"
               name="name"
               placeholder="Your Name"
               v-model="name"
        ></input>
        <input class="form__item" type="photo"
               name="photo"
               placeholder="Your photo"
               v-model="photo"
        ></input>
        <button type="submit" class="button">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    name: 'Account',
    data () {
      return {
        name: '',
        photo: ''
      }
    },
    computed: {
      ...mapGetters(['getUser'])
    },
    methods: {
      ...mapActions(['updateProfileInfo']),
      onSubmit () {
        if (this.name === '' || this.photo === '') return
        console.log('before')
        this.updateProfileInfo({name: this.name, photo: this.photo})
          .then(() => {
            console.log('success')
          })
          .catch(error => {
            console.log('onSubmit', error)
          })
      }
    },
    created () {
      this.name = this.getUser.name
      this.email = this.getUser.email
      this.photo = this.getUser.photo
    }
  }
</script>

<style lang="scss">
  .form-container {
    width: 500px;
    padding: 20px;
    margin: 0 auto;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    &__item {
      border: 1px solid #343434;
      margin-bottom: 20px;
      height: 40px;
      font-size: 18px;
      padding: 10px;
      border-radius: 5px;
    }
  }
</style>
