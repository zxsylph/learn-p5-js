console.log('start')
let balls = []
const maxBall = 100

function setup() {
  console.log('setup')
  // put setup code here
  createCanvas(400, 400)
  for (let i = 0; i < maxBall; i++) {
    balls.push(new Ball(10, 10, 10))
  }
}

function draw() {
  background(150)
  for (const ball of balls) {
    ball.update()
    ball.draw()
  }
  // put drawing code here
}
