class Ball {
  constructor(x, y, r) {
    this.x = x
    this.y = y
    this.r = r
    this.xSpeed = random(-3, 3)
    this.ySpeed = random(-3, 3)
  }

  update() {
    this.x = this.x + this.xSpeed
    this.y = this.y + this.ySpeed

    if (this.x > width || this.x < 0) {
      this.xSpeed = this.xSpeed * -1
      this.xSpeed = this.xSpeed * 0.9
    }

    if (this.y > height || this.y < 0) {
      this.ySpeed = this.ySpeed * -1
      this.ySpeed = this.ySpeed * 0.9
    }
  }

  draw() {
    fill(map(Math.abs(this.xSpeed), 0, 3, 0, 255))
    circle(this.x, this.y, this.r)
  }
}
