import TimeLine from './js/timeline';
import {user} from './js/profile';

import './scss/main.scss';

let time_line_module1 = new TimeLine(user);

time_line_module1.set_header(user);
time_line_module1.set_avatar('public/img/ava.jpg');
time_line_module1.set_timeline(user);

for(let i = 0; i <= 30000; i++) {
	time_line_module1.set_test_blocks30000(`test${i}`);
}

for(let j = 0; j <= 35000; j++) {
	time_line_module1.set_test_blocks35000(`test${j}`);
}