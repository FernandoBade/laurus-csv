"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fileHandler_1 = require("../utils/fileHandler");
const csvController_1 = require("../controllers/csvController");
const router = express_1.default.Router();
router.post('/upload-csv', fileHandler_1.upload.single('file'), csvController_1.uploadCsv);
exports.default = router;
