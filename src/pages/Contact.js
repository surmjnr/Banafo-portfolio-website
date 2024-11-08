import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
        </motion.div>

        <ContactContent>
          <ContactInfo>
            <InfoText>
              I'm always interested in hearing about new projects and opportunities. 
              feel free to reach out!
            </InfoText>
            
            <ContactMethods>
              <ContactMethod
                as={motion.a}
                href="mailto:abbertehbanafo@gmail.com"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ContactIcon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Email" />
                <div>
                  <MethodLabel>Email</MethodLabel>
                  <MethodValue>abbertehbanafo@gmail.com</MethodValue>
                </div>
              </ContactMethod>

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
                href="https://www.linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
              >
                <ContactIcon 
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
                  alt="LinkedIn"
                />
                <div>
                  <MethodLabel>LinkedIn</MethodLabel>
                  <MethodValue>Connect with me</MethodValue>
                </div>
              </ContactMethod>
            </ContactMethods>
          </ContactInfo>

          <ContactForm
            as={motion.form}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <FormField>
              <Label>Name</Label>
              <Input type="text" placeholder="Your name" required />
            </FormField>

            <FormField>
              <Label>Email</Label>
              <Input type="email" placeholder="Your email" required />
            </FormField>

            <FormField>
              <Label>Company/Organization</Label>
              <Input type="text" placeholder="Your company (optional)" />
            </FormField>

            <FormField>
              <Label>Message</Label>
              <TextArea placeholder="Your message" required />
            </FormField>

            <SubmitButton
              as={motion.button}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
            >
              Send Message
            </SubmitButton>
          </ContactForm>
        </ContactContent>
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

const ContactContent = styled.div`
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

const ContactForm = styled.form`
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
`;

export default Contact;
