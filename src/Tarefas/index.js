import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  Container
} from "reactstrap";
export default class Tarefas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      adicionado:[]
    };
  }

  componentDidMount() {
    this.findProducts();
  }

  findProducts = async () => {
    const res = await axios.get(
      "http://localhost:3001/apinode/products?page=1"
    );
    this.setState({ products: res.data.docs });
    console.log(res.data.docs);
  }

  adicionarTarefa = async() => {
    const res = await axios.post("http://localhost:3001/apinode/products");
    console.log(res.data.docs);
    this.setState({adicionado: res.data.docs});
    setTimeout(() =>{
      this.findProducts();
    },3000);  
  }

  editarTarefa = async() =>{
    const res = await axios.put("http://localhost:3001/apinode/products/:id");
    console.log(res.data.docs);
    setTimeout(() =>{
      this.findProducts();
    },3000);
  }

  deletarTarefa = async() => {
    const res = await axios.delete("http://localhost:3001/apinode/products/:id");
    console.log(res.status);
    setTimeout(() =>{
      this.findProducts();
    },3000);
  }

  buscarPorId = async () =>{
    const res = await axios.get("http://localhost:3001/apinode/products/:id");
    this.setState({products: res.data.docs});
    console.log(res.data.docs);
  }

  render() {
    const { products } = this.state;
    return (
      <div id="page-home">
        <div className="content">
          <header>
            <p>To Do List</p>
          </header>

          <h1 className="green">Cadastrar nova tarefa</h1>

          <Form>
            <FormGroup>
              <div className="row">
                <div className="col-6">
                  <Input
                    type="title"
                    name="title"
                    id="title"
                    placeholder="Didite uma nova tarefa"
                  />
                </div>
                <div>
                  <Button color="primary" onClick={this.adicionarTarefa}>
                    Adicionar
                  </Button>
                </div>
              </div>
            </FormGroup>
          </Form>

          <div>
            
              <Container>
              <Row >
                <Col className="">
                {products.map((products) => (
                  <Card className=" row espaco" body>
                    <CardTitle>{products.title}</CardTitle>

                    <CardText>{products.description}</CardText>
                    <CardText>{products.url}</CardText>

                    <Button outline color="secondary" className="mb-2" onClick={this.adicionarTarefa}>
                      Editar
                    </Button>
                    <Button outline color="danger" onClick={this.deletarTarefa}>
                      Deletar
                    </Button>
                  </Card>
                   ))}
                </Col>
              </Row>
              </Container>
           
          </div>
        </div>
      </div>
    );
  }
}
