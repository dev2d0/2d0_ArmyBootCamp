import { Soldier, Message, Cookie } from '../models';
/**
 * 인터넷 편지를 전송한다.
 * @param cookies - 세션 식별을 위한 쿠키
 * @param trainee - 훈련병 정보
 * @param message - 인터넷 편지 정보
 */
declare function sendMessage(cookies: Cookie, trainee: Soldier, message: Message): Promise<boolean>;
export { sendMessage };
