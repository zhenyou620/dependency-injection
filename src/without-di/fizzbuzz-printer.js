import { FizzBuzzConverter } from "./fizzbuzz-converter.js";

export class FizzBuzzPrinter {
  printRange(start, end) {
    const converter = new FizzBuzzConverter(); // 依存関係を内部で生成
    for (let i = start; i <= end; i++) {
      console.log(`${i}: ${converter.convert(i)}`);
    }
  }
}
