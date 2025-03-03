import { createApp } from 'vue'
import App from './App.vue'
import './app.css'
import 'maz-ui/css/main.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import 'aos/dist/aos.css'
import AOS from 'aos'

const toastOptions =  {
    position: "top-center",
    timeout: 2000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false
  };


createApp(App)
.use(AOS)
.use(Toast,toastOptions)
    .mount('#app')

AOS.init();
