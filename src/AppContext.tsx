import React, { createContext, useContext, useEffect, useState } from "react";

export type Task = {
  id: number;
  text: string;
  completed: boolean;
};

interface AppContextType {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (newTask: string) => void;
  changeStatusCompleded: (
    taskId: Task["id"],
    newStatus: Task["completed"]
  ) => void;
  deleteTask: (taskId: Task["id"]) => void;
  updateTask: (taskId: Task["id"], newText: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const defaultTasks = [
    { id: 1, text: "Prepare dinner", completed: true },
    { id: 2, text: "Buy bread", completed: false },
    { id: 3, text: 'Watch "The Lion King"', completed: false },
    { id: 4, text: "Gym", completed: false },
  ];

  const [tasks, setTasks] = useState<Task[]>(() => {
    const storedTasks = localStorage.getItem("tasks");
    const parsedTasks = storedTasks ? JSON.parse(storedTasks) : null;
    return parsedTasks && parsedTasks.length > 0 ? parsedTasks : defaultTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask: string) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  const changeStatusCompleded = (
    taskId: Task["id"],
    newStatus: Task["completed"]
  ) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: newStatus } : task
      )
    );
  };

  const deleteTask = (taskId: Task["id"]) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTask = (taskId: Task["id"], newText: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <AppContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        changeStatusCompleded,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within the AppProvider");
  return context;
}
