import filter from "./filter";
import Vue from "vue"

Object.keys(filter).forEach(k => Vue.filter(k, filter[k]))