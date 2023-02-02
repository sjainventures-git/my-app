import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.header`

  position: relative;
  display: flex;
  padding: 1rem;
  justify-content: flex-end;
  z-index:999999;
  
`;

export const Nav = styled(motion.nav)`
  background-color:  black;
  height: 90vh;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index:99999
`;

export const Link = styled(motion.li)`
  color: white;
  margin-bottom: 0.6rem;
  font-size: 1.4rem;
`;

export const SvgBox = styled(motion.div)`
position:fixed
`;
