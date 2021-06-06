import { View } from '../Interfaces/View.i';
import Home from '../Views/Public/Home/Home';
import HomeAdd from '../Views/Public/Home/Home_add';

const PUBLIC_VIEWS : View[] = [
  {path: '/', component: Home, showFoot: false, showNav: false, isProtected: false},
  {path: '/add', component: HomeAdd, showFoot: false, showNav: false, isProtected: false}
];

export {
  PUBLIC_VIEWS
}