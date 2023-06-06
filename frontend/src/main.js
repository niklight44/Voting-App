import { createApp } from 'vue'
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import App from './App.vue'
import { store } from './store';
import router from './router';
import { firebaseConfig } from './firebase';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

import './style.css';

/* add icons to the library */
library.add(faHouse);
library.add(faChartSimple);
library.add(faCirclePlus);


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);




const app = createApp(App);

app.config.globalProperties.$auth = auth;

app.use(router);
app.use(store);

app.mount('#app');
