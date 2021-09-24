import React from "react";
import MajorDetails from "../../components/Profile/MajorDetails";
import PersonalDetails from "../../components/Profile/PersonalDetails";
import ProfessionalDetails from "../../components/Profile/ProfessionalDetails";

const Index = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", height: "100%", width: "100%" }}>
        <MajorDetails />
      </div>
      <div style={{ height: "5vh" }} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100%",
          width: "100%",
        }}
      >
        <PersonalDetails />
        <ProfessionalDetails />
      </div>
    </div>
  );
};

export default Index;
