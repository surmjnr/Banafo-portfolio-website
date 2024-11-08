import { useState, useCallback } from 'react';

export const useForm = (initialState = {}, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleBlur = useCallback((e) => {
    if (validate) {
      const { name } = e.target;
      const fieldErrors = validate({ [name]: values[name] });
      setErrors(prev => ({ ...prev, ...fieldErrors }));
    }
  }, [validate, values]);

  const handleSubmit = useCallback(async (onSubmit) => {
    setIsSubmitting(true);
    
    if (validate) {
      const formErrors = validate(values);
      setErrors(formErrors);

      if (Object.keys(formErrors).length === 0) {
        try {
          await onSubmit(values);
          setValues(initialState);
        } catch (error) {
          console.error('Form submission error:', error);
        }
      }
    } else {
      await onSubmit(values);
      setValues(initialState);
    }
    
    setIsSubmitting(false);
  }, [initialState, validate, values]);

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    setErrors
  };
}; 