import React, { Fragment } from "react";
import { Container } from "reactstrap";

import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Signup from "../components/signup";

export default function SignupPage() {
  return (
    <Fragment>
      <Container id="contentLogin" fluid className="p-0">
        <div className="orange-gradient form-bg">
          <NavBar noTabs light />
          <Signup />
        </div>
      </Container>
      <Footer />
    </Fragment>
  );
}
