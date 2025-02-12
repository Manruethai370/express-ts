"use strict";
/*import { QueryError, PoolConnection } from "mysql2";
import { connection } from "../config/db";
import { Product } from "../model/product";*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = require("../config/db");
//import { Request, Response } from "express"; // Import Request and Response from express
const selectAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const [rows] = yield db_1.promisePool.query("SELECT * FROM product");
        return rows;
    }
    catch (err) {
        console.error("Database query error:", err);
    }
});
exports.default = { selectAll };
