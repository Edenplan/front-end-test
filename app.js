document.getElementById("Formulaire").addEventListener("submit", function () {
  const inputs = document.getElementsByTagName("input");
  let erreur;
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      erreur = "Champ invalide";
      document.getElementById("erreur").innerHTML = erreur;
    }
    else {
        alert("rtgf");
      }
  } 
});
