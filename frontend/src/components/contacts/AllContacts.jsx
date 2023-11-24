import React from "react";
import { AllContactsContainerDiv, AllContactsDiv } from "./style";
import { useSelector } from "react-redux";
import ContactInfo from "../contactInfo/ContactInfo";
import SearchBar from "../search/SearchBar";

function AllContacts() {
  const allContacts = useSelector((state) => {
    return state.contacts.all_contacts;
  });

  return (
    <AllContactsContainerDiv>
      <SearchBar />
      <AllContactsDiv>
        {allContacts?.map((contact) => {
          return (
            <ContactInfo
              key={contact._id.toString()}
              user={contact}
            />
          );
        })}
      </AllContactsDiv>
    </AllContactsContainerDiv>
  );
}

export default AllContacts;
