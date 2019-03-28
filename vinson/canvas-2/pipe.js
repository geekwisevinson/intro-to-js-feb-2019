console.log('pipe')
class  Pipe {
    x = 0;
    y = 0;
    w = 0;
    h = 0;
    context = null;
    sx = 361;
    sy = 0;
    sw = 80;
    sh = 80;
    bottom = 0;
    gap = 200;
    constructor(x, y, w, h, context) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.bottom = height - this.h + this.gap;
        this.context = context;
        console.log(img);
    }

    draw() {
        this.context.drawImage(img,
            this.sx, this.sy, this.sw, this.sh,
            this.x, this.y, this.w, this.h
        );

        this.context.drawImage(img,
            this.sx, this.sy, this.sw, this.sh,
            this.x, this.y + this.h + 200 , this.w, this.h +  this.gap + this.bottom
        );
    }

    update() {
        this.x  -= 1;
        if( this.x + width <= 0) {
            console.log('frame', frame, this.x);
            this.x = width;
            this.h = Math.ceil(Math.random() * height / 2)  + 50;

        }
        if (this.x === 0) {
            console.log('frame', frame, this.x);
        }
    }

}