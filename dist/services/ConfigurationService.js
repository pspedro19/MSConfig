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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigurationService = void 0;
const ConfigurationRepository_1 = require("../repositories/ConfigurationRepository");
class ConfigurationService {
    constructor() {
        this.repository = new ConfigurationRepository_1.ConfigurationRepository();
    }
    addConfiguration(configuration) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.createConfiguration(configuration);
        });
    }
}
exports.ConfigurationService = ConfigurationService;
