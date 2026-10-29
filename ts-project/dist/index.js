"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasNode = exports.CanvasNodeTask3 = exports.CanvasNodeTask2 = exports.CanvasNodeTask1 = void 0;
// Task 1
class CanvasNodeTask1 {
    x = 0;
    y = 0;
}
exports.CanvasNodeTask1 = CanvasNodeTask1;
// Task 2
class CanvasNodeTask2 {
    x = 0;
    y = 0;
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.CanvasNodeTask2 = CanvasNodeTask2;
// Task 3
class CanvasNodeTask3 {
    x;
    y;
    constructor(position) {
        this.x = position?.x ?? 0;
        this.y = position?.y ?? 0;
    }
    get position() {
        return {
            x: this.x,
            y: this.y,
        };
    }
    move(x, y) {
        this.x = x;
        this.y = y;
    }
}
exports.CanvasNodeTask3 = CanvasNodeTask3;
// Task 4
class CanvasNode {
    #x;
    #y;
    constructor(position) {
        this.#x = position?.x ?? 0;
        this.#y = position?.y ?? 0;
    }
    get position() {
        return {
            x: this.#x,
            y: this.#y,
        };
    }
    set position(newPosition) {
        this.#x = newPosition.x;
        this.#y = newPosition.y;
    }
    move(x, y) {
        this.#x = x;
        this.#y = y;
    }
}
exports.CanvasNode = CanvasNode;
//# sourceMappingURL=index.js.map