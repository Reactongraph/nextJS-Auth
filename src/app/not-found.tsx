import * as React from "react";
import type { Metadata } from "next";
import RouterLink from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { config } from "@/config";
import { paths } from "@/paths";
import {
  CCBox,
  CStack,
  CenterTextTypography,
} from "@/components/styled/styled";
import Image from "next/image";

export const metadata = {
  title: `Not found | ${config.site.name}`,
} satisfies Metadata;

export default function NotFound(): React.JSX.Element {
  return (
    <CCBox>
      <CStack spacing={3}>
        <Box>
          <Image
            alt="Under development"
            src="/assets/error-404.png"
            width={100}
            height={100}
          />
        </Box>
        <CenterTextTypography variant="h3">
          404: The page you are looking for isn&apos;t here
        </CenterTextTypography>
        <CenterTextTypography color="text.secondary" variant="body1">
          You either tried some shady route or you came here by mistake.
          Whichever it is, try using the navigation
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
