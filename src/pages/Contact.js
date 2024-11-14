import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactFormComponent from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle
          as={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </SectionTitle>

        <ContactWrapper>
          <ContactInfo
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <InfoText>
              I'm currently open to new opportunities and collaborations. 
              Whether you have a question or just want to say hi, I'll try 
              my best to get back to you!
            </InfoText>

            <ContactMethods>
              <ContactMethod
                as={motion.a}
                href="tel:+233547442987"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ContactIcon 
                  src="https://cdn-icons-png.flaticon.com/512/724/724664.png" 
                  alt="Phone"
                />
                <div>
                  <MethodLabel>Phone</MethodLabel>
                  <MethodValue>+233 547 442 987</MethodValue>
                </div>
              </ContactMethod>

              <ContactMethod
                as={motion.a}
                href="https://www.linkedin.com/in/abberteh-banafo-0547442987-fd"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ContactIcon 
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  alt="LinkedIn"
                />
                <div>
                  <MethodLabel>LinkedIn</MethodLabel>
                  <MethodValue>Connect with me</MethodValue>
                </div>
              </ContactMethod>

              <ContactMethod
                as={motion.a}
                href="mailto:abbertehbanafo@gmail.com"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ContactIcon 
                  src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                  alt="Email"
                />
                <div>
                  <MethodLabel>Email</MethodLabel>
                  <MethodValue>abbertehbanafo@gmail.com</MethodValue>
                </div>
              </ContactMethod>
            </ContactMethods>
          </ContactInfo>

          <ContactFormWrapper
            as={motion.div}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactFormComponent />
          </ContactFormWrapper>
        </ContactWrapper>
      </Container>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 32px;
  margin-bottom: 20px;
  text-align: center;
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 50px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ContactMethod = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  padding: 20px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.surface};
  transition: all 0.3s ease;
  border: 1px solid transparent;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-3px);
  }
  
  i {
    font-size: 20px;
    color: ${({ theme }) => theme.colors.secondary};
    width: 24px;
    text-align: center;
  }
`;

const MethodLabel = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textLight};
  display: block;
  margin-bottom: 4px;
`;

const MethodValue = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  display: block;
`;

const ContactFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.secondary}20`};
  }
`;

const TextArea = styled.textarea`
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 2px ${({ theme }) => `${theme.colors.secondary}20`};
  }
`;

const SubmitButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: #000000;
  padding: 15px 30px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => `${theme.colors.secondary}40`};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const ContactIcon = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
  margin-right: 15px;
`;

export default Contact;
