import Meetups from '../components/pages/Meetups/index.vue';
import TPlatform from '../components/pages/TradingPlatform/index.vue'
import Contacts from '../components/pages/Contacts/index.vue'
import Signin from '../components/pages/Signin/index.vue'
import Signup from '../components/pages/Signup/index.vue'

export const routes = [
  {
    path: '/',
    name: 'meetups',
    component: Meetups
  },
  {
    path: '/trading-platform',
    name: 'trading-platform',
    component: TPlatform
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: Contacts
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup
  }
]
