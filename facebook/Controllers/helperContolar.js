const showagecheak = (req, res) => {
	//    get form data
	const { name, age } = req.body;
	if (age >= 21) {
		res.status(200).send(`hi ${name} -- tumar biyer time hoy se`);
	} else {
		res.status(200).send(`hi ${name} -- tumar biyer time hoy nai`);
	}
};
const showcheak = (req, res) => {
	const { dollor } = req.params;
	res.status(200).send(`${dollor} dollar =${dollor * 96} BD`);
};
module.exports = {
	showagecheak,
	showcheak,
};
