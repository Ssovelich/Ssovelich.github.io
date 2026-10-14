import { describe, it, expect } from "vitest";
import { add } from "./math";

describe("Функція add", () => {
  it("правильно додає два числа", () => {
    expect(add(2, 3)).toBe(5);
  });
  it("привильно працює з відємними числами", () => {
    expect(add(-1, 1)).toBe(0);
  });
});
