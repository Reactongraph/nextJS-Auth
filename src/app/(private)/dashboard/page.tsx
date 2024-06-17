import * as React from "react";
import type { Metadata } from "next";
import { config } from "@/config";
import {
  CCBox,
  CStack,
  PadGrid,
  CenterTextTypography,
} from "@/components/styled/styled";

export const metadata = {
  title: `Dashboard | ${config.site.name}`,
} satisfies Metadata;

export default function Page(): React.JSX.Element {
  return (
    <CCBox>
      
      <CStack spacing={3}>
      <PadGrid padding="20px">
        <CenterTextTypography variant="h3">
          Welcome to the dashboard
        </CenterTextTypography>
      </PadGrid>
      </CStack>
    </CCBox>
  );
}
