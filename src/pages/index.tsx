import React, { ReactElement } from "react";
import { Link } from "@react-md/link";
import { TextContainer, Text } from "@react-md/typography";

import styles from "./index.module.scss";

export default function Home(): ReactElement {
  return (
    <TextContainer className={styles.container}>
      <Text type="headline-2" margin="none">
        Hello,
      </Text>
      <Text type="headline-4">
        This page is empty since I haven&apos;t really made this site yet. You
        can check out my <Link href="https://github.com/mlaursen">GitHub</Link>{" "}
        for some more information about projects I work on.
      </Text>
    </TextContainer>
  );
}
