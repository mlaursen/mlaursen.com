import { describe, expect, it } from "@jest/globals";
import { rmdRender } from "@react-md/core/test-utils";
import Page from "../page.js";

describe("HomePage", () => {
  it("should render correctly", () => {
    const { container } = rmdRender(<Page />);

    expect(container).toMatchSnapshot();
  });
});
