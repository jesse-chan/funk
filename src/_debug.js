let __dmoment__ = [];
let __dtag__ = [];
let __didx__ = -1;
export function jf_dbgCheck(tag, mute = false) {
    let n = new Date();
    __dmoment__.push(n);
    __dtag__.push(tag);
    __didx__++;
    if(mute === false) {
        let s = __dmoment__[__didx__].Format('hh:mm:ss.SSS => ') + '[' + __dtag__[__didx__] + '] checked. ';
        if (__didx__ > 0)
            s += (__dmoment__[__didx__] - __dmoment__[__didx__-1]) + ' ms passed from [' + __dtag__[__didx__-1] + '].';
        console.log(s);
    }
}
export function jf_dbgDump() {
    let i = 0;
    while (i <= __didx__) {
        let s = __dmoment__[i].Format('hh:mm:ss.SSS => ') + '[' + __dtag__[i] + '] checked. ';
        if (i > 0)
            s += (__dmoment__[i] - __dmoment__[i-1]) + ' ms passed from [' + __dtag__[i-1] + '].';
        console.log(s);
        i++
    }
}
export function jf_dbgReset() {
    __dmoment__ = [];
    __dtag__ = [];
    __didx__ = -1;
}
