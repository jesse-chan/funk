Date.prototype.Format = function (fmt) {
    let ret = '';
    const w = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const lm = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const sm = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const ap = ['am', 'pm'];
    const AP = ['AM', 'PM'];
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
            "q": Math.floor(this.getMonth()/3) + 1,
            "S": this.getMilliseconds()
        };
        let cnt = 0;
        let esc = false;
        let l = a.length - 2;
        let i = 0;
        for (let c of a) {
            cnt++;
            if (esc === true) {
                ret += a[i];
                esc = false;
                cnt = 0;
            } else {
                if (a[i] === '\\')
                    esc = true;
                else {
                    if ((a[i] !== a[i + 1]) || (i === l)) {
                        //console.log(a[i], a[i+1], cnt);
                        switch (a[i]) {
                            case 'y':
                                while (cnt >= 4) {
                                    ret += x.y;
                                    cnt -= 4;
                                }
                                while (cnt >= 2) {
                                    ret += x.y % 1000;
                                    cnt -= 2;
                                }
                                if (cnt > 0)
                                    ret += 'y'.repeat(cnt);
                                break;
                            case 'M':
                                while (cnt >= 4) {
                                    ret += lm[x.M];
                                    cnt -= 4;
                                }
                                while (cnt >= 3) {
                                    ret += sm[x.M];
                                    cnt -= 3;
                                }
                                while (cnt >= 2) {
                                    ret += (x.M > 8) ? (x.M + 1) : ('0' + (x.M + 1));
                                    cnt -= 2;
                                }
                                if (cnt > 0)
                                    ret += (x.M + 1);
                                break;
                            case 'd':
                                while (cnt >= 2) {
                                    ret += (x.d > 9) ? (x.d) : ('0' + x.d);
                                    cnt -= 2;
                                }
                                if (cnt > 0)
                                    ret += x.d;
                                break;
                            case 'w':
                                ret += w[x.w].repeat(cnt);
                                break;
                            case 'a':
                                ret += ap[Math.floor(x.H / 12)].repeat(cnt);
                                break;
                            case 'A':
                                ret += AP[Math.floor(x.H / 12)].repeat(cnt);
                                break;
                            case 'h':
                                let h = (x.H > 11) ? (x.H - 12) : x.H;
                                while (cnt >= 2) {
                                    ret += (h > 9) ? (h) : ('0' + h);
                                    cnt -= 2;
                                }
                                if (cnt > 0)
                                    ret += h;
                                break;
                            case 'H':
                                while (cnt >= 2) {
                                    ret += (x.H > 9) ? (x.H) : ('0' + x.H);
                                    cnt -= 2;
                                }
                                if (cnt > 0)
                                    ret += x.H;
                                break;
                            case 'm':
                                while (cnt >= 2) {
                                    ret += (x.m > 9) ? (x.m) : ('0' + x.m);
                                    cnt -= 2;
                                }
                                if (cnt > 0)
                                    ret += x.m;
                                break;
                            case 's':
                                while (cnt >= 2) {
                                    ret += (x.s > 9) ? (x.m) : ('0' + x.s);
                                    cnt -= 2;
                                }
                                if (cnt > 0)
                                    ret += x.s;
                                break;
                            case 'q':
                                ret += ('Q' + Math.ceil(x.M / 3)).repeat(cnt);
                                break;
                            case 'S':
                                let s = x.S + '';
                                s = s + '0'.repeat(3 - s.length);
                                while (cnt >= 3) {
                                    ret += s;
                                    cnt -= 3;
                                }
                                while (cnt >= 2) {
                                    ret += s.substr(0, 2);
                                    cnt -= 2;
                                }
                                if (cnt > 0)
                                    ret += s.substr(0, 1);
                                break;
                            default:
                                ret += a[i].repeat(cnt);
                                break;
                        }
                        cnt = 0;
                    }
                }
            }
            i++;
        }
    }
    return ret;
};
