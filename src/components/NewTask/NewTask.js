import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/useHttp';

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTasks } = useHttp();

  const createTasks = (taskText, taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText) => {
    sendTasks(
      {
        url: 'https://react-http-4bde7-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: taskText }),
      },
      createTasks.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
