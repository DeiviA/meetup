import Home from '../components/pages/Home/index.vue';
import TPlatform from '../components/pages/TradingPlatform/index.vue'
import UPolicy from '../components/pages/UserPolicy/index.vue'
import Contacts from '../components/pages/Contacts/index.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/trading-platform',
    name: 'trading-platform',
    component: TPlatform
  },
  {
    path: '/user-policy',
    name: 'user-policy',
    component: UPolicy
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  }
]
