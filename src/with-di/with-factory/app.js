import { FizzBuzzFactory } from "./fizzbuzz-factory.js";

// 実行
const factory = new FizzBuzzFactory();
const printer = factory.createFizzBuzzPrinter();
printer.printRange(1, 100);
