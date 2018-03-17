<template>
  <div class="footer">
    <div class="logo-container">
    </div>
    <div class="menu-container">
      <div class="menu">
        <ul class="menu-list">
          <li class="menu-list__item"><router-link to="/">Home</router-link></li>
          <li class="menu-list__item"><router-link to="/trading-platform">Trading platform</router-link></li>
          <li class="menu-list__item"><router-link to="/user-policy">User policy</router-link></li>
          <li class="menu-list__item"><router-link to="/contacts">Contacts</router-link></li>
        </ul>
      </div>
    </div>
    <div class="buttons-container"></div>
  </div>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        logo: 'MoneyGo'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer {
    height: 100px;
    background-color: #343434;
    display: flex;
    justify-content: space-between;
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
    }
  }

  .buttons-container {
    width: 200px;
  }
</style>
