import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [formData, setFormData] = useState({
    to_name: 'Banafo',
    from_name: '',
    company: '',
    reply_to: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create the combined message with company information
    const messageWithCompany = `Company: ${formData.company || 'Not specified'}\n\n${formData.message}`;

    // Update the form's message field with the combined message
    const formElement = form.current;
    const messageInput = formElement.querySelector('[name="message"]');
    messageInput.value = messageWithCompany;

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formElement,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      console.log('EmailJS Response:', result);

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({
          to_name: 'Banafo',
          from_name: '',
          company: '',
          reply_to: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error details:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <FormContainer ref={form} onSubmit={handleSubmit}>
      <input 
        type="hidden" 
        name="to_name" 
        value="Banafo"
      />

      <FormGroup>
        <Label>Name *</Label>
        <Input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          placeholder="Your name"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Email *</Label>
        <Input
          type="email"
          name="reply_to"
          value={formData.reply_to}
          onChange={handleChange}
          placeholder="Your email"
          required
        />
      </FormGroup>

      <FormGroup>
        <Label>Company/Organization</Label>
        <Input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company (optional)"
        />
      </FormGroup>

      <FormGroup>
        <Label>Message *</Label>
        <TextArea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          rows="5"
          required
        />
      </FormGroup>

      <SubmitButton
        type="submit"
        disabled={isSubmitting}
        as={motion.button}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </SubmitButton>

      {submitStatus === 'success' && (
        <StatusMessage success>Message sent successfully!</StatusMessage>
      )}
      {submitStatus === 'error' && (
        <StatusMessage>Failed to send message. Please try again.</StatusMessage>
      )}
    </FormContainer>
  );
};

const FormContainer = styled.form`
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.secondary}20`};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.secondary}20`};
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px 24px;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => `${theme.colors.secondary}40`};
  }
`;

const StatusMessage = styled.div`
  margin-top: 20px;
  padding: 12px;
  border-radius: 4px;
  text-align: center;
  background: ${({ theme, success }) => 
    success ? `${theme.colors.success}20` : `${theme.colors.error}20`};
  color: ${({ theme, success }) => 
    success ? theme.colors.success : theme.colors.error};
`;

export default ContactForm; 