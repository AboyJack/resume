export default {
  props: {
    render: {
      type: Function
    },
    item: {
      type: Object
    }
  },
  render (h) {
    return this.render(h, this.item)
  }
}