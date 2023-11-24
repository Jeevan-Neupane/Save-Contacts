import {
  ContactContainer,
  ContactField,
  ContactInfoDetails,
  ContactInfoDiv,
  ContactName,
  DeleteIcon,
  EditIcon,
  GenderIcon,
  IconsContainer,
} from "./style";

import { FaMale, FaFemale } from "react-icons/fa";

const ContactInfo = ({ user }) => {
  const onEdit = () => {};

  const onDelete = () => {};
  return (
    <ContactContainer>
      <ContactInfoDetails>
        <GenderIcon>
          {user.gender === "male" ? <FaMale /> : <FaFemale />}
        </GenderIcon>
        <ContactInfoDiv>
          <ContactName>{`${user.firstName} ${
            user.middleName ? user.middleName + " " : ""
          }${user.lastName}`}</ContactName>
          <ContactField>{`Gender: ${user.gender}`}</ContactField>
          <ContactField>{`Phone Number: ${user.phone}`}</ContactField>
        </ContactInfoDiv>
      </ContactInfoDetails>

      <IconsContainer>
        <EditIcon onClick={onEdit} />
        <DeleteIcon onClick={onDelete} />
      </IconsContainer>
    </ContactContainer>
  );
};

export default ContactInfo;
