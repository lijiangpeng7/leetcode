// import { from } from "core-js/fn/array";
import {SAVE_USERNAME} from "./mutations-types"

export default{
  [SAVE_USERNAME](state, username) {
    state.username = username;
  }
}