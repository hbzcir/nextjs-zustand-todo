import useStates from '../hooks/useStates';

const Myinfo = () => {
  const [states, setStates] = useStates({
    name: 'mopsy',
    email: 'mopsyshin@gmail.com',
    gender: 'male',
  });

  const changeInfo = () => {
    setStates('name', 'niki');
    setStates('email', 'niki@gmail.com');
    setStates('gender', 'female');
  };

  return (
    <div>
      <p>name: {states.name}</p>
      <p>email: {states.email}</p>
      <p>gender: {states.gender}</p>
      <button onClick={changeInfo}>change info</button>
    </div>
  );
};

export default Myinfo;
