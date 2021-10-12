import { Soldier } from './Soldier';
/**
 * 인터넷 편지 정보
 * @class Message
 */
declare class Message {
    private sympathyLetterSubject;
    private sympathyLetterContent;
    private traineeMgrSeq;
    /**
     * Message 인스턴스를 생성한다.
     * @param {string} title 편지 제목 (e.g., `'Title'`)
     * @param {string} content 편지 내용 (1500자 이하, e.g., `'Content'`)
     * @param {string} trainee 편지를 받을 훈련병 정보
     * @memberof Message
     */
    constructor(title: string, content: string, trainee: Soldier);
    /**
     * 제목을 반환한다.
     * @returns 제목
     * @memberof Message
     */
    getSympathyLetterSubject(): string;
    /**
     * 내용을 반환한다.
     * @returns 내용
     * @memberof Message
     */
    getSympathyLetterContent(): string;
    /**
     * 훈련병 식별 코드를 반환한다.
     * @returns 훈련병 식별 코드
     * @memberof Message
     */
    getTraineeMgrSeq(): string;
}
export { Message };
