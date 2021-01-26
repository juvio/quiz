import styled from "styled-components";
import db from "../db.json";
import Footer from "../src/components/Footer";
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import {QuizLogo}  from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GithubCorner';

//import logo from '../src/img/twd.png';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo src="https://lh5.googleusercontent.com/JyL-BvJcIxSAOjpeZZToDOPQG91mnKifRUcNRO6cGSER-N1uZJWhfAkfjW1EchbadQYLiiKrDQC00pNQC_w8IA3Mn-2VDMfFeaaldzZVtUnh2tdRBQU=w1280" />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da Galera</h1>

            <p>lorem ipsum dolor sit amet...</p>
          </Widget.Content>
        </Widget>
        {/* <Footer /> */}
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/juvio" />
    </QuizBackground>
  );
}
