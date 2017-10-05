import $ from 'jquery';
import _ from 'underscore';

export default class TimeLine {
    constructor(user) {
        this._user = user;
    }

    set_header() {
        $('#timeline').text(`${this._user.name} Timeline`);
    }

    set_timeline() {
        _.each(this._user.messages, (msg) => {
            let html = `<li><div class='timeline-heading'><h4 class='timeline-title'>${msg}</h4></div></li>`;
            $('.timeline').append(html);
        });
    }

    set_avatar(url) {
        let html = `<img src="${url}">`;
        $('.avatar').append(html);
    }
}
