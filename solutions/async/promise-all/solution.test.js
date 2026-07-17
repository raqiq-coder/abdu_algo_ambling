import { describe, it, expect } from "vitest";
import { promiseAll } from "./solution";

describe("promiseAll", () => {
  it("должен успешно разрешаться с массивом результатов, если все промисы выполнены", async () => {
    const p1 = Promise.resolve(1);
    const p2 = new Promise((resolve) => setTimeout(() => resolve(2), 50));
    const p3 = Promise.resolve(3);

    const result = await promiseAll([p1, p2, p3]);
    expect(result).toEqual([1, 2, 3]);
  });

  it("должен сохранять исходный порядок результатов, даже если долгий промис идет первым", async () => {
    const p1 = new Promise((resolve) => setTimeout(() => resolve("slow"), 100));
    const p2 = new Promise((resolve) => setTimeout(() => resolve("fast"), 10));

    const result = await promiseAll([p1, p2]);

    expect(result).toEqual(["slow", "fast"]);
    expect(result[0]).toBe("slow");
    expect(result[1]).toBe("fast");
  });

  it("должен мгновенно отклоняться (fast-fail) при первой ошибке", async () => {
    const p1 = new Promise((resolve) =>
      setTimeout(() => resolve("success"), 100)
    );
    const p2 = new Promise((_, reject) =>
      setTimeout(() => reject(new Error("fail")), 10)
    );

    await expect(promiseAll([p1, p2])).rejects.toThrow("fail");
  });

  it("должен корректно обрабатывать пустой массив и возвращать пустой массив", async () => {
    const result = await promiseAll([]);
    expect(result).toEqual([]);
  });
});
