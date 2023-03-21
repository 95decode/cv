import React from "react";
import ImageCard from "@/components/ImageCard";
import UpButton from "@/components/UpButton";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

const HomePage = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <Banner
            textElements={[
              { text: "TaeRim Lee", level: "h1" },
              { text: "1995.10.12", level: "h3" },
              { text: "Blockchain & Backend Developer", level: "h2" },
            ]}
          />
        </div>
      </div>
        {/*<h2 style={{ margin: 0 }}>Education</h2>
        <p style={{ margin: 0 }}>Bachelor of Science in Electronic Engineering</p>
        <p style={{ margin: 0 }}>Master of Science in Electronic Engineering</p>
        <p style={{ margin: 0 }}>Sogang University, Seoul, Korea</p>*/}
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <Card text="Contact"/>
          <Card text="Education"/>
          <Card text="Skills"/>
          <Card text="test"/>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          <ImageCard imageSrc="/images/aftmarket.png" alt="AFTmarket" text="AFTmarket" target="aftmarket-detail"/>
          <ImageCard imageSrc="/images/sara.png" alt="Sara" text="Sara" target="sara-detail"/>
          <ImageCard imageSrc="/images/extation_bridge.png" alt="Extation" text="Extation"  target="extation-detail"/>
          <ImageCard imageSrc="/images/extation_bridge.png" alt="Extation" text="Extation" target="extation-detail"/>
        </div>
      </div>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <p>s</p>
      <div id="aftmarket-detail" style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h3>AFTmarket Detail Description</h3>
        <p>{/* ... */}</p>
      </div>
      <div id="sara-detail" style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h3>Sara Detail Description</h3>
        <p>{/* ... */}</p>
      </div>
      <div id="extation-detail" style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h3>Extation Detail Description</h3>
        <p>{/* ... */}</p>
      </div>
      <UpButton />
    </div>
  );
};

export default HomePage;