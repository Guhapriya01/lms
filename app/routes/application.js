import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default class ApplicationRoute extends Route {
    @service router;
    beforeModel(transition){
        console.log(transition);
        this.router.transitionTo('home');
    }
}