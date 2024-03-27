import * as yup from 'yup';

export const validateform = async (userdata) => {
    const getValidationErrors = (error) => {
      const validationErrors = {};
      error.inner.forEach (error => {
        if (error.path) {
          validationErrors[error.path] = error.message;
        }
      });
      return validationErrors;
    };
  
    const schema = yup.object ().shape ({
      first_name: yup.string ().required ('First name is required').nullable (),
      last_name: yup.string ().required ('Last name is required').nullable (),
      password: yup.string ().required ('Password is required').nullable (),
      email: yup
        .string ()
        .email ('Please enter a valid email')
        .required ('Email is required')
    });
  
    try {
      const project = await schema.validate(userdata, {abortEarly:false}); 
      return project;
    } catch (error) {
      throw getValidationErrors (error);
    }
  };

 