import TimeLine from './js/timeline';
import {user} from './js/profile';
import './sass/style.scss';

let time_line_module1 = new TimeLine(user);

time_line_module1.set_header(user);
time_line_module1.set_timeline(user);
