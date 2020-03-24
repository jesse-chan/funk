let a = '1234567';
let b = a.split('');
for (let i in b)
    if (i < (b.length - 1)) {
        console.log(b[i], b[i + 1], i+1);
    }
