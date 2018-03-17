<template>
  <div class="header-wrapper">
    <div class="logo-container">
      <p class="logo-container__text">{{logo}}</p>
    </div>
    <div class="menu-container">
      <div class="menu">
        <ul class="menu-list">
          <li class="menu-list__item"><router-link active-class="active" to="/" exact>Meetups</router-link></li>
          <li class="menu-list__item"><router-link active-class="active" to="/trading-platform">Trading platform</router-link></li>
          <li class="menu-list__item"><router-link active-class="active" to="/contacts">Contacts</router-link></li>
        </ul>
      </div>
    </div>
    <div class="buttons-container">
      <div class="buttons-container-group" v-if="!getUserLoggedIn">
        <router-link tag="button" class="button" to="/signin">Sign In</router-link>
        <router-link tag="button" class="button" to="/signup">Sign Up</router-link>
      </div>
      <div class="buttons-container-group" v-else>
        <button class="button">Account</button>
        <button class="button">Log Out</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
export default {
  name: 'WHeader',
  data () {
    return {
      logo: 'MeetUp'
    }
  },
  computed: {
    ...mapGetters(['getUserLoggedIn'])
  }
}
</script>

<style lang="scss" scoped>
  .header-wrapper {
    position: fixed;
    width: 100%;
    height: 100px;
    background-color: #343434;
    display: flex;
    justify-content: space-around;
  }

  .logo-container {
    display: flex;
    width: 200px;
    justify-content: center;
    align-items: center;
    &__text {
      color: white;
      font-weight: 700;
      font-size: 26px;
    }
  }

  .menu-container {
    display: flex;
    align-items: center;
  }

  .menu {
    width: 600px;
  }

  .menu-list {
    width: 100%;
    list-style: none;
    display: flex;
    justify-content: space-around;
    &__item {
      font-size: 20px;
      text-transform: uppercase;
      display: inline-block;
      font-weight: 700;
      color: white;
      a {
        padding: 10px 0;
        border-bottom: 3px solid transparent;
      }

      .active {
        color: #d77b17;
        border-bottom: 3px solid #d77b17;
      }
    }
  }

  .buttons-container {
    width: 200px;
    display: flex;
    align-items: center;
  }

  .buttons-container-group {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

</style>
