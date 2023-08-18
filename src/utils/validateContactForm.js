
export const validateContactForm = (values) => {  //The Formik library handles sending this forms parameters into (values) as an object.//
    const errors = {};

    if (!values.firstName) {  //All of the form fields are passed into this function as properties of the values object//
        errors.firstName = 'Required'; //creates the firstName property for the errors object by assigning it here.//
    } else if (values.firstName.length < 2) { 
        errors.firstName = 'Must be at least 2 characters.';
    } else if (values.firstName.length > 15) {
        errors.firstName = 'Must be 15 characters or less';
    }

    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) { 
        errors.lastName = 'Must be at least 2 characters.';
    } else if (values.lastName.length > 15) {
        errors.lastName = 'Must be 15 characters or less';
    }

    const reg = /^\d+$/;

    if (!reg.test(values.phoneNum)) {
        errors.phoneNum = 'The phone number should only contain numbers.';
    }

    if (!values.email.includes('@')) {
        errors.email = 'Email should contain a @';
    }

    return errors;
};