import consoling from "./app";

test('1 test', () => {
  expect(consoling('Hey, Hey')).toBe('Your text is: "Hey, Hey"');
})
// test('2 test', () => {
//   expect(consoling(2323)).toThrow()
// })