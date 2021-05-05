//GALERIA MODAL PASTELES
const images = document.querySelectorAll('.imgCardPasteles img');
const modal = document.querySelector('.modalPasteles');
const imgModal = document.querySelector('#imgModalPasteles');
const cierreModal = document.querySelector('.cierreModalPasteles');
const captionModal = document.querySelector('.captionModalPasteles');
const listaGaleria = document.querySelectorAll('.listaGaleriaPasteles');

images.forEach((images) => {
	images.addEventListener('click', () => {
		modal.style.display = 'block';
		imgModal.src = images.src;
		captionModal.innerHTML = images.alt;
	});
});

listaGaleria.forEach(img  => img.addEventListener('click', lightbox));
	function lightbox  (event){
		imgModal.src = event.target.src;
		captionModal.innerHTML = event.target.alt;
	}

	cierreModal.addEventListener('click', () => {
    modal.style.display = "none";
});
