"use client";
import React, { useState, useRef } from "react"; // Client-side component
import { Box, TextField, FormControlLabel, Switch } from "@mui/material"; // Material-UI components
import FormSubmit from "./formsubmit"; // Custom form submit button component
import HandleSubmit from "@/library/actions"; // Server action handler
import { useMutation, useQueryClient } from "@tanstack/react-query"; // React Query for data fetching and mutations
import { ProjectModelType } from "@/models/project"; // Type definition for Project model
import { FormState } from "@/types/types"; // Type definition for form state
import FormMessage from "./formmessage"; // Custom component to display form messages (success/error)
/**
 * AddProject Component
 * This component renders a form to add a new project. It uses React Query for handling form submission and state management.
 * The form includes fields for project name, description, and an active/dormant switch. Upon submission, it sends the data to the server and handles responses accordingly.
 * The component also manages form errors and displays appropriate messages based on the server response.
 * Note: The server action is handled by the `HandleSubmit` function, which is expected to return a structured response containing any errors or success messages. The form state is initialized with default values and updated based on the server response.
 * The component is designed to be reusable and can be easily integrated into a larger application where project management is required.
 */
// Initial form state
const initialState: FormState = {
  message: "",
  errors: {},
  isError: false,
};
// Server Form Action
async function projectServerAction(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  const formDataEntries: FormState = (await HandleSubmit(
    prevState,
    formData,
  )) || {
    message: "",
    errors: {},
    isError: false,
  };
  return formDataEntries;
}
// AddProject Component
const AddProject: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null); // Ref for the form element
  const [errors, setErrors] = useState<FormState["errors"]>({}); // State to manage form errors
  const [isSubmitting, setIsSubmitting] = useState(false); // State to manage form submission status
  const [isActive, setIsActive] = useState(true); // State to manage the active/dormant switch
  const queryClient = useQueryClient(); // React Query client for managing query cache Tanstack React Query mutation for handling form submission
  const projectMutation = useMutation({
    // Tanstack React Query mutation function to handle form submission
    mutationFn: async (formData: FormData) => {
      return await projectServerAction(initialState, formData);
    },
    mutationKey: ["projects"],
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["projects"] }); // Cancel any outgoing refetches to avoid overwriting optimistic updates
      const previousGroups = queryClient.getQueryData<ProjectModelType[]>([
        "projects",
      ]); // Snapshot the previous value
      return { previousGroups }; // Return context with the previous value to rollback in case of error
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["projects"] }); // Invalidate and refetch projects query to get the updated list after successful mutation
    },
    onError: (_error, _newFormData, context) => {
      queryClient.setQueryData(["projects"], context?.previousGroups); // Rollback to the previous value in case of error
      console.error("Error creating project"); // Log the error for debugging purposes
    },
  });

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (isSubmitting) return; // Prevent multiple submissions while the current submission is in progress
    setIsSubmitting(true); // Set the submitting state to true to indicate that the form is being submitted
    const formData = new FormData(event.currentTarget); // Create a new FormData object from the form element
    formData.set("type", "project"); // Set the type field in the FormData to "project" to indicate the type of data being submitted
    formData.set("active", isActive ? "on" : "off"); // Set the active field in the FormData based on the state of the active/dormant switch
    // Log the form data entries for debugging purposes
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`); // Log each key-value pair in the FormData to the console for debugging purposes
    }
    // Try to submit the form data using the mutation function and handle any errors that may occur during submission
    try {
      await projectMutation.mutateAsync(formData); // Trigger the mutation to submit the form data to the server and handle the response
    } catch (error) {
      console.error("Error submitting form:", error); // Log any errors that occur during form submission for debugging purposes
    } finally {
      setIsSubmitting(false); // Reset the submitting state to false after the mutation is complete, regardless of success or error
      formRef.current?.reset(); // Reset the form fields to their initial values after submission
      setIsActive(true); // Reset the active/dormant switch to its default state (active) after submission
    }
  };
  // Effect to update errors state when the mutation response changes
  React.useEffect(() => {
    if (projectMutation.data?.errors) {
      setErrors({ ...projectMutation.data.errors }); // Update the errors state with the errors returned from the server if there are any
    }
  }, [projectMutation.data]); // Dependency array to trigger the effect whenever the mutation response data changes
  // Function to get the error message for a specific form field from the errors state, handling both string and array formats of error messages
  const getFieldError = (field: string): string => {
    const v = (errors as Record<string, unknown>)?.[field]; // Get the error message for a specific field from the errors state
    if (Array.isArray(v)) return String(v[0] ?? ""); // If the error message is an array, return the first element as a string, or an empty string if the array is empty
    return typeof v === "string" ? v : ""; // If the error message is a string, return it; otherwise, return an empty string
  };
  // Render the form for adding a new project, including fields for project name, description, and an active/dormant switch, along with error handling and submission feedback
  return (
    <section className="mt-6 p-6 border border-zinc-700 rounded-md">
      <h3 className="text-sm pb-2 font-semibold">Add a New Project</h3>

      <Box
        component="form"
        className="w-full max-w-xs"
        onSubmit={handleSubmit}
        ref={formRef}
        noValidate
      >
        <TextField
          required
          fullWidth
          margin="normal"
          label="Project Name"
          name="title"
          type="text"
          error={!!getFieldError("title")}
          helperText={
            getFieldError("title") || "Enter a unique title for the project"
          }
        />

        <TextField
          fullWidth
          margin="normal"
          multiline
          minRows={3}
          label="Project Description"
          name="description"
          error={!!getFieldError("description")}
          helperText={getFieldError("description")}
        />

        <FormControlLabel
          control={
            <Switch
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              color="primary"
            />
          }
          label={isActive ? "Active" : "Dormant"}
        />

        <FormSubmit />
        <FormMessage message={projectMutation} />
      </Box>
    </section>
  );
};

export default AddProject;
