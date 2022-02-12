import { Stream, ListCollector } from '../dist';

describe('Stream class', () => {
  it('should expect Stream.iterate() to create a list of 10 integers', () => {
    const result = Stream.iterate(0, state => state + 1)
      .take(10)
      .collect(ListCollector);
    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
