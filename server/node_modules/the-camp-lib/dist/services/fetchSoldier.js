"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
/**
 * 군인 정보를 가져온다.
 * @param cookies - 세션 식별을 위한 쿠키
 * @param soldier - 확인할 군인 정보
 */
function fetchSoldiers(cookies, soldier) {
    return __awaiter(this, void 0, void 0, function () {
        var options, response, body, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    options = {
                        url: utils_1.buildRequestUrl('main/cafeCreateCheckA.do'),
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            Cookie: cookies.iuid + "; " + cookies.token,
                        },
                        form: {
                            name: soldier.getName(),
                            birth: soldier.getBirth(),
                            enterDate: soldier.getEnterDate(),
                            trainUnitCd: soldier.getTrainUnitCd(),
                            grpCd: soldier.getGrpCd(),
                        },
                    };
                    return [4 /*yield*/, utils_1.request(options)];
                case 1:
                    response = _a.sent();
                    utils_1.addLog('fetchSoldier', response.statusCode + " " + response.statusMessage);
                    body = response.body;
                    if (!body) {
                        throw new Error('응답 값이 없습니다.');
                    }
                    if (response.statusCode === 200 && body.resultCd !== '9999') {
                        throw new Error(body.resultMsg || '알 수 없는 에러.');
                    }
                    result = body.listResult.map(function (fetchedSoldierInfo) {
                        var traineeMgrSeq = fetchedSoldierInfo.traineeMgrSeq;
                        var clonedSoldier = soldier.clone();
                        clonedSoldier.setTraineeMgrSeq(traineeMgrSeq);
                        return clonedSoldier;
                    });
                    if (!result || result.length === 0) {
                        throw new Error('해당하는 군인을 찾을 수 없습니다.');
                    }
                    return [2 /*return*/, result];
            }
        });
    });
}
exports.fetchSoldiers = fetchSoldiers;
