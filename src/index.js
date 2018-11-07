import $ from "jquery";

let cislo1 = "";
let current = "";
let operation = "";
$(".lols").click(function(event) {
  if (!isNaN(this.innerHTML)) {
    cislo1 += this.innerHTML;
    console.log(cislo1);
    $(".field").html(cislo1);
  }
  if ($(this).hasClass("ac")) {
    $(".field").html("");
    cislo1 = "";
    operation = "";
  }
  if ($(this).hasClass("dot") && !cislo1.includes(".")) {
    cislo1 += ".";
  }
  if ($(this).hasClass("add")) {
    $(".field").html("+");
    current = cislo1;
    cislo1 = "";
    operation = "sum";
  }
  if ($(this).hasClass("times")) {
    $(".field").html("*");
    current = cislo1;
    cislo1 = "";
    operation = "times";
  }
  if ($(this).hasClass("divide")) {
    $(".field").html("/");
    current = cislo1;
    cislo1 = "";
    operation = "div";
  }
  if ($(this).hasClass("subt")) {
    $(".field").html("-");
    current = cislo1;
    cislo1 = "";
    operation = "subt";
  }
  if ($(this).hasClass("eq")) {
    let result = "";
    if (operation === "sum") {
      result = parseFloat(cislo1) + parseFloat(current);
      $(".field").html(parseFloat(result));
    }
    if (operation === "subt") {
      result = parseFloat(current) - parseFloat(cislo1);
      $(".field").html(parseFloat(result));
    }
    if (operation === "div") {
      result = parseFloat(current) / parseFloat(cislo1);
      $(".field").html(parseFloat(result));
    }
    if (operation === "times") {
      result = parseFloat(current) * parseFloat(cislo1);
      $(".field").html(parseFloat(result));
    }
    cislo1 = result;
  }
});
