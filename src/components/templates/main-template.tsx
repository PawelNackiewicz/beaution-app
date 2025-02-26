import { AddNewItemForm } from "../add-new-item-form";
import { TodoList } from "../todo-list";

export const MainTemplate = () => {
  return (
    <div className="w-[285px] flex flex-col gap-4">
      <AddNewItemForm />
      <TodoList />
    </div>
  );
};
