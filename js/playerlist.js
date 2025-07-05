$(document).ready(function () {
	/* 背番号*/
	const playerNumbers = ['1', '2', '3', '4', '6', '8', '9', '10', '17', '18'];

	playerNumbers.forEach(function (number) {
		const html = `
		<div class="col-md-2 text-center mb-5">
			<h3 class='border-black border-bottom pb-2 text-black'>${number}</h3>
			<img src="img/player/${number}.png" class="img-fluid" alt="Player ${number}">
		</div>
		`;
		$('#rowPlayerList').append(html);
	});

});