import React from "react";
import { HomeLeftDiv, HomePageMain, HomeRightDiv } from "../styles/Container";
import ContactAddForm from "../components/contact/ContactForm";
import AllContacts from "../components/contacts/AllContacts";

function HomePage() {
  return (
    <HomePageMain>
      <HomeLeftDiv>
        <ContactAddForm />
      </HomeLeftDiv>
      <HomeRightDiv>
        <AllContacts />
      </HomeRightDiv>
    </HomePageMain>
  );
}

export default HomePage;
