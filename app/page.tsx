import { Link } from "@react-md/core/Link";
import { Typography } from "@react-md/core/Typography";
import { type ReactElement } from "react";

export default function Page(): ReactElement {
  return (
    <>
      <Typography type="headline-2" as="h1">
        Hello,
      </Typography>
      <Typography type="headline-4" as="p">
        This page is empty since I haven&apos;t really made this site yet. You
        can check out my <Link href="https://github.com/mlaursen">GitHub</Link>{" "}
        for some more information about projects I work on.
      </Typography>
    </>
  );
}
