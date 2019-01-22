function surfaceRectangle() {
  let breedte = prompt("Voer een breedte in");
  let lengte = prompt("Voer een lengte in");
  alert("Uw rechthoek heeft een oppervlakte van " + (breedte*lengte));
};

function perimeterRectangle() {
  let breedte = parseInt(prompt("Voer een breedte in"));
  let lengte = parseInt(prompt("Voer een lengte in"));
  alert("Uw rechthoek heeft een omtrek van " + (breedte+lengte)*2);
}
