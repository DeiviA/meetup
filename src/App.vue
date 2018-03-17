<template>
  <div id="app">
    <w-header></w-header>
    <div class="content-wrapper">
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
    <w-footer></w-footer>
  </div>
</template>

<script>
  import WHeader from './components/shared/Header/index.vue';
  import WFooter from './components/shared/Footer/index.vue';

export default {
  name: 'app',
  components: { WHeader, WFooter },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  html { overflow-y: scroll; }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: sans-serif;
  }


  /* HTML5 display-role reset for older browsers */

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote {
    &:before,
    &:after {
      content: '';
      content: none;
    }
  }

  q {
    &:before,
    &:after {
      content: '';
      content: none;
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a,
  a:hover,
  a:active,
  a:visited,
  button,
  button:hover,
  button:active,
  button:visited {
    outline: none;
    border: none;
  }

  button {
    border: none;
    background: none;
  }

  * {
    box-sizing: border-box;
  }

  select {
    border: none;
    &:focus {
      outline: none;
    }
  }

  img {
    max-width: 100%;
  }

  input {
    border: none;
    background: none;
    &:focus {
      outline: none;
    }
  }

  .content-wrapper {
    min-height: 600px;
    padding: 100px 100px 50px 100px;
  }

  .content {
    padding: 25px;
    height: 100%;
  }

  .category {
    text-transform: uppercase;
    text-align: center;
    padding: 20px;
    font-size: 32px;
  }

  .button {
    border: 1px solid #d77b17;
    text-transform: uppercase;
    background-color: #343434;
    color: white;
    width: 75px;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 auto;
    transition: background-color 0.3s;
    &:hover {
      background-color: #565656;
      border: 1px solid #d77b17;
    }
  }
</style>
