function nav() {
    var x = document.getElementById("mobile-nav");
    if (x.classList.contains("visible")) {
      document.getElementById("plus").style.opacity = "0%";
      document.getElementById("bars").style.opacity = "100%";
      x.classList.remove("visible");
      document.getElementById("plus").style.transform = "rotate(-180deg)";
    } else {
      document.getElementById("plus").style.opacity = "100%";
      document.getElementById("bars").style.opacity = "0%";
      x.classList.add("visible");    
      document.getElementById("plus").style.transform = "rotate(45deg)";
  };

    var y = document.getElementById("body");
    if (y.classList.contains("overflow")){
      y.classList.remove("overflow");
    } else {
      y.classList.add("overflow");
    }

    // document.getElementById("nav-icon").style.transform = "rotate(45deg)";
};