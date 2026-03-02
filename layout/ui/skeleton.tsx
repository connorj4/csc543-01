'use client';
import React from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const SkeletonUI: React.FC = () => {
  return (
    <Box className={"skeleton-box"}>
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
};

export default SkeletonUI;
