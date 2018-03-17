<template>
  <div>
    <h1 class="category">Sign Up</h1>
    <div class="form-container">
      <form class="form">
        <input class="form__item" type="email"
               name="email"
               placeholder="Your Email"
               value=""
        ></input>
        <input class="form__item" type="password"
               name="password"
               placeholder="Your Password"
               value=""
        ></input>
        <input class="form__item" type="password"
               name="confirm-password"
               placeholder="Confirm Password"
               value=""
        ></input>
        <button type="submit" class="button">Sign In</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Signup',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters(['getCounter'])
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
