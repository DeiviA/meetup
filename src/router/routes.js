import authGuard from './auth-guard'

import Meetups from '../components/pages/Meetups/index.vue';
import CreateMeetup from '../components/pages/CreateMeetup/index.vue'
import Contacts from '../components/pages/Contacts/index.vue'
import Signin from '../components/pages/Signin/index.vue'
import Signup from '../components/pages/Signup/index.vue'
import Account from '../components/pages/Account/index.vue'
import Meetup from '../components/pages/Meetups/Meetup/index.vue'
import Home from '../components/pages/Home/index.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/meetups',
    name: 'meetups',
    component: Meetups
  },
  {
    path: '/meetups/:id',
    name: 'meetup',
    component: Meetup
  },
  {
    path: '/create-meetup',
    name: 'create-meetup',
    component: CreateMeetup,
    beforeEnter: authGuard
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
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
    beforeEnter: authGuard
  }
]
