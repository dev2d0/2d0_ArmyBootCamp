import { Cookie } from '../models';
/**
 * 더 캠프에 로그인해 세션 쿠키를 얻는다.
 * @param id - 계정 아이디
 * @param password - 계정 비밀번호
 */
declare function login(id: string, password: string): Promise<Cookie>;
export { login };
