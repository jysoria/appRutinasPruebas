function toggleNavbar() {
    var navbarItems = document.getElementById("navbarItems");
    navbarItems.classList.toggle("active");
  }
  
  function toggleWeek(weekNumber) {
    var weeks = document.getElementsByClassName("week-routines");
    var buttons = document.getElementsByTagName("button");
  
    for (var i = 0; i < weeks.length; i++) {
      weeks[i].classList.remove("active");
      buttons[i].classList.remove("active");
    }
  
    weeks[weekNumber - 1].classList.add("active");
    buttons[weekNumber - 1].classList.add("active");
  }
  