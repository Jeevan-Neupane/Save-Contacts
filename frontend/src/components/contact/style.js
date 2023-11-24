import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 40rem;
  background-color:${props => props.theme.component};
  padding:2rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.6rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size:1.6rem;
`;

export const Input = styled.input`
  width: 100%;
  padding:.8rem;
  font-size: 1.6rem;
  background-color:${props => props.theme.background};
  outline:none;
  color:${props=>props.theme.text};
  border:1px solid ${props=>props.theme.border};
`;

export const RadioButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  font-size:1.6rem;
  
`;

export const RadioButtonLabel = styled.label`
  margin-right: .5rem;
`;

export const RadioButton = styled.input`
  margin-right: .5rem;
  
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: ${props=>props.theme.link};
  border: none;
  cursor: pointer;
  background-color:${props => props.theme.specialText};
  font-weight:600;
`;
export const ErrorMessage = styled.p`

color:red;
margin-top:.5rem;
font-size:1.2rem;
`