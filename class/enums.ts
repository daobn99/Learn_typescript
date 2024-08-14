/**
 * Enum dùng để liệt kê một loạt các constant để đỡ mất công gõ tay lại nhiều lần (vscode gợi ý cho)
 */

const enum API_STATUS {
    PENNDING = "PENDDING",
    FULFILLDED = "FULFILLDED",
    REJECTED = "REJECTED",
}

const a1 = API_STATUS.PENNDING;
const a2 = API_STATUS.FULFILLDED;

console.log(a1);