"use server";
import BASE_URL from '@/utils/baseURL';
import xss from 'xss';
/* 
    * used to prevent xss attacks
    * 
    * This function takes a FormData object as input and sanitizes its values to prevent cross-site scripting (XSS) attacks. It iterates through the form data entries, sanitizes each value using the xss library, and constructs a new object with the sanitized values. Special handling is implemented for tags, which are stored as an array. The function also removes any empty values from the resulting object before returning it. This sanitized data can then be safely used in API requests or other operations without risking XSS vulnerabilities.
    * 
    * @param {FormData} formData - The FormData object containing the form data to be sanitized.
    * @returns {Record<string, string | string[] | boolean | undefined>} An object containing the sanitized form data, where each key corresponds to a form field and the value is the sanitized input. The values can be strings, arrays of strings (for tags), booleans, or undefined if the field is empty or not provided.
    * @example
    * const formData = new FormData();
    * formData.set('title', '<script>alert("XSS")</script>');
    * formData.set('tags', ['<b>bold</b>', '<i>italic</i>']);
    * const sanitizedData = sanitizeFormData(formData);
    * console.log(sanitizedData);
    * // Output: { title: '&lt;script&gt;alert("XSS")&lt;/script&gt;', tags: ['&lt;b&gt;bold&lt;/b&gt;', '&lt;i&gt;italic&lt;/i&gt;'] } 
    */

// Function to sanitize form data to prevent XSS attacks
const sanitizeFormData = (formData: FormData): Record<string, string | string[] | boolean | undefined> => {
    const sanitizedData: Record<string, string | string[] | boolean | undefined> = {};
    const formValues = Object.fromEntries(formData);
    // Special case for tags because they are stored as an array
    const tags = formData.getAll('tags');
    //lets sanitize the form values
    for (const [key, value] of Object.entries(formValues)) {
        // skip the keys that are not needed
        if (Array.isArray(value) || key === 'tags') {
            continue;
        }
        if (value == null) {
            continue;
        }
        const sanitizedValue: string | string[] | boolean | undefined = xss(String(value));
        sanitizedData[key] = sanitizedValue ?? '';
    }
    // special case for tags because they are stored as an array
    if (tags.length > 0) {
        const sanitizedTags: string[] = [];
        for (const tag of tags) {
            if (typeof tag === 'string' && tag.trim() !== '') {
                const sanitizedTag = xss(tag);
                sanitizedTags.push(sanitizedTag);
            }
        }
        sanitizedData['tags'] = sanitizedTags;
    }
    // remove any empty values from the object
    Object.keys(sanitizedData).forEach((key) => {
        if (sanitizedData[key] === '' || sanitizedData[key] === undefined) {
            //console.log('removing key', key, ' sanitizedData[key] ', sanitizedData[key]);
            delete sanitizedData[key];
        }
    });
    return sanitizedData;
}
// Function to handle form submission, including sanitization and API interaction
interface PrevState {
    message: string; // A message to be displayed to the user, such as success or error messages related to the form submission.
    errors: Record<string, string | string[]>; // An object containing any validation errors that occurred during form submission, where each key corresponds to a form field and the value is either a string or an array of strings describing the error(s) for that field.
    isError: boolean; // A boolean flag indicating whether an error occurred during form submission, which can be used to conditionally render error messages or apply error styling in the UI.
}
const HandleSubmit = async (prevState: PrevState, formData: FormData) => {
    const type = await formData.get('type'); // Get the type of data being submitted (e.g., "project", "task", etc.) from the form data to determine the appropriate API endpoint for submission
    if (typeof type !== 'string') {
        throw new Error('Invalid form data: type is required and must be a string'); // Throw an error if the type is not provided or is not a string, as it is essential for determining the API endpoint for submission
    }
    // Remove the type from the form data as it is not needed in the API request body
    formData.delete('type');
    // Sanitize the form data to prevent XSS attacks before sending it to the server
    const formDataEntries = await sanitizeFormData(formData);
    // Log the sanitized form data entries for debugging purposes
    console.log('Sanitized Form Data Entries: ', formDataEntries);
    async function handler(formDataEntries: Record<string, string | boolean | string[] | undefined>) {
        // create a request INIT object
        const reqInit: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formDataEntries),
        };
        // Make the API request to the appropriate endpoint based on the type of data being submitted, using the sanitized form data as the request body
        const res = await fetch(BASE_URL + '/api/' + type, reqInit);
        // Check if the response is not ok (status code is not in the range 200-299) and handle errors accordingly
        if (!res.ok) {
            const whyFail = await res.json();
            const failMessage: string = whyFail.message ? whyFail.message : 'Error: Failed to Save';
            // console.log('Actions Fail Message: ', failMessage);
            // Log the error details for debugging purposes
            const failErrors: Record<string, string | string[]> = whyFail.errors.errors ? (
                Object.keys(whyFail.errors.errors).reduce((acc: Record<string, string | string[]>, key: string) => {
                    const error = whyFail.errors.errors[key];
                    if (error && error.message) {
                        acc[key] = [error.message];
                    }
                    return acc;
                }
                    , {})) : (whyFail.errors ? whyFail.errors : {});
            prevState = { message: failMessage, errors: failErrors, isError: true };
            return prevState;
        }
        // If the response is ok, parse the response body as JSON and return a success message along with any relevant data
        const response = await res.json();
        // Log the successful response for debugging purposes
        console.log('Actions Success Response: ', response);
        if (response.message) {
            return { message: response.message, errors: {}, isError: false };
        }
    }
    return handler(formDataEntries);
};
export default HandleSubmit;