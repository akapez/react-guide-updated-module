import Card from './Card';
import useCounter from '../hooks/useCounter';

const ForwardCounter = () => {
  const counter = useCounter();  
  return <Card>{counter}</Card>;
};

export default ForwardCounter;