import Service from '@ember/service';

export default class UserPreferenceService extends Service {

    set theme(newTheme){
        let date = new Date();
        date.setTime( date.getTime() + (30 * 24 * 60 * 60 * 1000)); 
        document.cookie = `theme=${newTheme};expires=${date.toUTCString()}`;        
    }

    get theme(){
        let cookieArr = document.cookie.split('=');
        if(cookieArr.length>0){
            return cookieArr[1];
        }
        return 'light';
    }
}
