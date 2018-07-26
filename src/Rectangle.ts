import { Main } from './Main'

export class Rectangle {

    public x: number
    public y: number
    public width: number
    public height: number
    public color: string

    constructor(x: number, y: number, width: number, height: number, color: string) {

        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.color = color; 
        
    }

    move(x: number, y: number) {

        this.x = x;
        this.y = y;

    }

    draw() {
        let ctx = Main.context
        if(ctx) {
            ctx.clearRect(this.x-10, this.y-10, this.width+20, this.height+20)
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);

        } else {
            throw new Error("Cannot draw rectangle, game context has not been initialized.")
        }

    }

}