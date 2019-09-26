"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const httpStatus = require("http-status");
const newsServices_1 = require("../services/newsServices");
const helper_1 = require("../infra/helper");
class NewsController {
    get(req, res) {
        newsServices_1.default.get()
            .then(news => helper_1.default.sendResponse(res, httpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) {
        const _id = req.params.id;
        newsServices_1.default.getById(_id)
            .then(news => helper_1.default.sendResponse(res, httpStatus.OK, news))
            .catch(error => console.error.bind(console, `Erro ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        newsServices_1.default.create(vm)
            .then(news => helper_1.default.sendResponse(res, httpStatus.OK, `Registro criado com sucesso  `))
            .catch(error => console.error.bind(console, `error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let news = req.body;
        newsServices_1.default.update(_id, news)
            .then(news => helper_1.default.sendResponse(res, httpStatus.OK, `Atualização efetuada com sucesso:  ${_id}`))
            .catch(error => console.error.bind(console, `error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        newsServices_1.default.delete(_id)
            .then(() => helper_1.default.sendResponse(res, httpStatus.OK, "DELETE EFETUADO COM SUCESSO!!!"))
            .catch(error => console.error.bind(console, `error ${error}`));
    }
}
exports.default = new NewsController();
