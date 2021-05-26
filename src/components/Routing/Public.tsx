import { View } from '../Interfaces/View.i';
import Home from '../Views/Public/Home';

const PUBLIC_VIEWS : View[] = [
  {path: '/', component: Home, showFoot: false, showNav: false, isProtected: false}
];

export {
  PUBLIC_VIEWS
}