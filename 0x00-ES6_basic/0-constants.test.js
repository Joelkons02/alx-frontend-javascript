// 0-constants.test.js
import { taskFirst, taskNext } from './0-constants.js';

test('taskFirst returns the correct value', () => {
  const expectedValue = 'I prefer const when I can.';
  const actualValue = taskFirst();

  expect(actualValue).toBe(expectedValue);
});

test('taskNext returns the correct value', () => {
  const expectedValue = 'But sometimes let is okay';
  const actualValue = taskNext();

  expect(actualValue).toBe(expectedValue);
});
