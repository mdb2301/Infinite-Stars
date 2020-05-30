function Star(){
    this.x = random(-width,width);
    this.y = random(-height,height);
    this.z = random(-width,width);

    this.show = function(){
        fill(255);
        ellipse(this.x/this.z,this.y/this.z,24/this.z,24/this.z);
    }

    this.update = function(){
        this.z = this.z - 1;
        if(this.z<=0)
        {
            this.z = random(-width,width);
        }
    }
}

var stars = [];
var num = 500;

function setup()
{
    createCanvas(800,600);
    for(var i=0;i<num;i++)
    {
        stars.push(new Star);
    }
    
}

function draw()
{
    background(0);
    translate(width/2,height/2);
    for(var i=0;i<num;i++)
    {
        stars[i].update();
        stars[i].show();
    }    
}