// Object Communication Part 2
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/7.7-object-communication-2.html
// https://youtu.be/5Q9cA0REztY
// https://editor.p5js.org/codingtrain/sketches/7SjPmXN2

let exams = [];

class Exam {
    constructor(w, h, question, options) {
        this.w = w;
        this.h = h;
        this.question = question;
        this.options = options;
    }
    show() {
        background(0);
        rect(0, 0, this.w, this.h)
        let option_h_c = this.options.length/2;
        this.options.forEach((o,i)=>{
            push();
            fill(51);
            rect(this.w*(i%2)/2,this.h/2+Math.floor(i/2)*this.h/2/option_h_c,this.w/2,this.h/2/option_h_c);
            pop();
        })
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    canvas_w = windowWidth;
    canvas_h = windowHeight;
    exams.push(new Exam(canvas_w, canvas_h, "這是一個問題", ["a", "b", "c", "d"]))
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
    exams.forEach((i)=>{
        i.show()
    })
}

function mouseClicked() {

}