import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { toggleCompleted } from "../store/features/todos/todosSlice";
import Task from "../types/Task";

const TodoList: FC = (): JSX.Element => {
    const [completedCounter, setCompletedCounter] = useState<number>(0);
    const tasks: Task[] = useSelector((state: RootState) => state.todos.tasks);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {tasks.map(task => 
                    <li key={task.id}>
                        {`${task.id} ${task.text} ${task.completed}`}
                        <button onClick={() => handleToggle(task.id)}>V</button>
                    </li>
                    
                )}
            </ul>
        </div>
    )
};

export default TodoList;