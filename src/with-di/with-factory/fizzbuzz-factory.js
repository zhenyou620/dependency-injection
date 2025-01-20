import { FizzBuzzConverter } from "./fizzbuzz-converter.js";
import { FizzBuzzPrinter } from "./fizzbuzz-printer.js";
import { ConsoleOutput } from "./console-output.js";

export class FizzBuzzFactory {
  createFizzBuzzPrinter() {
    return new FizzBuzzPrinter(this.createFizzBuzz(), this.createOutput());
  }

  createFizzBuzz() {
    return new FizzBuzzConverter();
  }

  createOutput() {
    return new ConsoleOutput();
  }
}
