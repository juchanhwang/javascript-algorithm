var val = [1, 2, 3]

var obj = {
  val: [1, 2, 3, 4],
  fn: function () {
    !function () {
      this.val.forEach(function (el) {
        console.log(el);
      })
    }()
  }
}

obj.fn()


