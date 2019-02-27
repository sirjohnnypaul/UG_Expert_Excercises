function setup() {
    createCanvas(400, 400);
    //define degrees for step 1
    angleMode(DEGREES);
}

function draw() {
    background(0);

    //transformation
    translate(200, 200);
    rotate(-90);

    //basic clock
    let hr = hour()+12;
    let mn = minute();
    let sec = second();

    //so we could have 01,02 etc etc
    if (hr <= 9 ) {
        hr = '0'+hr;
    }

    if (mn <= 9 ) {
        mn = '0'+mn;
    }

    if (sec <= 9 ) {
        sec = '0'+sec;
    }


    strokeWeight(8);
    noFill();
    stroke(255, 100, 150);

    let end = map(sec, 0, 60, 0, 360);
    arc(0, 0, 300, 300, 0, end);

    stroke(150,100,255);
    let endMin = map(mn, 0, 60, 0, 360);
    arc(0, 0, 280, 280, 0, endMin);

    stroke(150,255,100);
    let endHr = map(hr % 12, 0, 12, -90, 360);
    arc(0, 0, 260, 260, 0, endHr);

    //seconds
    push();
    rotate(end);
    stroke(255, 100, 150);
    strokeWeight(2);
    line(0,0, 100, 0);
    pop();

    //minutes
    push();
    rotate(endMin);
    strokeWeight(4);
    stroke(150, 100, 255);
    line(0,0, 100, 0);
    pop();

    //hours

    push();
    rotate(endHr);
    strokeWeight(6);
    stroke(150, 255, 100);
    line(0,0, 100, 0);
    pop();
    
}

