'use strict';

(function ($) {
	$(document).ready(function () {
		// Code
		

	});
})(jQuery);



let acc = document.getElementsByClassName("myAccordion");
let i;

for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function () {
		let panel = this.nextElementSibling;
		if (panel.style.maxHeight) {
			panel.style.maxHeight = null;
			panel.style.opacity = 1;
		} else {
			panel.style.opacity = 0;
			panel.style.maxHeight = 0;
			// panel.style.maxHeight = panel.scrollHeight + "px";
		}
	});
}

AOS.init();
