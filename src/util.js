const config = require('../config.json');


exports.slice = (message = String) => {
    if(!message.startsWith(config.prefix)) {
        return false;
    }
    let object = {content: ''};
    let separated = message.replace(config.prefix, '').split(' ');
    separated.map((val, index) => {
        if(val.startsWith('-')) {
            object.param = separated[index].replace('-','');
        } else if(index == 0) {
            object.command = separated[index];
        } else if(separated.length != 1) {
            const checkLast = () => {
                if (index == separated.length -1) return '';
                else return ' ';
            }
            object.content += separated[index] + checkLast();
        }
    });
    return object;
};

// ,명령어 -param 내용
// ,명령어 -param 만약 내용이 이렇게 나뉘어져 있다면