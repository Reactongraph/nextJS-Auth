import CustomButton from "@/components/common/custom-button";
import { paths } from "@/paths";
import { Alert } from "@mui/material";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RouterLink from "next/link";
import { Metadata } from "next";
import { config } from "@/config";
import { verifyEmail } from "@/lib/actions/auth";
import { CCGrid2 } from "@/components/styled/styled";

export const metadata = {
  title: `Email verified | ${config.site.name}`,
} satisfies Metadata;

const EmailVerified = async ({
  searchParams,
}: {
  searchParams: { code: string };
}) => {
  if (!searchParams?.code) {
    redirect(paths.common.home);
  }

  let verifyResponse: any = await verifyEmail({ code: searchParams.code });
  verifyResponse = JSON.parse(verifyResponse);
  if (!verifyResponse.status) {
    redirect(paths.common.home);
  }

  return (
    <CCGrid2>
      <Image
        src="/assets/success.png"
        alt="success image"
        height={200}
        width={200}
      />
      <Alert color="success">Email verified successfully.</Alert>
      <CustomButton
        variant="outlined"
        component={RouterLink}
        href={paths.public.signIn}
        endIcon={<ArrowForwardIcon />}
      >
        Login
      </CustomButton>
    </CCGrid2>
  );
};

export default EmailVerified;
