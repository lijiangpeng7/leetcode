export default {
  getOrderStatus(status) {
    switch (status.toString()) {
      case "1":
        return "待付款";
      case "2":
        return "待发货";
      case "3":
        return "待收货";
      default:
        return "";
    }
  }
}