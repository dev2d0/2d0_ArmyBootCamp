import { Cookie } from './Cookie';
import { Soldier } from './Soldier';
import { Message } from './Message';
/**
 * 더캠프 클라이언트
 * @class Client
 */
declare class Client {
    cookies?: Cookie;
    /**
     * 로그인을 강제한다.
     */
    private enforceLogin;
    /**
     * 로그인한다.
     * @param id 계정 아이디
     * @param password 계정 비밀번호
     */
    login(id: string, password: string): Promise<void>;
    /**
     * 군인을 추가한다.
     * @param soldier - 추가할 군인 정보
     */
    addSoldier(soldier: Soldier): Promise<void>;
    /**
     * 군인 정보를 가져온다.
     * @param soldier - 확인할 군인 정보
     */
    fetchSoldiers(soldier: Soldier): Promise<Soldier[]>;
    /**
     * 인터넷 편지를 전송한다.
     * @param soldier - 훈련병 정보
     * @param message - 인터넷 편지 정보
     */
    sendMessage(soldier: Soldier, message: Message): Promise<void>;
}
export { Client };
