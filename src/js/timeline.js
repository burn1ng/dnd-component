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

    set_test_blocks30000(selector) {
        let test_html = `<div class="${selector}">${selector} div block</div>`;
        $('body').append(test_html);
    }

    set_test_blocks35000(selector)  {
        let test_hello_html = `<div class="${selector}">${selector} div block inside hello</div>`;
        $('.hello').append(test_hello_html);
    }
}
