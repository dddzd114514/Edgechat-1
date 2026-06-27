import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store.js';
import './styles.css';
import './styles-liquid.css';
import './styles/chat-attachments.css';
// WhatsApp 主题覆盖层：最后引入，确保覆盖优先级高于上述玻璃风样式（单文件单职责，仅做视觉覆盖）
import './styles/theme-whatsapp.css';
import { initLiquidGlass } from './liquid-glass.js';

// 应用自定义背景
const customBg = localStorage.getItem('customBackground');
if (customBg) {
  document.body.style.background = customBg;
}

store.initialize().finally(() => {
  const app = createApp(App);
  app.use(router);
  app.mount('#app');

  // 初始化 Liquid Glass 效果
  setTimeout(initLiquidGlass, 100);
});
