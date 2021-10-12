"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 인터넷 편지 정보
 * @class Message
 */
var Message = /** @class */ (function () {
    /**
     * Message 인스턴스를 생성한다.
     * @param {string} title 편지 제목 (e.g., `'Title'`)
     * @param {string} content 편지 내용 (1500자 이하, e.g., `'Content'`)
     * @param {string} trainee 편지를 받을 훈련병 정보
     * @memberof Message
     */
    function Message(title, content, trainee) {
        var traineeMgrSeq = trainee.getTraineeMgrSeq();
        if (!traineeMgrSeq) {
            throw new Error('훈련병 식별 코드를 찾을 수 없습니다.');
        }
        this.sympathyLetterSubject = title;
        this.sympathyLetterContent = content;
        this.traineeMgrSeq = traineeMgrSeq;
    }
    /**
     * 제목을 반환한다.
     * @returns 제목
     * @memberof Message
     */
    Message.prototype.getSympathyLetterSubject = function () {
        return this.sympathyLetterSubject;
    };
    /**
     * 내용을 반환한다.
     * @returns 내용
     * @memberof Message
     */
    Message.prototype.getSympathyLetterContent = function () {
        return this.sympathyLetterContent;
    };
    /**
     * 훈련병 식별 코드를 반환한다.
     * @returns 훈련병 식별 코드
     * @memberof Message
     */
    Message.prototype.getTraineeMgrSeq = function () {
        return this.traineeMgrSeq;
    };
    return Message;
}());
exports.Message = Message;
