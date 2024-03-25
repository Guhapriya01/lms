import Service from '@ember/service';

export default class UserPreferenceService extends Service {

    set theme(newTheme){
        let date = new Date();

        // seetting expiry date of 30 days
        date.setTime( date.getTime() + (30 * 24 * 60 * 60 * 1000)); 
        document.cookie = `theme=${newTheme};expires=${date.toUTCString()}`;        
    }

    get theme(){
        let cookieArr = document.cookie.split('=');
        // console.log(cookieArr.length)
        if(cookieArr.length>1){
            return cookieArr[1];
        }
        return 'light';
    }
}
