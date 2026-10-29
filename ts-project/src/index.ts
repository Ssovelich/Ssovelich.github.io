type Position = {
  x: number;
  y: number;
};

// Task 1

export class CanvasNodeTask1 {
  readonly x: number = 0;
  readonly y: number = 0;
}

// Task 2

export class CanvasNodeTask2 {
  x: number = 0;
  y: number = 0;

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}

// Task 3

export class CanvasNodeTask3 {
  x: number;
  y: number;

  constructor(position?: Position) {
    this.x = position?.x ?? 0;
    this.y = position?.y ?? 0;
  }

  get position(): Position {
    return {
      x: this.x,
      y: this.y,
    };
  }

  move(x: number, y: number): void {
    this.x = x;
    this.y = y;
  }
}

// Task 4

export class CanvasNode {
  #x: number;
  #y: number;

  constructor(position?: Position) {
    this.#x = position?.x ?? 0;
    this.#y = position?.y ?? 0;
  }

  get position(): Position {
    return {
      x: this.#x,
      y: this.#y,
    };
  }

  set position(newPosition: Position) {
    this.#x = newPosition.x;
    this.#y = newPosition.y;
  }

  move(x: number, y: number): void {
    this.#x = x;
    this.#y = y;
  }
}
