import TimeLine from './js/timeline';
import {user} from './js/profile';

import './scss/main.scss';

let time_line_module1 = new TimeLine(user);

time_line_module1.set_header(user);
time_line_module1.set_avatar('public/img/ava.jpg');
time_line_module1.set_timeline(user);
