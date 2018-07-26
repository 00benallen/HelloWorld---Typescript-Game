import { Rectangle } from './Rectangle'

export class Main {

    /**
     * Graphics vars
     */
    public static canvas: HTMLCanvasElement
    public static context: CanvasRenderingContext2D

    private redRect: Rectangle

    start() {
        this.createGameCanvas();
        this.initializeObjects();

        setInterval(this.startRenderLoop.bind(this), 20);
    }

    createGameCanvas() {
        Main.canvas = document.createElement("canvas");
        Main.canvas.width = 480;
        Main.canvas.height = 270;
        Main.context = Main.canvas.getContext("2d");
        document.body.insertAdjacentElement('afterend', Main.canvas);
    }

    initializeObjects() {

        this.redRect = new Rectangle(10, 120, 30, 30, 'red')

    }

    startRenderLoop() {
        this.redRect.x += 1
        this.redRect.draw()
    }
}

let app = new Main()
app.start()