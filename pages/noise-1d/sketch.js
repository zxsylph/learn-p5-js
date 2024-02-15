/// <reference path="../../node_modules/@types/p5/global.d.ts" />

console.log('start')
let values = []
let xOffset = 0

function setup() {
  console.log('setup')
  // put setup code here
  createCanvas(400, 400)

  for (let i = 0; i < width; i++) {
    values.push(0)
  }
}

function draw() {
  background(150)

  // let number = random(1)
  let number = noise(xOffset)
  let y = map(number, 0, 1, 0, height)
  values.push(y)
  values.shift()

  stroke(255)

  for (const x in values) {
    let y = values[x]
    point(x, y)
  }

  xOffset = xOffset + 0.007
  // noLoop()
}
