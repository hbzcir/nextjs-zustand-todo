import { TodoT } from 'pages/index';

const TodoItem = (props: TodoT) => {
  return (<p>{props.text}</p>)
};


export default TodoItem;
