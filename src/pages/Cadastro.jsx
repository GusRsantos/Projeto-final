import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Nav from "react-bootstrap/Nav";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirmaSenha] = useState("");  // Corrigido para o nome correto

  const [alertaCLass, setAlertaClass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");

  return (
    <div>
      <Container>
        <form>
          <FloatingLabel
            controlId="floatingInputName"
            label="Nome"
            className="mb-3"
          >
            <Form.Control 
              type="text" 
              placeholder="Digite seu nome"
              value={nome} 
              onChange={(e) => {
                setNome(e.target.value);
                console.log(nome);
              }}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInputEmail"
            label="Email"
            className="mb-3"
          >
            <Form.Control 
              type="email" 
              placeholder="name@example.com" 
              value={email} 
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </FloatingLabel>

          <FloatingLabel 
            controlId="floatingPassword" 
            label="Senha" 
            className="mb-3"
          >
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={senha} 
              onChange={(e) => {
                setSenha(e.target.value);
              }}  
            />
          </FloatingLabel>

          <FloatingLabel 
            controlId="floatingConfirmPassword" 
            label="Confirme a senha"
          >
            <Form.Control 
              type="password"  // Corrigido para "password" e não "ConfirmPassword"
              placeholder="Confirme a senha"
              value={confirmaSenha}  // Corrigido para o nome correto
              onChange={(e) => {
                setConfirmaSenha(e.target.value);  // Corrigido o nome da função
              }}  
            />
          </FloatingLabel>

          <Alert key="danger" variant="danger">
            AOBA
          </Alert>

          <Button variant="primary">Cadastrar</Button>
        </form>

        <p>Já tem cadastro? <Nav.Link href="/login">Login</Nav.Link></p> 
       
      </Container>
    </div>
  );
};

export default Cadastro;