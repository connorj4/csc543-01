"use client";
import React from "react";
import SkeletonUI from "@/layout/ui/skeleton";
/*
 * This is the Loading component, which serves as a placeholder UI while data is being fetched or loaded in the application.
 * It utilizes the SkeletonUI component to display a skeleton screen, providing a visual indication to users that content is loading.
 * The component is designed to be simple and reusable across different parts of the application where loading states are needed.
 */ 
const Loading = () => {
  return (
    <>
      <SkeletonUI loading={true} />
    </>
  );
}

export default Loading;