export function jf_client(ua, addTag = false) {
    let ret = {
        device: 'desktop',
        os: 'others',
        browser: 'others'
    };
    ua = ua.toLowerCase();

    //device detection
    if (ua.indexOf('iphone') !== -1)
        ret.device = 'mobile-phone';
    else if (ua.match(/(ipod|ipad)/))
        ret.device = 'mobile-tablet';
    else if (ua.indexOf('android') !== -1) {
        if (ua.indexOf('mobile') !== -1)
            ret.device = 'mobile-phone';
        else
            ret.device = 'mobile-tablet';
    }  else if (ua.match(/(weboS|blackberry|iemobile|opera mini)/)) {
        if (ua.indexOf('tablet') !== -1)
            ret.device = 'mobile-tablet';
        else
            ret.device = 'mobile-phone';
    }

    //os detection
    if (ua.indexOf('win') !== -1)
        ret.os = 'windows';
    else if (ua.indexOf('mac') !== -1)
        ret.os = 'macos';
    else if (ua.indexOf('ios') !== -1)
        ret.os = 'ios';
    else if (ua.indexOf('android') !== -1)
        ret.os = 'android';
    else if (ua.indexOf('linux') !== -1)
        ret.os = 'linux';

    //browser detection
    if (ua.indexOf('chrome') !== -1)
        ret.browser = 'chrome';
    else if (ua.indexOf('firefox') !== -1)
        ret.browser = 'firefox';
    else if (ua.indexOf('msie') !== -1)
        ret.browser = 'ie';
    else if (ua.indexOf('edge') !== -1)
        ret.browser = 'edge';
    else if (ua.indexOf('safari') !== -1)
        ret.browser = 'safari';
    else if (ua.indexOf('opera') !== -1)
        ret.browser = 'opera';

    if ((addTag === true)&&(window.jQuery !== undefined))
        $('body').addClass('c-os-' + ret.os + ' c-dv-' + ret.device + ' c-br-' + ret.browser);

    return ret;
}
