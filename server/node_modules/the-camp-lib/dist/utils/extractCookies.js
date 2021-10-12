"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 헤더의 쿠키 문자열에서 세션 식별을 위한 kvp를 찾는다.
 * @param cookies - 헤더의 쿠키 값
 */
function extractCookies(cookies) {
    if (cookies.length === 0) {
        throw new Error('The cookie values in the header are empty.');
    }
    var iuid = cookies.filter(function (cookie) {
        return cookie.includes('iuid=');
    })[0];
    var token = cookies.filter(function (cookie) {
        return cookie.includes('Token=');
    })[0];
    return {
        iuid: iuid.slice(0, iuid.indexOf(';')),
        token: token.slice(0, token.indexOf(';')),
    };
}
exports.extractCookies = extractCookies;
