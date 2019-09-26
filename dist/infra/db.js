"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class dataBase {
    constructor() {
        this.db_URL = 'mongodb://localhost:27017/db_portal';
    }
    createConnection() {
        mongoose.connect(this.db_URL);
    }
}
exports.default = dataBase;
