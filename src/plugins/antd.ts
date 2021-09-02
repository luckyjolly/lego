import { App } from 'vue';
import 'ant-design-vue/dist/antd.less';

import { Layout, Row, Col, Card, Button, Avatar } from 'ant-design-vue';

export default {
  install(app: App) {
    app.use(Layout).use(Row).use(Col).use(Card).use(Button).use(Avatar);
  }
};
