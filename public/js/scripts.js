$(document).ready(function() {
	var flag = "gg";

	$('.mbed-1').click(function(event) {
		if (flag == 'gg') {
			flag = "kk";
			$('.data_info').show();

			/*var dialog = document.createElement('tr');
			dialog.className = "show-data";
			var dialog_td = document.createElement('td');
			dialog_td.colspan = "6";
			dialog.appendChild(dialog_td);*/
		} else {
			flag = "gg";
			$('.data_info').hide();
		}
	});
});