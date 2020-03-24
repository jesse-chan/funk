Date.prototype.Format = function (fmt) {
    let ret = '';
    let w = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let lm = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let sm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let ampm = ['AM', 'PM'];
    let x = {
        "y": this.getFullYear(),
        "M": this.getMonth(),
        "d": this.getDate(),
        "w": this.getDay(),
        "H": this.getHours(),
        "m": this.getMinutes(),
        "s": this.getSeconds(),
        "q": Math.floor(this.getMonth()/3),
        "S": this.getMilliseconds()
    };
    let a = fmt.split('');
    a.push('\n');
    let lastchar = '';
    let charcnt = 0;
    let flag = '';
    for (let i in a) {
        charcnt++;
        if (lastchar !== a[i]) {
            if (lastchar !== '')
                flag = lastchar;
            lastchar = a[i];
        }
        if (flag !== '') {
            console.log(flag, charcnt);
            switch (flag) {
                case 'y':
                    if (charcnt === 2)
                        ret += x.y % 1000;
                    else
                        ret += x.y;
                    break;
                case 'M':
                    break;
                case 'd':
                    break;
                case 'w':
                    break;
                case 'h':
                    break;
                case 'H':
                    break;
                case 'm':
                    break;
                case 's':
                    break;
                case 'q':
                    break;
                case 'S':
                    break;
                default:
                    ret += flag.repeat(charcnt);
                    break;
            }
            flag = '';
            charcnt = 0;
        }
    }

    return ret;
};

console.log(new Date().Format('yy--yyy'));
