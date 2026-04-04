'use client';
import React from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
/* * SkeletonUI component renders a skeleton loading state using Material-UI's Skeleton component.
 * It accepts a loading prop to determine whether to display the skeleton or not.
 * When loading is true, it shows a circular skeleton (representing an avatar) and two rectangular skeletons (representing text).
 * When loading is false, it returns null, meaning nothing will be rendered.
 * This component can be used in various parts of the application where a loading state needs to be indicated to the user while data is being fetched or processed.
 */
const SkeletonUI: React.FC<{loading: boolean}> = ({loading}) => {
  const [loadingState, setLoadingState] = React.useState<boolean>(loading); // State to manage the loading status of the component, initialized with the loading prop

  React.useEffect(() => {
    setLoadingState(loading); // Updating the loadingState whenever the loading prop changes
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
