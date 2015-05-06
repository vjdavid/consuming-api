$( function () {

  var $products = $('#products');

  $.ajax({
    type: 'GET',
    crossdomain: true,
    url: 'http://localhost:3000/products',
    success: function(products) {
      $.each(products, function(i, product){
        $products.append('<li>name: ' + product.name + ', description: ' + product.description + '</li>');
      });
    },
    error: function() {
      alert("something wrong");
    }
  });

});

