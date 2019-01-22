const tab = [-2, 1, 4];

const add = x => x + 2;

function display() {
  for(let i = 0; i < tab.length; i++) {
    alert(tab[i] + " + 2 = " + add(tab[i]));
  }
}
