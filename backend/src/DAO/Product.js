import ApplicationModel from "./ApplicationModel.js";

export default class Product extends ApplicationModel {
   id;
   curso;
   duracao;
   modalidade;
   plataforma;
   nivel;
   inicio;

   static configurar() {
      Product.associar("id", "ID");
      Product.associar("curso", "CURSO");
      Product.associar("duracao", "DURACAO");
      Product.associar("modalidade", "MODALIDADE");
      Product.associar("plataforma", "PLATAFORMA");
      Product.associar("nivel", "NIVEL");
      Product.associar("inicio", "INICIO");
   }
}
