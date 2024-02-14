class Ball {
  constructor(x, y, r) {
    this.x = x
    this.y = y
    this.r = r
    this.xSpeed = random(-1, 1)
    this.ySpeed = random(-1, 1)
  }

  update() {
    this.x = this.x + this.xSpeed
    this.y = this.y + this.ySpeed

    if (this.x > width || this.x < 0) {
      this.xSpeed = this.xSpeed * -1
    }

    if (this.y > height || this.y < 0) {
      this.ySpeed = this.ySpeed * -1
    }
  }

  draw() {
    circle(this.x, this.y, this.r)
  }
}
