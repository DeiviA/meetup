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
    padding: 50px 100px;
  }

  .content {
    border: 1px solid gray;
    padding: 25px;
    height: 100%;
  }
</style>
