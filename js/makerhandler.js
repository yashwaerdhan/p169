AFRAME.registerComponent("markerhandler", {
    init: async function () {
  
     
      this.el.addEventListener("markerFound", () => {
        var markerId = this.el.id;      
        this.handleMarkerFound();
      });
  
      //markerLost event
      this.el.addEventListener("markerLost", () => {
        this.handleMarkerLost();
      });
  
    },
    handleMarkerFound: function (dishes, markerId) {
      // Changing button div visibility
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "flex";
  
      var orderSummaryButton = document.getElementById("order-summary-button");
      var orderButtton = document.getElementById("order-button");
  
      // Handling Click Events
      orderSummaryButton.addEventListener("click", function () {
        swal({
          icon: "warning",
          title: "Order Summary",
          text: "Work In Progress"
        });
      });
  
      orderButtton.addEventListener("click", () => {
        swal({
          icon: "https://i.imgur.com/4NZ6uLY.jpg",
          title: "Thanks For Order !",
          text: "Your order will get your toys soon!"
        });
      });
  
      // Changing Model scale to initial scale
     
    },
  
    handleMarkerLost: function () {
      // Changing button div visibility
      var buttonDiv = document.getElementById("button-div");
      buttonDiv.style.display = "none";
    },
   
  });