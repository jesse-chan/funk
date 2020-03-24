Date.prototype.Format = function (fmt) {
    let ret = '';
    const w = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const lm = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const sm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const ampm = ['AM', 'PM'];
    let a = fmt.split('');
    if (a.length > 0) {
        a.push('\n');
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
        let charcnt = 0;
        let esc = false;
        let l = a.length - 2;
        for (let i in a) {
            charcnt++;
            if (esc === true) {
                ret += a[i];
                esc = false;
                charcnt = 0;
            } else {
                if ((a[i] !== a[i+1])||(i == l)) {
                    console.log(a[i], a[i+1]);
                    switch (a[i]) {
                        case 'y':
                            while (charcnt > 4) {
                                ret += x.y;
                                charcnt -= 4;
                            }
                            while (charcnt > 2) {
                                ret += x.y % 1000;
                                charcnt -= 2;
                            }
                            ret += a[i].repeat(charcnt);
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
                        case '\\':
                            esc = true;
                            break;
                        default:
                            ret += a[i].repeat(charcnt);
                            break;
                    }
                    charcnt = 0;
                }
            }
        }

    }

    return ret;
};

console.log(new Date().Format('yy--yyy'));
