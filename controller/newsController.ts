
import httpStatus = require("http-status");
import newsServices from "../services/newsServices";
import Helper from "../infra/helper";

class NewsController {

    get(req, res) {
        newsServices.get()
            .then(news => Helper.sendResponse(res, httpStatus.OK, news))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }

    getById(req, res) {
        const _id = req.params.id;

        newsServices.getById(_id)
            .then(news => Helper.sendResponse(res,httpStatus.OK, news))
            .catch(error => console.error.bind(console, `Erro ${error}`));
    }

    create(req, res) {
        let vm = req.body;
        
        newsServices.create(vm)
            .then(news => Helper.sendResponse(res, httpStatus.OK, `Registro criado com sucesso  `))
            .catch(error => console.error.bind(console, `error ${error}`))
    }

    update(req, res) {
        const _id = req.params.id;
        let news = req.body;

        newsServices.update(_id, news)
            .then(news => Helper.sendResponse(res, httpStatus.OK, `Atualização efetuada com sucesso:  ${_id}`))
            .catch(error => console.error.bind(console, `error ${error}`))

    }

    delete(req, res) {
        const _id = req.params.id;

        newsServices.delete(_id)
        .then( () => Helper.sendResponse( res,httpStatus.OK,"DELETE EFETUADO COM SUCESSO!!!"))
        .catch(error => console.error.bind(console, `error ${error}`))
    }
}

export default new NewsController();

