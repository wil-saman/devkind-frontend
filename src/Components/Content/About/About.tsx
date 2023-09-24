import React from "react";
import {
  StyledAboutRootContainer,
  StyledAboutTitle,
} from "./StyledAboutComponent";
import { TableVirtuoso } from "react-virtuoso";

type Props = {};

const About = (props: Props) => {
  return (
    <StyledAboutRootContainer>
      <StyledAboutTitle>
        This project aims to create an authentication system that allows users
        to register and log in to their accounts.
        <br />
        <br />
        Changelog for updating user information:
      </StyledAboutTitle>
      <TableVirtuoso
        style={{
          display: "flex",
          height: "80%",
          width: "50%",
        }}
        data={[1, 2, 3, 4, 5, 6]}
        fixedHeaderContent={() => (
          <tr>
            <th style={{ padding: "10px" }}>Changed Information</th>
            <th style={{ padding: "10px" }}>Old Value</th>
            <th style={{ padding: "10px" }}>New Value</th>
          </tr>
        )}
        itemContent={(index, user) => (
          <div>
            <div
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {user}
            </div>
          </div>
        )}
      />
    </StyledAboutRootContainer>
  );
};

export default About;
