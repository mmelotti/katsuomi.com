import React, { FC } from "react";
import styled from "styled-components";

// import images
import katsuomi from "images/katsuomi.jpg";

const Img = styled.img`
  width: 200px;
  height: 200px;
  align-self: center;
`;

const P = styled.p`
  align-self: center;
`;

const Wrapper = styled.div`
`;

const ProfileLeft: FC = () => (
  <Wrapper>
    <Img src={katsuomi} />
    <P>Aoki katsuomi, Nagoya Univ B4,<br /> Software Engineer</P>
  </Wrapper>
);

export default ProfileLeft;
