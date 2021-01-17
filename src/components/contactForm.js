import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../styles/button';

const StyledForm = styled.form`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  padding: 2rem 0;
`;

const StyledInput = styled.input`
  display: block;
  outline: none;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 15.625rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  border: ${({ theme }) => `1px solid ${theme.colors.subtext}`};
`;

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [body, setBody] = useState('');

  return (
    <StyledForm name="contact" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="contact" />
      <StyledInput
        type="text"
        name="email"
        placeholder="Email address"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <StyledInput
        as="textarea"
        placeholder="Ask me anything"
        name="body"
        onChange={e => setBody(e.target.value)}
      >
        {body}
      </StyledInput>
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
};

export default ContactForm;
