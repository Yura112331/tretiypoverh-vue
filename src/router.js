import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/Index.vue';
import AboutPage from './components/AboutUs.vue';
import Price from './components/Price.vue';
import Offer from './components/Offer.vue';
import PrivacyPolicy from './components/PrivacyPolicy.vue';
import Refund from './components/Refund.vue';
import SignUp from './components/SignUp.vue';
import Psychologist1 from './components/Psychologists/Psychologist1.vue';
import Psychologist2 from './components/Psychologists/Psychologist2.vue';
import Psychologist3 from './components/Psychologists/Psychologist3.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/ПроНас', component: AboutPage },
  { path: '/ПрайсЛист', component: Price },
  { path: '/ДоговірОферти', component: Offer },
  { path: '/ПолітикаКонфіденційності', component: PrivacyPolicy },
  { path: '/ПолітикаПоверненняКоштів', component: Refund },
  { path: '/ПідібратиПсихолога', component: SignUp },
  { path: '/psychologist/1', component: Psychologist1 },
  { path: '/psychologist/2', component: Psychologist2 },
  { path: '/psychologist/3', component: Psychologist3 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
