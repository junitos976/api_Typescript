"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const newsSchems_1 = require("../models/newsSchems");
exports.default = mongoose.model("news", newsSchems_1.default);
