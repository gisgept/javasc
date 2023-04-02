var x = Number(prompt('введите первое число'))
var y = Number(prompt('введите второе число'))

function quarter(x, y) {
  if (x > 0 && y > 0) {
      console.log ("I четверть");
  } else if (x < 0 && y > 0) {
      console.log ("II четверть");
  } else if (x < 0 && y < 0) {
      console.log ("III четверть");
  } else if (x > 0 && y < 0) {
      console.log ("IV четверть");
  } else {
      console.log ("Точка лежит на координатных осях");
  }
}