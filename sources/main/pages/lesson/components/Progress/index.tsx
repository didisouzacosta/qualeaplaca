import React from "react";

import { InfosContainer, Label, Progress, ProgressContainer } from "./styles";

type Props = {
  current: number;
  total: number;
};

const ProgressBar = ({ current, total }: Props) => {
  const percentage = (current / total) * 100;

  return (
    <>
      <InfosContainer>
        <Label>
          {current}/{total}
        </Label>
        <Label>{percentage}%</Label>
      </InfosContainer>
      <ProgressContainer>
        <Progress percentage={percentage} />
      </ProgressContainer>
    </>
  );
};

export default ProgressBar;
