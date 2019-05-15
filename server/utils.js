const fs = require('fs');

function readHistory(filePath) {
    if (fs.existsSync(filePath)) {
        try {
            let content = fs.readFileSync(filePath);
            return content;
        } catch (error) {
            return '读取聊天记录失败';
        }
    } else {
        return '暂无聊天记录';
    }
}

export default {
    readHistory
}