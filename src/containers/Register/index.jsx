import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
  Link,
  RightContainer,
} from './styles';

//Assets
import Logo from '../../assets/logo.svg';

//Components
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const navigate = useNavigate();

  const schema = yup
    .object({
      name: yup.string().required('Digite um nome!'),
      email: yup
        .string()
        .email('Digite um e-mail válido!')
        .required('O e-mail é obrigatório!'),
      password: yup
        .string()
        .min(6, 'A senha deve ter 6 caracteres!')
        .required('Preencha uma senha!'),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas devem ser iguais!') //comparar senhas
        .required('Confirme sua senha'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await api.post(
        '/users',
        {
          name: data.name,
          email: data.email,
          password: data.password,
        },
        {
          validateStatus: () => true, //acesso ao status
        },
      );
      if (response.status === 200 || response.status === 201) {
        setTimeout(() => {
          navigate('/login');
        }, 2000);
        toast.success('Conta criada com sucesso!');
      } else if (response.status === 409) {
        toast.error('Este e-mail já está sendo utilizado!');
      } else {
        throw new Error();
      }
    } catch (error) {
      toast.error('Ops, algo deu errado!');
    }
  };

  return (
    <Container>
      <LeftContainer>
        <img src={Logo} alt="logo-devburger" />
      </LeftContainer>

      <RightContainer>
        <Title>
          <span>Criar conta</span>
        </Title>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <label>Nome</label>
            <input type="text" {...register('name')} />
            <p>{errors?.name?.message}</p>
          </InputContainer>
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
          <InputContainer>
            <label>Confirmar senha</label>
            <input type="password" {...register('confirmPassword')} />
            <p>{errors?.confirmPassword?.message}</p>
          </InputContainer>
          <Button type="submit">CADASTRAR</Button>
        </Form>

        <Text>
          Já possui conta?
          <Link to="/login"> Clique aqui.</Link>
        </Text>
      </RightContainer>
    </Container>
  );
};
