console.log('start')
let ball

function setup() {
  console.log('setup')
  // put setup code here
  createCanvas(200, 200)
  ball = new Ball(10, 10, 10)
}

function draw() {
  background(255)
  ball.update()
  ball.draw()
  // put drawing code here
}
