"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const cors_1 = __importDefault(require("cors"));
const Auth_Routes_1 = __importDefault(require("./routes/Auth.Routes"));
const Note_Routes_1 = __importDefault(require("./routes/Note.Routes"));
const Index_Routes_1 = __importDefault(require("./routes/Index.Routes"));
class Server {
    constructor() {
        this.apiPaths = {
            auth: '/api/auth',
            notes: '/api/notes'
        };
        this.app = express_1.default();
        this.port = process.env.PORT || 3600;
        this.middlewares();
        this.routes();
        this.staticFiles();
    }
    routes() {
        this.app.use(this.apiPaths.auth, Auth_Routes_1.default);
        this.app.use(this.apiPaths.notes, Note_Routes_1.default);
        this.app.use(Index_Routes_1.default);
    }
    middlewares() {
        // Configurar corst y lectura del body, carpeta publica
        this.app.use(cors_1.default());
        this.app.use(body_parser_1.json());
        this.app.use(body_parser_1.urlencoded({ extended: true }));
    }
    staticFiles() {
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(this.port);
            console.log(`Server started on port ${this.port}`);
        });
    }
}
exports.default = Server;
