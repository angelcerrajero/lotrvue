import { createApp } from 'vue'
import App from './App.vue'

import {
  Layout,
  Button,
  Spin,
  Result,
  Card,
  Divider,
  Col,
  Row,
  Drawer,
  Table,
  Form,
  InputNumber,
  Tag,
  Menu,
  Input,
  Popconfirm
} from 'ant-design-vue';

import store from './store'
import router from './router'

const app = createApp(App).use(router).use(store);
app.config.productionTip = false;
app.use(Layout);
app.use(Button);
app.use(Spin);
app.use(Result);
app.use(Card);
app.use(Divider);
app.use(Col);
app.use(Row);
app.use(Drawer);
app.use(Table);
app.use(Form);
app.use(InputNumber);
app.use(Tag);
app.use(Menu);
app.use(Input);
app.use(Popconfirm);
app.mount('#app');
