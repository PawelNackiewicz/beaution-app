import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { MainTemplate } from "./main-template";

const addTaskMock = vi.fn();

vi.mock("@/AppContext", () => ({
  useApp: () => ({
    addTask: addTaskMock,
    tasks: [
      { id: 1, text: "Prepare dinner", completed: true },
      { id: 2, text: "Buy bread", completed: false },
      { id: 3, text: 'Watch "The Lion King"', completed: false },
      { id: 4, text: "Gym", completed: false },
    ],
  }),
}));

describe("MainTemplate", () => {
  beforeEach(() => {
    render(<MainTemplate />);
  });

  it("should render AddNewItemForm", () => {
    expect(screen.getByPlaceholderText("New task input")).toBeInTheDocument();
  });

  it("should render TodoList", () => {
    expect(screen.getByText("Prepare dinner")).toBeInTheDocument();
    expect(screen.getByText("Buy bread")).toBeInTheDocument();
    expect(screen.getByText('Watch "The Lion King"')).toBeInTheDocument();
    expect(screen.getByText("Gym")).toBeInTheDocument();
  });

  it('should render only completed tasks when "Completed" button is clicked', async () => {
    const completedBtn = screen.getByRole("button", { name: /completed/i });
    await userEvent.click(completedBtn);
    expect(screen.getByText("Prepare dinner")).toBeInTheDocument();
    expect(screen.queryByText("Buy bread")).not.toBeInTheDocument();
    expect(screen.queryByText('Watch "The Lion King"')).not.toBeInTheDocument();
    expect(screen.queryByText("Gym")).not.toBeInTheDocument();
  });

  it('should render only active tasks when "Active" button is clicked', async () => {
    const activeBtn = screen.getByRole("button", { name: /active/i });
    await userEvent.click(activeBtn);
    expect(screen.queryByText("Prepare dinner")).not.toBeInTheDocument();
    expect(screen.queryByText("Buy bread")).toBeInTheDocument();
    expect(screen.queryByText('Watch "The Lion King"')).toBeInTheDocument();
    expect(screen.queryByText("Gym")).toBeInTheDocument();
  });

  it('should render all tasks when "All" button is clicked', async () => {
    const activeBtn = screen.getByRole("button", { name: /active/i });
    await userEvent.click(activeBtn);
    const allBtn = screen.getByRole("button", { name: /all/i });
    await userEvent.click(allBtn);
    expect(screen.getByText("Prepare dinner")).toBeInTheDocument();
    expect(screen.getByText("Buy bread")).toBeInTheDocument();
    expect(screen.getByText('Watch "The Lion King"')).toBeInTheDocument();
    expect(screen.getByText("Gym")).toBeInTheDocument();
  });

  it("should call addTask when form is submitted", async () => {
    const input = screen.getByPlaceholderText("New task input");
    const submitBtn = screen.getByTestId("submitBtn");
    await userEvent.clear(input);
    await userEvent.type(input, "New task");
    await userEvent.click(submitBtn);
    expect(addTaskMock).toHaveBeenCalledWith("New task");
  });

  it("sholud display error message when title is less than 3 characters", async () => {
    const input = screen.getByPlaceholderText("New task input");
    const submitBtn = screen.getByTestId("submitBtn");
    await userEvent.clear(input);
    await userEvent.type(input, "Ne");
    await userEvent.click(submitBtn);
    expect(
      screen.getByText("Title must be at least 3 characters long")
    ).toBeInTheDocument();
  });

  it("sholud display error message when title is more than 20 characters", async () => {
    const input = screen.getByPlaceholderText("New task input");
    const submitBtn = screen.getByTestId("submitBtn");
    await userEvent.clear(input);
    await userEvent.type(input, "New task is more than 20 characters");
    await userEvent.click(submitBtn);
    expect(
      screen.getByText("Title must be at most 20 characters long")
    ).toBeInTheDocument();
  });
});
