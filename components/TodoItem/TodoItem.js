import {
  CheckCircleOutlined,
  DeleteOutlined,
  EditOutlined,
} from '@ant-design/icons';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '..';

const TodoItem = (props) => {
  return (
    <Style completed={props.completed} a="center" g="8px" j="space-between">
      <Flex a="center">
        <CheckCircleOutlined
          className="check-circle"
          onClick={() => props.onCompleteClick(props.id)}
        />
        <p>{props.text}</p>
      </Flex>
      <Flex a="center" g="8px">
        <EditOutlined />
        <DeleteOutlined />
      </Flex>
    </Style>
  );
};

TodoItem.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  completed: PropTypes.bool,
  onCompleteClick: PropTypes.func,
};

const Style = styled(Flex)`
  height: 40px;
  padding: 0 8px;
  box-shadow: 1px 4px 16px rgba(0, 0, 0, 0.08);
  .check-circle {
    font-size: 24px;
    color: ${(props) => (props.completed ? 'blue' : 'lightgray')};
  }
`;

export default TodoItem;
