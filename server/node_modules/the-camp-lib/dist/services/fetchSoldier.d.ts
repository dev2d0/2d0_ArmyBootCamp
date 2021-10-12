import { Cookie, Soldier } from '../models';
/**
 * 군인 정보를 가져온다.
 * @param cookies - 세션 식별을 위한 쿠키
 * @param soldier - 확인할 군인 정보
 */
declare function fetchSoldiers(cookies: Cookie, soldier: Soldier): Promise<Soldier[]>;
export { fetchSoldiers };
