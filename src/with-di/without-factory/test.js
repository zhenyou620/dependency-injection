import { FizzBuzzPrinter } from "./fizzbuzz-printer.js";
import { jest } from "@jest/globals";

describe("FizzBuzzPrinter", () => {
  let mockConverter;
  let mockOutput;

  beforeEach(() => {
    mockConverter = {
      convert: jest.fn(),
    };
    mockOutput = {
      write: jest.fn(),
    };
  });

  test("範囲が無効なとき、呼び出さない", () => {
    const printer = new FizzBuzzPrinter(mockConverter, mockOutput);
    printer.printRange(0, -1);

    expect(mockConverter.convert).not.toHaveBeenCalled();
    expect(mockOutput.write).not.toHaveBeenCalled();
  });

  test("1〜3の範囲でFizzBuzz", () => {
    mockConverter.convert.mockImplementation((number) => {
      const map = {
        1: "1",
        2: "2",
        3: "Fizz",
      };
      return map[number];
    });

    const printer = new FizzBuzzPrinter(mockConverter, mockOutput);
    printer.printRange(1, 3);

    expect(mockConverter.convert).toHaveBeenCalledTimes(3);
    expect(mockOutput.write).toHaveBeenCalledTimes(3);

    expect(mockOutput.write).toHaveBeenNthCalledWith(1, "1: 1");
    expect(mockOutput.write).toHaveBeenNthCalledWith(2, "2: 2");
    expect(mockOutput.write).toHaveBeenNthCalledWith(3, "3: Fizz");
  });
});
