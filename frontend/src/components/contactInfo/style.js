import { FaEdit, FaTrash } from 'react-icons/fa';
import styled from 'styled-components';

export const ContactContainer = styled.div`
  border: 1px solid ${props => props.theme.border};
  padding: 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color:${props => props.theme.component};
  
`;

export const ContactInfoDetails = styled.div`
  flex: 1;
  display: flex;
  align-items:center;
`;

export const ContactName = styled.h3`
  margin: 0;
  font-size:2rem;
`;

export const ContactField = styled.p`
  margin: .5rem 0;
  font-size:1.6rem;
`;

export const IconsContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size:1.6rem;
`;

export const EditIcon = styled(FaEdit)`
  cursor: pointer;
`;

export const DeleteIcon = styled(FaTrash)`
  cursor: pointer;
`;

export const GenderIcon = styled.div`
  margin-right: .5rem;
  font-size:4rem;
  color:${props => props.theme.active};
`;

export const ContactInfoDiv = styled.div`

`