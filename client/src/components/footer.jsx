import React from "react";
import styled from "styled-components";

const FooterText = styled.div`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
  padding: 3px;
  color: #fff;

  i {
    cursor: pointer;
  }
`;

const Footer = () => {
  function goto(url) {
    window.location = url;
  }

  return (
    <div>
      <FooterText>
        <i
          onClick={() => goto("https://github.com/Dev-0618/Cipher-Chat")}
          className="fab fa-github"
        />{" "}
        <i
          onClick={() => goto("https://linkedin.com./in/dev0root")}
          className="fab fa-linkedin"
        />
      </FooterText>
    </div>
  );
};

export default Footer;
