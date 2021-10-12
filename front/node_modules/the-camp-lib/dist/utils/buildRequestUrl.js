"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 더 캠프로 요청을 보내기 위한 url을 만든다.
 * @param resources - 요청할 리소스
 */
function buildRequestUrl(resources) {
    var baseUrl = 'https://www.thecamp.or.kr';
    return baseUrl + "/" + resources;
}
exports.buildRequestUrl = buildRequestUrl;
