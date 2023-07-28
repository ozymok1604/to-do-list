import { Task } from "../Task/Task";

import styles from "./styles.module.scss";

const CompletedTable = () => {
  const completedTasks = JSON.parse(
    localStorage.getItem("completedTasks") || "[]"
  );

  return (
    <div className={styles.table}>
      <div className={styles.table_fields}>
        <div>#</div>
        <div>Title</div>
        <div>Description</div>
        <div>Due date</div>
        <div>Status</div>
      </div>
      {completedTasks.map((task, index) => {
        return <Task index={index} task={task} isCompleted={true} />;
      })}
    </div>
  );
};

export { CompletedTable };
