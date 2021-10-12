import { Cookie } from '../models';
/**
 * 헤더의 쿠키 문자열에서 세션 식별을 위한 kvp를 찾는다.
 * @param cookies - 헤더의 쿠키 값
 */
declare function extractCookies(cookies: string[]): Cookie;
export { extractCookies };
