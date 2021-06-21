import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'
import VueAxios from 'vue-axios'



Vue.use(VueAxios, axios)
Vue.config.productionTip = false;
//导入vant框架的组件
import { 
  NavBar,
  IndexAnchor,
  Calendar,
  Form,
  IndexBar, 
  ContactEdit,
  Field,
  CouponCell, CouponList ,
  ContactCard ,
  Button,
  Popup,
  CheckboxGroup,
  Tabbar,
  Lazyload,
  TabbarItem,
  Toast,
  Notify,
  Swipe,
  SwipeItem,
  Search,
  Rate,
  Skeleton,
  GoodsAction,
  GoodsActionIcon,
  Grid,
  GridItem,
  GoodsActionButton,
  Stepper,
  SwipeCell,
  Cell,
  Checkbox,
  SubmitBar,
  Empty,
  Icon,
  Step,
  ContactList,
  Area,
  Uploader,
  Tab,
  CountDown,
  Tag,
  Tabs,
  Dialog,
  Sticky ,
  Col,
  Steps,
 Row,
  List,
  Divider,
  PullRefresh,
  Image as VanImage,
Card 
} from "vant"


import "lib-flexible/flexible"
import './assets/js/appback'


//全局注册
Vue
  .use(NavBar)
  Vue.use(Divider)
  .use(ContactEdit)
  .use(CheckboxGroup)
  .use(Form)
  .use(Field)
  .use(Button)
  .use(Step)
  .use(Steps)
  .use(ContactCard)
  .use(Popup)
  .use(Tabbar)
  .use(IndexAnchor)
  .use(TabbarItem)
  .use(Toast)
  .use(Notify)
  .use(Swipe)
  Vue.use(CountDown)
  .use(SwipeItem)
  .use(Search)
  .use(CouponCell)
  .use(CouponList)
  .use(Skeleton)
  .use(GoodsAction)
  .use(Grid)
  .use(Calendar)
  .use(GridItem)
  .use(GoodsActionIcon)
  .use(GoodsActionButton)
  .use(Stepper)
  .use(SwipeCell)
  .use(Cell)
  .use(Lazyload)
  .use(Sticky )
  .use(Checkbox)
  .use(Card)
  .use(SubmitBar)
  .use(Empty)
  .use(Icon)
  .use(Area)
  .use(ContactList)
  .use(Uploader)
  .use(Tab)
  .use(Tabs)
  .use(Tag)
  .use(Dialog)
  .use(PullRefresh)
  .use( Tabbar)
  .use(TabbarItem)
  .use(List)
  .use(Col)
  .use(IndexBar)
   .use(Row)
  .use(VanImage)
  .use(Rate)
  Vue.config.productionTip = false
  
  //设置请求基础路径
  axios.defaults.baseURL = 'http://119.29.36.88:2020/api'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");





