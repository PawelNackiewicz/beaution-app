import { Task, useApp } from "@/AppContext";
import { Check, CheckIcon, PenIcon, TrashIcon, XIcon } from "lucide-react";
import { useState } from "react";

type TodoItemProps = {
  task: Task;
};

export const TodoItem = ({ task }: TodoItemProps) => {
  const { changeStatusCompleded, deleteTask, updateTask } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);

  const handleSave = () => {
    updateTask(task.id, editText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  return (
    <li className="flex items-center mb-2 w-full justify-between">
      <div className="flex items-center">
        <div
          onClick={() => changeStatusCompleded(task.id, !task.completed)}
          className={`cursor-pointer w-5 h-5 border rounded-md mr-2 flex items-center justify-center ${
            task.completed ? "bg-primary border-primary" : "border-gray-300"
          }`}
        >
          {task.completed && <Check size={18} className="text-white" />}
        </div>
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 text-gray-700 focus:outline-none focus:border-primary"
          />
        ) : (
          <span className={task.completed ? "text-primary" : "text-gray-700"}>
            {task.text}
          </span>
        )}
      </div>
      <div className="flex gap-1">
        {isEditing ? (
          <>
            <CheckIcon
              size={18}
              className="cursor-pointer text-green-500"
              onClick={handleSave}
            />
            <XIcon
              size={18}
              className="cursor-pointer text-red-500"
              onClick={handleCancel}
            />
          </>
        ) : (
          <>
            <PenIcon
              size={18}
              className="cursor-pointer"
              onClick={() => setIsEditing(true)}
            />
            <TrashIcon
              size={18}
              className="text-red-500 cursor-pointer"
              onClick={() => deleteTask(task.id)}
            />
          </>
        )}
      </div>
    </li>
  );
};
