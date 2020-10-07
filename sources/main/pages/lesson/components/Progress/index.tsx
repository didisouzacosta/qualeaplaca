import React from "react";

import { InfosContainer, Label, Progress, ProgressContainer } from "./styles";

type Props = {
  percentage: Number;
};

const ProgressBar = ({ percentage }: Props) => {
  return (
    <>
      <InfosContainer>
        <Label>5/10</Label>
        <Label>50%</Label>
      </InfosContainer>
      <ProgressContainer>
        <Progress percentage={percentage} />
      </ProgressContainer>
    </>
  );
};

export default ProgressBar;
