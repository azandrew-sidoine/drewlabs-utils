
// Collect the values of a stream into an array
export const ListCollector = <T>(value: Generator<T, void>) =>
  Array.from(value);
