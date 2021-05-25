// Object Communication Part 2
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.7-object-communication-2.html
// https://youtu.be/5Q9cA0REztY
// https://editor.p5js.org/codingtrain/sketches/7SjPmXN2

let bubbles = [];
canvas_w = 600
canvas_h = 400

function setup() {
    createCanvas(canvas_w, canvas_h);
    /*
    for (let i = 0; i < 20; i++) {
        let x = random(width);
        let y = random(height);
        let r = random(10, 50);
        bubbles[i] = new Bubble(x, y, r);
    }
    */
}

function draw() {
    background(0);
    textSize(20);
    fill([255, 255, 255])
    textAlign(CENTER, CENTER);
    rect(0, 200, 300, 100);
    rect(0, 300, 300, 100);
    rect(300, 200, 300, 100);
    rect(300, 300, 300, 100);
    fill([0, 0, 0])
    text('Apple', 150, 250);
    text('選項2', 150, 350);
    text('選項3', 450, 250);
    text('選項4', 450, 350);
    for (let b of bubbles) {
        b.show();
        b.move();
        let overlapping = false;
        for (let other of bubbles) {
            if (b !== other && b.intersects(other)) {
                overlapping = true;
            }
        }
        if (overlapping) {
            b.changeColor(255);
            canvas_w = canvas_w - random(-2, 2)
            canvas_h = canvas_h - random(-2, 2)
        } else {
            b.changeColor(0);
        }
    }
}

function mouseClicked() {
    
}

class Bubble {
    constructor(x, y, r = 50) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.brightness = 0;
    }

    intersects(other) {
        let d = dist(this.x, this.y, other.x, other.y);
        return d < this.r + other.r;
        // if (d < this.r + other.r) {
        //   return true;
        // } else {
        //   return false;
        // }
    }

    changeColor(bright) {
        this.brightness = bright;
    }

    contains(px, py) {
        let d = dist(px, py, this.x, this.y);
        if (d < this.r) {
            return true;
        } else {
            return false;
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

class Button {
    constructor(x, y, w, h, t) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.t = t;
    }

    clicked(mx, my) {
        d = dist(mx, my, this.x, this.y);
    }

    draw() {

    }
}