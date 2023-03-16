export function getCookie(name: string): string {
    const matches : RegExpMatchArray | null = document.cookie.match(
        new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)')
    );
    return matches ? decodeURIComponent(matches[1]) : '';
}

export function setCookie(name: string, value:any, props?:{[expires:string]:number | string | Date} ) {

    props = props || {};
    let exp: any = props.expires;
    if (typeof exp == 'number' && exp) {
        const d: Date = new Date();
        d.setTime(d.getTime() + exp * 1000);
        exp = props.expires = d;
    }
    if (exp && exp.toUTCString) {
        props.expires = exp.toUTCString();
    }
    value = encodeURIComponent(value);
    let updatedCookie: string = name + '=' + value;
    for (const propName in props) {
        updatedCookie += '; ' + propName;
        const propValue: any = props[propName];
        if (propValue !== true) {
            updatedCookie += '=' + propValue;
        }
    }
    document.cookie = updatedCookie;
}