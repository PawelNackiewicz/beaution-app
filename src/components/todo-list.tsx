import { useState } from "react";
import { useApp } from "@/AppContext";
import { Button } from "./ui/button";
import { TodoItem } from "./todo-item";

type FilterBy = "all" | "completed" | "active";

export const TodoList = () => {
  const { tasks } = useApp();
  const [filterBy, setFilterBy] = useState<FilterBy>("all");
  const filteredTasks = tasks.filter((task) => {
    if (filterBy === "all") return true;
    if (filterBy === "completed") return task.completed;
    if (filterBy === "active") return !task.completed;
    return true;
  });
  const buttonVariant = (filter: FilterBy) =>
    filter === filterBy ? "default" : "outline";

  return (
    <>
      <div className="flex justify-between flex-row gap-4">
        <Button
          onClick={() => setFilterBy("all")}
          variant={buttonVariant("all")}
        >
          All
        </Button>
        <Button
          onClick={() => setFilterBy("completed")}
          variant={buttonVariant("completed")}
        >
          Completed
        </Button>
        <Button
          onClick={() => setFilterBy("active")}
          variant={buttonVariant("active")}
        >
          Active
        </Button>
      </div>
      <div className="border rounded-lg p-4 font-medium">
        <ul>
          {filteredTasks.map((task) => (
            <TodoItem key={task.id} task={task} />
          ))}
        </ul>
      </div>
    </>
  );
};
