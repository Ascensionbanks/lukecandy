function cart() {
    var y = document.getElementById("cartpage")
    var x = document.getElementById("shoppage");
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none";
    }
  }

document.getElementById("open").click();
