import type { ReactElement } from "react";
import { Link } from "@react-md/link";
import { TextContainer, Typography } from "@react-md/typography";

import styles from "./index.module.scss";

export default function Home(): ReactElement {
  return (
    <TextContainer className={styles.container}>
      <Typography type="headline-2" margin="none">
        Hello,
      </Typography>
      <Typography type="headline-4" component="p">
        This page is empty since I haven&apos;t really made this site yet. You
        can check out my <Link href="https://github.com/mlaursen">GitHub</Link>{" "}
        for some more information about projects I work on.
      </Typography>
    </TextContainer>
  );
}
