import Container from "react-bootstrap/esm/Container";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [alertaClass, setAlertaClass] = useState("mb-3 d-none");
  const [alertaMensagem, setAlertaMensagem] = useState("");

  return (
    <div>
      <Container>
        <form>
          
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


          <Alert key="danger" variant="danger"
          className={alertaClass}>
            {alertaMensagem}
          </Alert>

          <Button variant="primary">Login</Button>
        </form>

        <p>Não tem cadastro? <Nav.Link href="/cadastro">Cadastrar-se</Nav.Link></p> 
      </Container>
    </div>
  );
};


export default Login