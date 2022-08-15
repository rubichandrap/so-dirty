import styles from './todo-item.module.css';

/* eslint-disable-next-line */
export interface TodoItemProps {}

export function TodoItem(props: TodoItemProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to TodoItem!</h1>
    </div>
  );
}

export default TodoItem;
