import styled from "styled-components";
import Head from 'next/head'
import {useRouter} from 'next/router'

import db from "../db.json";
import Footer from "../src/components/Footer";
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import {QuizLogo}  from '../src/components/QuizLogo';
import GitHubCorner from '../src/components/GithubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import logo from '../src/assets/twd.png';

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

  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>TWD Quiz</title> 
      </Head>
      <QuizContainer>
        <QuizLogo src={logo} />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (event){
              event.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}>
              <Input 
              name="nomeDoUsuario"
              onChange={(event) => setName(event.target.value)}
              placeholder="Digite seu nome de zumbi"
              value={name}
              />
              
              <Button type="submit" disabled={name.length <= 1}>
                Jogar
              </Button>
            </form>
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
