import { Cookie, Soldier } from '../models';
/**
 * 군인을 추가한다.
 * @param cookies - 세션 식별을 위한 쿠키
 * @param soldier - 추가할 군인 정보
 */
declare function addSoldier(cookies: Cookie, soldier: Soldier): Promise<boolean>;
export { addSoldier };
