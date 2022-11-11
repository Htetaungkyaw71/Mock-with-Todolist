/* eslint-disable import/no-mutable-exports */
let localStorage = {};

beforeAll(() => {
  global.Storage.prototype.setItem = jest.fn((key, value) => {
    localStorage[key] = value;
  });
  global.Storage.prototype.getItem = jest.fn((key) => localStorage[key]);
});

beforeEach(() => {
  localStorage = {};
});

afterAll(() => {
  global.Storage.prototype.setItem.mockReset();
  global.Storage.prototype.getItem.mockReset();
});

export default localStorage;
