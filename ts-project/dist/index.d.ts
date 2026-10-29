type Position = {
    x: number;
    y: number;
};
export declare class CanvasNodeTask1 {
    readonly x: number;
    readonly y: number;
}
export declare class CanvasNodeTask2 {
    x: number;
    y: number;
    move(x: number, y: number): void;
}
export declare class CanvasNodeTask3 {
    x: number;
    y: number;
    constructor(position?: Position);
    get position(): Position;
    move(x: number, y: number): void;
}
export declare class CanvasNode {
    #private;
    constructor(position?: Position);
    get position(): Position;
    set position(newPosition: Position);
    move(x: number, y: number): void;
}
export {};
//# sourceMappingURL=index.d.ts.map