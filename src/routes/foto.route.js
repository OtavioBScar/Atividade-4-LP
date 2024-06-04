import { Router } from "express";
import { produtoValidator, produtoUpdateValidator, produtoIdValidator } from "../validators/produto.validator.js";
import FotoController from "../controllers/foto.controller.js";
import { fotoValidator } from "../validators/fotovalidator.js";

const router = Router()

router.get('/', FotoController.index)
router.post('/', fotoValidator, FotoController.create)
// router.get('/:id', produtoIdValidator, ProdutoController.show)
// router.put('/:id', produtoUpdateValidator, ProdutoController.update)
// router.delete('/:id',produtoIdValidator,  ProdutoController.delete)

export default router