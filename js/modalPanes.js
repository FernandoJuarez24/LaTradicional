//GALERIA MODAL PANES
const imagesPanes = document.querySelectorAll('.imgCardPanes img');
const modalPanes = document.querySelector('.modalPanes');
const imgModalPanes = document.querySelector('#imgModalPanes');
const cierreModalPanes = document.querySelector('.cierreModalPanes');
const captionModalPanes = document.querySelector('.captionModalPanes');
const listaGaleriaPanes = document.querySelectorAll('.listaGaleriaPanes');

imagesPanes.forEach((imagesPanes) => {
	imagesPanes.addEventListener('click', () => {
		modalPanes.style.display = 'block';
		imgModalPanes.src = imagesPanes.src;
		captionModalPanes.innerHTML = imagesPanes.alt;
	});
});

listaGaleriaPanes.forEach(img  => img.addEventListener('click', lightbox));
	function lightbox  (event){
		imgModalPanes.src = event.target.src;
		captionModalPanes.innerHTML = event.target.alt;
	}

	cierreModalPanes.addEventListener('click', () => {
    modalPanes.style.display = "none";
});