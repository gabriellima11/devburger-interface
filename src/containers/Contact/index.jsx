import { Container, Title, ContainerItems, Text } from './styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const Contact = () => {
  return (
    <Container>
      <Title>Contato</Title>
      <Text>
        Olá! Eu sou Gabriel Lima. Durante meu tempo no DevClub, tive a
        oportunidade de criar essa aplicação incrível, cheia de funcionalidades.
        Esse projeto me proporcionou um grande aprendizado e me permitiu evoluir
        em várias áreas. Sou muito grato ao time do DevClub por compartilhar
        tanto conhecimento e por tornar essa jornada possível. Estou aberto a
        feedbacks para continuar melhorando
        <FavoriteIcon />
      </Text>
      <ContainerItems>
        <a href="https://www.linkedin.com/in/limaf-gabriel" target="_blank">
          <LinkedInIcon className="icon" />
        </a>
        <a href="https://github.com/gabriellima11" target="_blank">
          <GitHubIcon className="icon" />
        </a>
      </ContainerItems>
    </Container>
  );
};
