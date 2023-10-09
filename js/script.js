const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const size = 30

const snake = [
  { x: 200, y: 200 },
  { x: 230, y: 200 },
  { x: 260, y: 200 },
]

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

drawSnake()