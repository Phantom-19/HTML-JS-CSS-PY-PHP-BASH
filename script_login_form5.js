  <script> 
   
// Afficher/Masquer le mot de passe

function Faxel(v) {
  var x = document.getElementsByClassName('mdp')
  if (x[v].type == 'password') {
    x[v].type = 'text'
  }
  else {
    x[v].type = 'password'
  }
}

// Declaration des variables de la Validation du formulaire

var vise = document.getElementsByClassName('vise')
var mdp = document.getElementsByClassName('mdp')
var pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

//FONCTION VALIDATION 1
function validation1(){
  if(!pattern.test(document.getElementsByClassName("email")[0].value)){
    vise[0].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Entrer un email valide et correct'
    return false
  }
  else {
    vise[0].innerHTML = ''
  }
  
  if (mdp[0].value.length < 8 | mdp[0].value.length > 20) {
    vise[1].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Entrer un mot de passe  comprise entre 8-20 caracteres'
    return false
  }
}

//FONCTION VALIDATION 2
function validation2(){
  //VALIDATION DU NOM 
  var nom = document.getElementById('nom')
  if (nom.value == '') {
    vise[2].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Champ obligatoire'
    return false
  }
  else {
    vise[2].innerHTML = ''
  }

  // VALIDATION DE L'EMAIL
  if(!pattern.test(document.getElementsByClassName("email")[1].value)){
    vise[3].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Entrer un email valide et correct'
    return false
  }
  else {
    vise[3].innerHTML = ''
  }
  
  //SAISIR DU MOT DE PASSE
  if (mdp[1].value.length < 8 | mdp[1].value.length > 20) {
    vise[4].innerHTML = '<i class="fas fa-exclamation-triangle"></i> Entrer un mot de passe  comprise entre 8-20 caracteres'
    return false
  }
  else {
    vise[4].innerHTML = ''
  }
  
  // CONFIRMATION DU MOT DE PASSE 
  if (mdp[1].value != mdp[2].value) {
    vise[5].innerHTML = '<i class="fas fa-exclamation-triangle"></i>Vous avez saisir un mot different'
    return false
  }
}
  </script>
