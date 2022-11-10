/* eslint-disable no-restricted-syntax */
/**
 * @jest-environment jsdom
 */
import {
  add, remove, edit, completeAll,
} from '../script.js';
import { checking } from '../complete.js';

let tasks;

// Testing For Add function

describe('Adding task to localStorage', () => {
  test('Test for add function', () => {
    const task = {
      id: 1,
      description: 'good',
      complete: false,
    };
    add(task);
    tasks = JSON.parse(localStorage.tasks);
    expect(tasks.length).toBe(1);
    expect(tasks[0].description).toBe('good');
  });

  test('Test for add function', () => {
    const task = {
      id: 2,
      description: 'bad',
      complete: false,
    };
    add(task);
    tasks = JSON.parse(localStorage.tasks);
    expect(tasks.length).toBe(2);
    expect(tasks[1].description).toBe('bad');
  });

  test('Test for add function', () => {
    const task = {
      id: 3,
      description: 'happy',
      complete: false,
    };
    add(task);
    tasks = JSON.parse(localStorage.tasks);
    expect(tasks.length).toBe(3);
    expect(tasks[2].description).toBe('happy');
  });
});

// Testing For Render Dom

test('Testing render function', () => {

});

// Testing For Edit function

describe('Editing task from localStorage', () => {
  test('Test for edit function', () => {
    tasks = JSON.parse(localStorage.tasks);
    const { id } = tasks[0];
    const task = {
      id: 1,
      index: 1,
      description: 'edit_good',
      complete: false,
    };
    edit(id, task);
    tasks = JSON.parse(localStorage.tasks);
    expect(task).not.toBeNull();
    expect(tasks.length).toBe(3);
    expect(tasks[0].description).toBe('edit_good');
  });
});

// Testing For complete status function

describe('Check item complete status', () => {
  test('Test for checking function', () => {
    const task = tasks[0];
    const value = !task.complete;
    checking(value, task.id);
    tasks = JSON.parse(localStorage.tasks);
    expect(tasks.length).toBe(3);
    expect(tasks[0].complete).toBe(value);
  });
});

// Testing For Completed all function

describe('Delete completed tasks', () => {
  test('Test for checking function', () => {
    completeAll();
    tasks = JSON.parse(localStorage.tasks);
    for (const task of tasks) {
      expect(task.complete).toBe(false);
    }
  });
});

// Testing For Delete function

describe('Deleting task from localStorage', () => {
  test('Test for delete function', () => {
    const { id } = tasks[1];
    remove(id);
    tasks = JSON.parse(localStorage.tasks);
    expect(tasks.length).toBe(1);
  });
  test('Test for delete function', () => {
    const { id } = tasks[0];
    remove(id);
    tasks = JSON.parse(localStorage.tasks);
    expect(tasks.length).toBe(0);
  });
});