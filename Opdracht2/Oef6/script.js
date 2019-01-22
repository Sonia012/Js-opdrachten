const tab = [-2, 1, 4];

const subtract = x => {
  if(x < 0) {
    alert("Negatief getal!")
  } else {
    alert("Getal positief")
  }
  return((parseInt(x) - parseInt(tab[0])))
};

function display() {
  console.log("Het resultaat met het eerste element is " + subtract(tab[0]));
  console.log("Het resultaat met het laatste element is " + subtract(tab[tab.length-1]));

}
