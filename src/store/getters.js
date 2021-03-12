export default {
  productExp(state) {
    return state.products.filter(item => {
      return item.price > 3
    })
  }
}