const beerbnt = document.querySelector("#beer");
const amount = document.querySelector('h1');
beer_counter = 0;
beerbnt.addEventListener('click', function(){
	beer_counter += 1;
	amount.textContent = 'beers made:' + beer_counter;
})
