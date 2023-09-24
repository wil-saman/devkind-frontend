import React from "react";
import {
  StyledAboutRootContainer,
  StyledAboutTitle,
} from "./StyledAboutComponent";
import { TableVirtuoso } from "react-virtuoso";
import changelogAPI from "../../../Services/API/changelogAPI";
import { IChangelog } from "../../../Models/changelog";

type Props = {};

const About = (props: Props) => {
  //$$$$$$$$$$$$$ GET CHANGELOG DATA API $$$$$$$$$$$$$$$$$
  const changelogQuery = changelogAPI.useRetrieveChangelogQuery();

  const changelogQueryData = changelogQuery
    ? (changelogQuery.data?.data as IChangelog[])
    : [];

  console.log("THIS IS CHANGELOG", changelogQueryData);

  //$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
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
          justifyContent: "center",
          alignItems: "center",
          height: "80%",
          width: "50%",
        }}
        data={changelogQueryData}
        fixedHeaderContent={() => (
          <tr>
            <th style={{ padding: "10px" }}>Changed Information</th>
            <th style={{ padding: "10px" }}>Old Value</th>
            <th style={{ padding: "10px" }}>New Value</th>
          </tr>
        )}
        itemContent={(index, cl) => (
          <>
            <td style={{ width: 150 }}>{cl.changedItem}</td>
            <td>{cl.oldValue}</td>
            <td>{cl.newValue}</td>
          </>
        )}
      />
    </StyledAboutRootContainer>
  );
};

export default About;
