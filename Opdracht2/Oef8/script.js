function weekday() {
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "zondag";
      break;
    case 1:
      day = "maandag";
      break;
    case 2:
      day = "dinsdag";
      break;
    case 3:
      day = "woensdag";
      break;;
    case 4:
      day = "donderdag";
      break;
    case 5:
      day = "vrijdag";
      break;
    case 6:
      day = "zaterdag";
  };
  alert("Vandaag is het " + day)
}
