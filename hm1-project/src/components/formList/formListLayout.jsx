import styles from './formList.module.css';
import { ContainerButtonsOfList } from '../buttons/containerOfButtonsOfList';

export const FormListLayout = ({
  isLoading,
  isError,
  editingTodo,
  updateTodo,
  updateTodoId,
  setUpdateTodo,
  setUpdateTodoId,
  submitUpdateTodo,
  handlerClickUpdate,
  isUpdate,
  handlerClickDelete,
  isDelete,
  filteredTodos
}) => {
  return (
    <>
      <div className={styles.listOfTodos}>
        {isLoading && <h1>ЗАГРУЗКА...</h1>}
        {isError?.errorStatus && (
          <div className={styles.containerError}>
            <h1 className={styles.error}>{isError.message}</h1>
          </div>
        )}

        {!isLoading &&
          filteredTodos.map(({ id, title }) => {
            const isEditing = updateTodoId === id;

            return (
              <form
                key={id}
                className={styles.todos}
                onSubmit={(event) => editingTodo(event, id)}
              >
                <input
                  className={styles.todo}
                  value={isEditing ? updateTodo : title}
                  onChange={(event) => {
                    if (isEditing) {
              setUpdateTodo(event.target.value);
            }
          }}
                  onFocus={() => {
            if (!isEditing) {
              setUpdateTodoId(id);
              setUpdateTodo(title);
            }
          }}
                  ref={(el) => (submitUpdateTodo.current[id] = el)}
                />
                <ContainerButtonsOfList
                  type="button"
                  disabledUpdate={isUpdate}
                  disabledDelete={isDelete}
                  onClickUpdate={() => handlerClickUpdate(id)}
                  onClickDelete={() => handlerClickDelete(id)}
                  styleDelete={styles.deleteTodo}
                  styleUpdate={styles.updateTodo}
                  styleContainer={styles.buttonTodo}
                  childrenUpdate={'✐'}
                  childrenDelete={'✖'}
                />
              </form>
            );
          })}
      </div>
    </>
  );
};
