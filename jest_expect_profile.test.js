import { performance } from 'perf_hooks';

const RUN_SIZE = 2000;

it('expect takes longer than expected', () => {
  const t0 = performance.now();
  for (let i = 0; i < RUN_SIZE; i += 1) {
    expect(i).toBe(i);
  }
  console.log(`Total time: ${performance.now() - t0} ms`);
});

it('wraping in a conditional is much quicker', () => {
  const t0 = performance.now();
  for (let i = 0; i < RUN_SIZE; i += 1) {
    if (i === RUN_SIZE) {
      expect(i).toBe(i);
    }
  }
  console.log(`Total time: ${performance.now() - t0} ms`);
});