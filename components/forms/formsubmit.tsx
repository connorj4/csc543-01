"use client"; // This component is a client-side component, as it uses React hooks and state management.
import React from "react"; // Importing React for creating the component and using hooks
import { useFormStatus } from "react-dom"; // Importing useFormStatus hook to manage form submission status
import Button from "@mui/material/Button"; // Importing Button component from Material-UI for styling the submit button

/*
 * FormSubmit component renders a submit button for a form.
 * It uses the useFormStatus hook to determine if the form is currently being submitted (pending).
 * The button is disabled while the form is pending to prevent multiple submissions.
 * The button text changes to "Submitting..." when the form is pending, and reverts to "Submit" when not pending.
 */

const FormSubmit: React.FC = () => {
  const { pending } = useFormStatus(); // Using useFormStatus hook to get the pending status of the form submission
  return (
    <Button disabled={pending} type="submit" color="primary" variant="contained">
      {/* Change button text based on the pending status of the form submission */}
      {pending ? "Submitting..." : "Submit"}
    </Button>
  );
};

export default FormSubmit;
