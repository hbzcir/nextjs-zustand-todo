import React, { useCallback, useEffect, useMemo, useState } from 'react';
import uniqid from 'uniqid';

const dummyTodos = [
  {
    text: 'dummy1',
    id: uniqid(),
    completed: false,
  },
  {
    text: 'dummy2',
    id: uniqid(),
    completed: false,
  },
  {
    text: 'dummy3',
    id: uniqid(),
    completed: false,
  },
  {
    text: 'dummy4',
    id: uniqid(),
    completed: true,
  },
];

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [newInput, setNewInput] = useState('');

  const addTodo = () => {
    const newTodo = {
      text: newInput,
      id: uniqid(),
      completed: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };

  const fetchData = async () => {
    setTodos(dummyTodos);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return {
    todos,
    newInput,
    setNewInput,
    addTodo,
  };
};

export default useTodos;
