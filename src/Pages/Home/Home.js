import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editTask, filterTasks } from "../../store";
import { ToDoTable } from "../../Components/ToDoTable/ToDoTable";
import { CompletedTable } from "../../Components/CompletedTable";
import styles from "./styles.module.scss";

const Home = () => {
  const dispatch = useDispatch();

  const onAddTaskClick = () => {
    dispatch(editTask({}));
  };

  const completedTaskId = useSelector((state) => state.completedTaskId);

  const onFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <>
      <div className={styles.home}>
        <div className={styles.header_title}>ToDo List</div>
        <div className={styles.filter_container}>
          <div className={styles.filter_title}>Search:</div>
          <input onChange={onFilterChange} className={styles.filter}></input>
        </div>

        <ToDoTable />

        <Link to="/to-do-list/create-task">
          <button onClick={onAddTaskClick} className={styles.add_button}>
            Add a new Task!
          </button>
        </Link>
      </div>
      <div className={styles.completed_header}>Completed List</div>
      <CompletedTable />
    </>
  );
};

export { Home };
