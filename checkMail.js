'use strict';
function checkMail(element) {
	const mailInputs = document.querySelectorAll(element),
		regular = RegExp(
			/^((\w[^\W]+)[\.\-]?){1,}\@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi,
		);

	mailInputs.forEach(input => {
		input.addEventListener('blur', event => {
			const value = event.target.value.trim();

			if (!value.trim().length) {
				event.target.style.boxShadow = '';
				event.target.value = '';
				setTimeout(() => {
					event.target.style.transition = '';
				}, 400);

				return;
			}
			if (!value.match(regular) && value.length !== 0) {
				event.target.style.transition = 'all 0.2s';
				event.target.style.boxShadow = 'inset 0px 0px 6px 0px red';
			} else {
				event.target.style.boxShadow = '';
				setTimeout(() => {
					event.target.style.transition = '';
				}, 400);
			}
		});
	});
}

export default checkMail;
