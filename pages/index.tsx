import React, { useState } from 'react';
import Head from 'next/head';
import TodoItem from '../components/TodoItem/TodoItem';
import styled from 'styled-components';
//import Input from '../components/Input';
// import Button from '../components/Button';

export type TodoT = { //export type은 타입 문맥에 사용할 export만 제공하며, 이 또한 TypeScript의 출력물에서 제거.
  id: string,
  text: String,
  completed: boolean,
};

export default function Home() {
  const [todos, setTodos] = useState<TodoT[]>([]);
  const [newInput, setNewInput] = useState<string>('');
  const testLog = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.dir(e.target.value);
  }
  const onChangeInput = () => {

  }
  const addTodo = () => {
    const newTodo: TodoT = {
      text: newInput,
      id: (Math.floor(Math.random() * (100 - 1 + 1)) + 1).toString(),
      completed: false,
    };
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  }
  
  return (
    <>
      <Head>
        <title>Simple Todo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Todo>
          <Title>Simple Todo</Title>
          {
            todos?.map(todo => ( 
              <p key={todo.id}>{todo.text}</p>
            // <TodoItem key={todo.id} id={todo.id} text={todo.text} completed={todo.completed} />
            ))
          }
          <input type="text" value={newInput} onChange={(e) => {setNewInput(e.target.value)}} />
          <button onClick={addTodo}>등록</button>
          {/* <Input value={newInput} onChange={(e: any) => {setNewInput(e.target.value)}} /> */}
          {/* <Button onClick={addTodo}>등록 실행 불가 </Button> */}
       
        </Todo>
      </Container>
    </>
  );
}

const Title = styled.h1`
  margin: 0;
  padding: 0;
  border-radius: 30px;
  padding: 25px 15px;
`;
const Todo = styled.div`
  min-width: 280px;
  margin: 10px 0;
  width: 447px;
  height: 522px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;
const Container = styled.main`
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 25px;
`;

