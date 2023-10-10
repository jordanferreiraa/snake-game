const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const size = 30

const snake = [
  { x: 270, y: 240 },
  { x: 300, y: 240 },
  { x: 330, y: 240 },
]

let direction, loopId

const drawSnake = () => {
  ctx.fillStyle = "white"
  // ctx.fillRect(snake[0].x, snake[0].y, size, size)

  snake.forEach((position, index) => {

    if(index == snake.length - 1) {
      ctx.fillStyle = "blue"
    }

    ctx.fillRect(position.x, position.y, size, size)
  })
}

const moveSnake = () => {
  if(!direction) return

  //ultimo elemento
  // const head = snake.at(-1)
  const head = snake[snake.length - 1]

  if(direction == "right") {
    snake.push({ x: head.x + size, y: head.y })
  }
  if(direction == "left") {
    snake.push({ x: head.x - size, y: head.y })
  }
  if(direction == "down") {
    snake.push({ x: head.x, y: head.y + size })
  }
  if(direction == "up") {
    snake.push({ x: head.x, y: head.y - size })
  }

  snake.shift()
}
 
const gameLoop = () => {
  clearInterval(loopId)

  ctx.clearRect(0, 0, 600, 600)
  moveSnake()
  drawSnake()

  loopId = setTimeout(() => {
    gameLoop()
  }, 300)
}

gameLoop()

document.addEventListener("keydown", (event) => {
  if(event.key == "ArrowUp" && direction != "down") {
    direction = "up"
  }
  if(event.key == "ArrowDown" && direction != "up") {
    direction = "down"
  }
  if(event.key == "ArrowRight" && direction != "left") {
    direction = "right"
  }
  if(event.key == "ArrowLeft" && direction != "right") {
    direction = "left"
  }
})