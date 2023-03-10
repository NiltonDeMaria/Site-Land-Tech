import { verificarToken } from "../middleware/authorization.js"
import Product from "../DAO/Product.js"

export default class ProductController {
    static rotas(app) {
        app.post('/produtos', verificarToken, ProductController.inserir)
        app.get('/produtos', ProductController.listarTodos)
        app.patch('/produtos/:id', verificarToken, ProductController.atualizar)
        app.delete('/produtos/:id', verificarToken, ProductController.deletar)
    }

    static async inserir(req, res) {
        const { curso, duracao, modalidade, plataforma, nivel, inicio } = req.body

        if (!curso || !plataforma) {
            return res.status(400).send({
                message: 'Os campos "curso" e "plataforma" são obrigatórios'
            })
        }

        const product = new Product()
        product.curso = curso
        product.duracao = duracao
        product.modalidade = modalidade
        product.plataforma = plataforma
        product.nivel = nivel
        product.inicio = inicio

        await product.save()

        res.status(200).send({
            message: 'Produto criado com sucesso!',
            data: product
        })
    }

    static async listarTodos(req, res) {
        const products = await Product.findAll()
        res.status(200).send({
            message: 'Produtos listados com sucesso!',
            data: products
        })
    }

    static async atualizar(req, res) {
        const {id} = req.params

        const product = await Product.findByProperty('id', id)
        if (!product) {
            return res.status(404).send({
                message: `O produto de id ${id} não existe`
            })
        }

        const {curso, duracao, modalidade, plataforma, nivel, inicio} = req.body
        if (curso) {
            product.curso = curso
        }
        if (duracao) {
            product.duracao = duracao
        }
        if (modalidade) {
            product.modalidade = modalidade
        }
        if (plataforma) {
            product.plataforma = plataforma
        }
        if (nivel) {
            product.nivel = nivel
        }
        if (inicio) {
            product.inicio = inicio
        }

        await product.save()

        res.status(200).send({
            message: 'Produto alterado com sucesso!',
            data: product
        })
    }

    static async deletar(req, res) {
        const {id} = req.params

        const product = await Product.findByProperty('id', id)
        if (!product) {
            return res.status(404).send({
                message: `O produto de id ${id} não existe`
            })
        }

        await product.delete()

        res.status(200).send({
            message: 'Produto deletado com sucesso!'
        })
    }
}