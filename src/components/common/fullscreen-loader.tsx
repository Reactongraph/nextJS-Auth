import { Typography } from "@mui/material";
import { BeatLoader } from "react-spinners";
import {
  FullScreenLoaderContainer,
  AlignJustifyCenter,
} from "../styled/styled";

const FullscreenLoader = ({ title = "" }: { title: string }) => {
  return (
    <FullScreenLoaderContainer>
      <AlignJustifyCenter>
        <BeatLoader size={50} color="grey" />
      </AlignJustifyCenter>

      <Typography variant="h6">{title}</Typography>
    </FullScreenLoaderContainer>
  );
};

export default FullscreenLoader;
