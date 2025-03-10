import { test, expect } from "@playwright/test";

test("Blog post nawigation", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByRole("link", { name: "Blog" }).click();

  await page.getByRole("link", { name: "post1" }).click();

  await expect(page.getByText("Hello blog - post1")).toBeVisible();
});
