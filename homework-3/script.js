    /*let countBalls = 35;
    let balance = 0;

    const gameBalls = document.body.querySelector("canvas");
    const ctx = gameBalls.getContext("2d");

    let balls = [];

    window.onload = function initial() {
        gameBalls.height = 0.6 * window.innerHeight;
        gameBalls.width = 0.8 * window.innerWidth;

        fullLoopGame(); 
        pushingBalls();
    }
    /*const level = document.getElementById("levelDiv");
    const easyLevel = level.firstChild;
    easyLevel.addEventListener('click', changeLevelCountBalls(20));
    const normalLevel = easyLevel.nextSibling;
    normalLevel.addEventListener('click', changeLevelCountBalls(30));
    

    function changeLevelCountBalls() {
        const k = document.getElementById("levelDiv").firstChild;
    k.addEventListener('click', countBalls = 40);
      balls = [];
      pushingBalls();
      drawBallsOnTheField(balls);
      animateBalls(balls);
    }

    function createBall(ball) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#cc0000";
      ctx.fill();
      ctx.restore();
    }

    function pushingBalls() {
      while (countBalls < 50) {
        countBalls++;
        var ball = {
          x: Math.random() * (0.75 * window.innerWidth) + 20,
          y: 25,
          radius: Math.random() * 20 + 5,
          stepY: Math.floor(Math.random() * 3 + 1),
          color: "#cc0000",
        };
        balls.push(ball);
      }
    }

    function drawBallsOnTheField(ballArray) {
      ballArray.forEach(function (ball) {
        createBall(ball);
      });
      
    }

    function animateBalls(ballArray) {
      ballArray.forEach(function (ball) {
        ball.y += ball.stepY;
        checkBallHittingTheFooter(ball);
      });
      
    }

    function checkBallHittingTheFooter(ball) {
      if (ball.y - ball.radius > 0.6 * window.innerHeight) {
        let indexBall = balls.indexOf(ball);
        balls.splice(indexBall, 1);  
        balance-=2;
        //console.log(balance);
      }
    }
    
    function removeBall(ball) {
      ball.clearRect();
    }

    function fullLoopGame() {
      ctx.clearRect(0, 0, gameBalls.width, gameBalls.height);

      drawBallsOnTheField(balls);
      animateBalls(balls);

      requestAnimationFrame(fullLoopGame);
    }

    gameBalls.addEventListener('click', (event) => {
      const rect = gameBalls.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      
    })*/

let bubbles = [];

function setup() {
  createCanvas(600, 400);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 60);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }
}

function mousePressed() {
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0;
  }

  clicked(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      this.brightness = 255;
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }
}
    
