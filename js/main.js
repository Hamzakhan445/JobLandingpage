$(document).ready(function(){
	 $(window).scroll(function(){
	 	 var scroll = $(document).scrollTop();
/*	 	 console.log(scroll)
*/
	 	 if (scroll > 400) {
	 	 	$('.nav-menu').addClass('nav-scroll');
	 	 }
	 	 else{
	 	$('.nav-menu').removeClass('nav-scroll');

	 	 }

	 });
});


 

 const loading = () =>{
 	 const loader = document.querySelector('.pre-loader');
 	 loader.classList.add('remove');
 }






































































































