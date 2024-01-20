import { Container, Header, SearchForm, Section, Text } from 'components';
import { TodoList } from 'components/TodoList/TodoList';
import { useDispatch, useSelector } from 'react-redux';
import { selectTodos } from '../../redux/selectors';
import { useEffect } from 'react';
import { getTodos } from '../../redux/operations';

export const App = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();
  useEffect(()=> {
dispatch(getTodos())

  },[dispatch])
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
