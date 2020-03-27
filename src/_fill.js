export function jf_intFill(num, len, stuff = ' ', dir = true) {
    let x = parseInt(num).toString();
    let l = x.length;
    if (len > l) {
        if (dir === true)
            return stuff.repeat(len - l) + x;
        else
            return x + stuff.repeat(len - l);
    } else
        return x;
}

export function jf_floatFill(num, len, decimal = 0, stuff = ' ', dir = true) {
    let x = parseFloat(num).toString();
    let i = x;
    let d = '0'.repeat(decimal);
    if (len <= 0)
        return x;
    decimal = decimal < 0?0:decimal;

    let y = x.indexOf('.');
    if (y >= 0){
        i = x.substr(0, y);
        d = x.substr(y+1, decimal);
        if (d.length < decimal)
            d = d + '0'.repeat(decimal - d.length);
    }
    if (i.length > len)
        return x;
    else if ((i.length  === len)||(i.length === (len - 1)))
        return i;

    if (d !== '')
        d = '.' + d;
    let ret = i + d;
    if (ret.length < len) {
        if (dir === true)
            return (stuff.repeat(len - ret.length) + ret);
        else
            return (ret + stuff.repeat(len - ret.length));
    } else
        return ret.substr(0, len);
}
