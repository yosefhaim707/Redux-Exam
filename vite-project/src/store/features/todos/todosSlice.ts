import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Task from "../../../types/Task";

interface TodoState {
    tasks: Task[];
};

const initialState: TodoState = {
    tasks: [
        { id: 1, text: "Task 1", completed: false },
        { id: 2, text: "Task 2", completed: false },
        { id: 3, text: "Task 3", completed: false },
        { id: 4, text: "Task 4", completed: false }
    ],
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        toggleCompleted: (state, action: PayloadAction<number>): void => {
            const selectedTask: Task | undefined = state.tasks.find(task => task.id == action.payload);

            if (selectedTask) {

                selectedTask.completed ? selectedTask.completed = false : selectedTask.completed = true;
            }

        }
    }
})