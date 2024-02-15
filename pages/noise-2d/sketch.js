/// <reference path="../../node_modules/@types/p5/global.d.ts" />

console.log('start')
let xOffset = 0
let yOffset = 0
let zOffset = 0
let increment = 0.01

function setup() {
  console.log('setup')
  // put setup code here
  createCanvas(400, 400)
  pixelDensity(1)
  // frameRate(1)
}

function draw() {
  loadPixels()

  yOffset = 0
  for (let y = 0; y < height; y += 1) {
    xOffset = 0

    for (let x = 0; x < width; x += 1) {
      let number = noise(xOffset, yOffset, zOffset)
      let color = map(number, 0, 1, 0, 255)
      let index = (x + y * width) * 4

      pixels[index + 0] = color
      pixels[index + 1] = color
      pixels[index + 2] = color
      pixels[index + 3] = 255

      xOffset = xOffset + increment
    }

    yOffset = yOffset + increment
  }

  zOffset = zOffset + increment

  updatePixels()
  // noLoop()
}
