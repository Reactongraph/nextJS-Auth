import * as React from "react";
import type { Metadata } from "next";
import RouterLink from "next/link";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { config } from "@/config";
import { paths } from "@/paths";
import {
  CCBox,
  CStack,
  CenterTextTypography,
} from "@/components/styled/styled";

export const metadata = {
  title: `Terms | ${config.site.name}`,
} satisfies Metadata;

export default function NotFound(): React.JSX.Element {
  return (
    <CCBox>
      <CStack spacing={3}>
        <CenterTextTypography variant="h3">
          No terms and conditions!
        </CenterTextTypography>
        <Button
          component={RouterLink}
          href={paths.common.home}
          startIcon={<ArrowBackIcon />}
          variant="contained"
        >
          Go back to home
        </Button>
      </CStack>
    </CCBox>
  );
}
