import { test, expect } from "@playwright/test";

test("should render correctly", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: "Hello," })).toBeVisible();
  await expect(
    page.getByText(
      /^This page is empty since I haven't really made this site yet\. You can check out my /
    )
  ).toBeVisible();
  await expect(
    page.getByText(/for some more information about projects I work on\.$/)
  ).toBeVisible();

  const githubLink = page.getByRole("link", { name: "GitHub" });
  await expect(githubLink).toBeVisible();
  expect(await githubLink.getAttribute("href")).toBe(
    "https://github.com/mlaursen"
  );
});
