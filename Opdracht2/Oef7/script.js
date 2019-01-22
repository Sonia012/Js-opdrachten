function makeChoice() {
  let choice = prompt("Kies tussen 1, 2 en 3");
  switch (choice) {
    case "1":
      alert("1. Thank you");
      break;
    case "2":
      alert("2. Hello");
      break;
    case "3":
      alert("3. Good bye");
      break
    default:
      alert("Excuse me, what do you want?");
  }
}
