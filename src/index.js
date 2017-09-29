module.exports = function zeros(expression) {

  expression = expression.split('*');
	let mult = 0;
	let duoFact = true;

	expression.forEach(function(e) {

    let foctoLen = e.split('').filter(x=> x.match(/!/)).length;
		let numb = +e.replace(/!/g, '');

		if (foctoLen === 1) {
			mult += Math.floor(numb/5) + Math.floor(numb/25);
			duoFact = false;
		} else if (foctoLen === 2) {
			if (numb % 2) {
				mult += Math.ceil(Math.floor(numb/5)/2) + Math.ceil(Math.floor(numb/25)/2);
			} else {
				mult += Math.floor(numb/5/2) + Math.floor(numb/25/2);
				duoFact = false;
			}
		}

	});

  if (duoFact) {
    return 0;
  } else {
    return mult;
  }
};
