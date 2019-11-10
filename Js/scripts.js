$(document).ready(function(){
  $("table").hide();
  $(".add-buttons").hide();
  $(".add-info").hide();
  $(".btn.yes").hide();
  $(".btn.no").hide();
  $(".add-info h4").hide();

  $('.btn.order').click(function() {
    var sizeOfPizza = $(".size option:selected").val();
    var crustOfPizza = $(".crust option:selected").val();
    var toppingsOfPizza = $(".toppings option:selected").val();
    var total = parseInt(sizeOfPizza) + parseInt(crustOfPizza) + parseInt(toppingsOfPizza);
    var order = 1;
    var grandTotal = 0;

    $("table").show();
    $(".add-buttons").show();
    $(".btn.order").hide();

    $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
    $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
    $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
    $("#total").html(total);

    function Pizza(size, crust, toppings, total, orderNo) {
      this.size = size;
      this.crust = crust;
      this.toppings = toppings;
      this.total = total;
      this.orderNo = orderNo;
    }


    $('.btn.add-pizza').click(function() {
      var sizeOfPizza = $(".size option:selected").val();
      var crustOfPizza = $(".crust option:selected").val();
      var toppingsOfPizza = $(".toppings option:selected").val();
      var total = parseInt(sizeOfPizza) + parseInt(crustOfPizza) + parseInt(toppingsOfPizza);
      order = order + 1;
      grandTotal = grandTotal + total;


      var newPizza = new Pizza(sizeOfPizza, crustOfPizza, toppingsOfPizza, total, order);

      var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="total">' + newPizza.total + '</td></tr>'

      $("#pizza").append(newRow);
    });

    $(".btn.check-out").click(function() {
      $(".btn.add-pizza").hide();
      $(".btn.check-out").hide();
      $(".add-info").show();
      $(".btn.yes").show();
      $(".btn.no").show();
      $(".add-info .location").hide();
      grandTotal = grandTotal + total;

      $(".add-info h3 span").html(grandTotal);
    });

    $(".btn.yes").click(function() {
      $(".add-info h5").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".add-info .location").show();
      $(".add-info h3 span").html(grandTotal + 300);
    });

    $(".btn.no").click(function() {
      $(".add-info h5").hide();
      $(".btn.yes").hide();
      $(".btn.no").hide();
      $(".add-info .location").show();
    });

    $(".btn.complete").click(function() {
      var location = $(".add-info .location input").val();
      $(".add-info h4").show();
      $(".add-info .location").hide();
      $(".add-info h4 span").html(location);
    });

  });
});