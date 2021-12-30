export const createCube = (name, desc, uid) => {
	const cube = Object();
	const curr_time = new Date().toISOString();
	const curr_time_millis = Date.now();

	cube['name'] = name;
	cube['desc'] = desc;
	cube['labels'] = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	];
	const cube_state = [];
	for (let i = 0; i < 70; i++) {
		const e = {};
		e['state'] = 0;
		cube_state.push(e);
	}
	cube['cube_state'] = cube_state;
	cube['timestamp_human'] = curr_time;
	cube['timestamp'] = curr_time_millis;
	cube['last_edited'] = curr_time;
	cube['uid'] = uid;

	return cube;
};
