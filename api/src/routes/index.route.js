import express from 'express';
import { CustomError } from '../utils/CustomError.js';
import { IndexService } from '../services/index.service.js';
import { retornoNotFound } from '../utils/notFound.util.js';

const router = express.Router();

router.get('/:id', async (req, res, next) => {
    if (!req.params?.id) {
        next(new CustomError(400, 'É necessário fornecer a chave do link'));
    }

    await new IndexService().buscarUrlPorId(req.params.id)
        .then((url) => {
            return res.redirect(308, url);
        })
        .catch((err) => {
            if (err instanceof CustomError && err.statusCode === 404) {
                return res.status(404).send(retornoNotFound);
            }
            next(err)
        });
});

export { router as indexRouter };