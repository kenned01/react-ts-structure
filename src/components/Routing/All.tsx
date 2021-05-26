import { ERRORS } from "./Error";
import { PRIVATE_VIEWS } from "./Private";
import { PUBLIC_VIEWS } from "./Public";
import { View } from '../Interfaces/View.i';

const VIEWS : View[] = [
  ...PUBLIC_VIEWS,
  ...PRIVATE_VIEWS,
  ...ERRORS
]

export {
  VIEWS
}