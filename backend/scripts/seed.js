import { hashSync } from "bcrypt";

import Page from "../src/DAO/Page.js";
import Product from "../src/DAO/Product.js";
import User from "../src/DAO/User.js";

const models = [Page, Product, User];

const seed = async () => {
   models.forEach((model) => model.configurar());

   const page = new Page();
   page.title = "Sobre";
   page.text = "Lorem ipsum dolor sit amet.";
   const pages = [page];

   const products = [];
   for (let i = 1; i <= 2; i++) {
      const prod = new Product();
      prod.curso = `Curso ${i}`;
      prod.duracao = `Duração do curso ${i}`;
      prod.modalidade = `Modalidade do curso ${i}`;
      prod.plataforma = `Plataforma do curso ${i}`;
      prod.nivel = `Nível do curso ${i}`;
      prod.inicio = `Início do curso ${i}`;
      products.push(prod);
   }

   const admin = new User();
   admin.email = "admin@admin.com";
   admin.encryptedPassword = hashSync("12345", 10);
   const users = [admin];

   await Page._seed(pages);
   await Product._seed(products);
   await User._seed(users);
};

seed();
