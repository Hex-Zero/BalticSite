function calculateCircumference(radius) {
  return radius * radius * Math.PI;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 1) + 1);
}

function timesTable(timesNumber, maxIterations) {
  let result = [];
  for (i = 1; i <= maxIterations; i++) {
    result.push(timesNumber * i);
  }

  return result;
}

$(".input-group-prepend.max-calculate-circumference").click(function () {
  $("#basic-addon2").html(
    calculateCircumference($("#max-circumference-input").val())
  );
});

$(".input-group-prepend.max-calculate-random").click(function () {
  $("#basic-addon1").html(getRandomInt($("#max-random-input").val()));
});

$(".input-group-prepend.max-calculate-squareRoot").click(function () {
  $("#basic-addon3").html(Math.sqrt($("#max-squareRoot-input").val()));
});

$(".input-group-prepend.max-calculate-timesTable").click(function () {
  const result = timesTable(
    $("#max-times-number-input").val(),
    $("#max-max-iteration-input").val()
  );
  $(".max-display-times-results").children().remove();
  result.forEach((element, index) => {
    $(".max-display-times-results").append(
      `<div>${index + 1} x ${$(
        "#max-times-number-input"
      ).val()} = ${element}</div>`
    );
  });
});
