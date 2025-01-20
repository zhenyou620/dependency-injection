import { FizzBuzzConverter } from "./fizzbuzz-converter.js";
import { ConsoleOutput } from "./console-output.js";
import { FizzBuzzPrinter } from "./fizzbuzz-printer.js";

// 実行
const converter = new FizzBuzzConverter();
const output = new ConsoleOutput();
const printer = new FizzBuzzPrinter(converter, output);
printer.printRange(1, 100);
