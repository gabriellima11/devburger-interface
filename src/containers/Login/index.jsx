import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useUser } from '../../hooks/UserContext';

//RouterDOM
import { useNavigate } from 'react-router-dom';

//React toastify
import { toast } from 'react-toastify';

//Api
import { api } from '../../services/api';

//Styles
import {
  Container,
  Title,
  Form,
  InputContainer,
  LeftContainer,
  Text,
  RightContainer,
  Link,
} from './styles';

//Assets
import Logo from '../../assets/logo.svg';

//Components
import { Button } from '../../components/Button';

export const Login = () => {
  const navigate = useNavigate();
  const { putUserData } = useUser();

  const schema = yup
    .object({
      email: yup
        .string()
        .email('Digite um e-mail válido!')
        .required('O e-mail é obrigatório!'),
      password: yup
        .string()
        .min(6, 'A senha deve ter 6 caracteres!')
        .required('Preencha uma senha!'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await toast.promise(
        api.post('/session', {
          email: data.email,
          password: data.password,
        }),
        {
          pending: 'Verificando seus dados',
          success: {
            render() {
              setTimeout(() => {
                navigate('/');
              }, 2000);
              return 'Seja bem-vindo(a)';
            },
          },
        },
      );
      putUserData(response.data);
    } catch (error) {
      toast.error('Email ou senha incorretos!');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title>
          Olá, seja bem vindo ao <span>Dev Burguer!</span>
          <br /> Acesse com seu
          <span> Login e senha</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>E-mail</label>
            <input type="email" {...register('email')} />
            <p>{errors?.email?.message}</p>
          </InputContainer>
          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register('password')} />
            <p>{errors?.password?.message}</p>
          </InputContainer>
          <Button type="submit">Entrar</Button>
        </Form>
        <Text>
          Não possui conta?
          <Link to="/cadastro"> Clique aqui.</Link>
        </Text>
      </RightContainer>
    </Container>
  );
};
