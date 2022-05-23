
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/pare.jfif') {
      myImage.setAttribute('src','images/txu.jfif');
    } else {
      myImage.setAttribute('src','images/pare.jfif');
    }
}
/*
document.querySelector('html', ).addEventListener('click', function() {
  alert('Ouch! Pare de clicar em mim, clica só no coração, jaguara!');
});
*/

let butaum = document.querySelector('button');
function resp (){
	let butaum = document.querySelector('button');
    let resposta = prompt ('Já procurou sua mãe no google?');
    localStorage.setItem('sxn', resposta);
    if (resposta === 'sim'){
	 alert('Blz jaguara!');
      } else {
	  alert ('Vai procurar então, animal.')
 } ;
}

butaum.onclick = function() {
    resp();
}

/*
 let butaum = document.querySelector('button');
 let resposta = prompt ('Já procurou sua mãe no google?');
 localStorage.setItem('sxn', resposta);
 if (resposta === 'sim'){
	 alert('Blz jaguara!');
 } else {
	 alert ('Vai procurar então, animal.')
 }
 */