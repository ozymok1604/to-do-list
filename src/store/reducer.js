import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTER_TASKS,
} from "../actionTypes";

const initialState = {
  task: {},
  deletedTaskId: "",
  editedTask: {},
  completedTaskId: "",
};

export const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: (state.task = action.task),
      };
    case DELETE_TASK:
      return {
        ...state,
        deletedTaskId: (state.deletedTaskId = action.deletedTaskId),
      };

    case EDIT_TASK:
      return {
        ...state,
        editedTask: (state.editedTask = action.editedTask),
      };

    case COMPLETE_TASK:
      return {
        ...state,
        completedTaskId: (state.completedTaskId = action.completedTaskId),
      };

    case FILTER_TASKS:
      return {
        ...state,
        filterValue: (state.filterValue = action.filterValue),
      };

    default:
      return state;
  }
};
