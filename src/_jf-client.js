//* Description
//  get client device type/os/browser
//* Arguments
//      ua(string) : navigator.userAgent | request.headers['user-agent']
//* Returns(object) :
//      {
//          device : 'desktop|mobile(phone)|mobile(tablet)',
//          os : 'Windows|MacOS|iOS|Android|Linux|others',
//          browser : 'Chrome|Firefox|IE|Edge|Safari|Opera|others'
//      }
function jf_client(ua) {
    let ret = {
        device: 'desktop',
        os: 'others',
        browser: 'others'
    };
    ua = ua.toLowerCase();

    //device detection
    if (ua.indexOf('iphone') !== -1)
        ret.device = 'mobile(phone)';
    else if (ua.match(/(ipod|ipad)/))
        ret.device = 'mobile(tablet)';
    else if (ua.indexOf('android') !== -1) {
        if (ua.indexOf('mobile') !== -1)
            ret.device = 'mobile(phone)';
        else
            ret.device = 'tablet';
    }  else if (ua.match(/(weboS|blackberry|iemobile|opera mini)/)) {
        if (ua.indexOf('tablet') !== -1)
            ret.device = 'mobile(tablet)';
        else
            ret.device = 'mobile(phone)';
    }

    //os detection
    if (ua.indexOf('win') !== -1)
        ret.os = 'Windows';
    else if (ua.indexOf('mac') !== -1)
        ret.os = 'MacOS';
    else if (ua.indexOf('ios') !== -1)
        ret.os = 'iOS';
    else if (ua.indexOf('android') !== -1)
        ret.os = 'Android';
    else if (ua.indexOf('linux') !== -1)
        ret.os = 'Linux';

    //browser detection
    if (ua.indexOf('chrome') !== -1)
        ret.browser = 'Chrome';
    else if (ua.indexOf('firefox') !== -1)
        ret.browser = 'Firefox';
    else if (ua.indexOf('msie') !== -1)
        ret.browser = 'IE';
    else if (ua.indexOf('edge') !== -1)
        ret.browser = 'Edge';
    else if (ua.indexOf('safari') !== -1)
        ret.browser = 'Safari';
    else if (ua.indexOf('opera') !== -1)
        ret.browser = 'Opera';

    return ret;
}
