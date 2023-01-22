const TodoItem = (props) => {
  return (
    <div>
      <p>{props.text}</p>
      <p>isCompleted : {props.completed ? 'true' : 'false'}</p>
    </div>
  );
};

export default TodoItem;
