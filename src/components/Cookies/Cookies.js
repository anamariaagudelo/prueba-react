
class CookiesCandidate {

   static getCookie(){
        let result = document.cookie.match(/myCookie=([^;]+)/i);
        result && (result = JSON.parse(result[1]));
        return result;
    }

    static setCookie(value) {
        const cookie = ['myCookie', '=', JSON.stringify(value), '; path=/;'].join('');
         document.cookie = cookie;
    }
}

export default CookiesCandidate;