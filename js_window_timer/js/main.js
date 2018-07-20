$(document).ready(function(){
	showStartModal();
});
function showStartModal(){
	//strt timeout
	if(localStorage.getItem('ModalYesBtn')!=1){
		setTimeout(function(){
			$('#exampleModal').modal('show');
			$('#modal-yes-btn').on('click' , function(){
				//save state modal
				localStorage.setItem('ModalYesBtn', 1);
				$('#exampleModal').modal('hide');
			});
		}, 5000);
	}
}