import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { completeTask, deleteTask, editTask } from "../../store";
import Delete from "../../assets/delete.svg";
import Edit from "../../assets/edit.svg";
import Completed from "../../assets/success.svg";
import styles from "./styles.module.scss";

const Task = ({ task, index, isCompleted }) => {
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();

  const onDeleteClick = () => {
    dispatch(deleteTask(task.id));
  };

  const onEditClick = () => {
    dispatch(editTask(task));
  };

  const onStatusClick = () => {
    const completedArray = JSON.parse(
      localStorage.getItem("completedTasks") || "[]"
    );
    setCompleted(true);

    dispatch(completeTask(task.id));

    completedArray.push({
      id: task.id,
      title: task.title,
      status: "Completed",
      description: task.description,
      date: task.date,
    });
    window.localStorage.setItem(
      "completedTasks",
      JSON.stringify(completedArray)
    );
  };

  return (
    <div className={styles.task}>
      <div className={styles.number}>{index + 1}</div>
      <div className={styles.title}>{task?.title}</div>
      <div className={styles.description}>{task?.description}</div>
      <div className={styles.date}>{task?.date}</div>

      {isCompleted ? (
        <div className={styles.completed_status}>Completed</div>
      ) : (
        <img
          src={Completed}
          onClick={onStatusClick}
          className={styles.status}
        ></img>
      )}

      {!isCompleted && (
        <>
          <Link to="/to-do-list/create-task">
            <img onClick={onEditClick} className={styles.edit_img} src={Edit} />
          </Link>
          <img
            onClick={onDeleteClick}
            className={styles.delete_img}
            src={Delete}
          />
        </>
      )}
    </div>
  );
};

export { Task };
