export class FizzBuzzPrinter {
  constructor(converter, output) {
    this.converter = converter;
    this.output = output;
  }

  printRange(start, end) {
    for (let i = start; i <= end; i++) {
      const text = this.converter.convert(i);
      this.output.write(`${i}: ${text}`);
    }
  }
}
