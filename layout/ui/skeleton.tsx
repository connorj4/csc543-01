'use client';
import React from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const SkeletonUI: React.FC<{loading: boolean}> = ({loading}) => {
  const [loadingState, setLoadingState] = React.useState<boolean>(loading);

  React.useEffect(() => {
    setLoadingState(loading);
  }, [loading]);  

  if (!loadingState) {
    return null;
  }
  return (
    <Box className={"skeleton-box"}>
      <Skeleton animation="wave" variant="circular" width={40} height={40} />
      <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
      <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
    </Box>
  );
};

export default SkeletonUI;
