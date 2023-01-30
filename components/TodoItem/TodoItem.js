import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import styled from 'styled-components';
import { Flex } from '..';
import Button from '../Button';
import Input from '../Input';

const TodoItem = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [editInput, setEditInput] = useState(props.text);

  const toggleEdit = () => {
    setEditMode(!editMode);
  };

  const editComplete = () => {
    props.onEditComplete(props.id, editInput);
    //마지막에
    toggleEdit();
  };

  return (
    <Style completed={props.completed} j="space-between" a="center">
      {!editMode ? (
        <>
          <Flex a="center" g="10px">
            <CheckCircleOutlined
              className={'checkCircle'}
              onClick={() => props.onCompletedClick(props.id)}
            />
            <p>{props.text}</p>
          </Flex>
          <Flex a="center" g="10px">
            <EditOutlined onClick={toggleEdit} />
            <DeleteOutlined />
          </Flex>
        </>
      ) : (
        <>
          <Input
            value={editInput}
            onChange={(e) => {
              setEditInput(e.target.value);
            }}
          />
          <Button onClick={editComplete}>Done</Button>
        </>
      )}
    </Style>
  );
};

const Style = styled(Flex)`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 9px 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
  margin-bottom: 8px;
  border-radius: 4px;
  .checkCircle {
    color: ${(prop) => (prop.completed ? 'blue' : 'red')};
  }
`;

export default TodoItem;
