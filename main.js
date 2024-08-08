var hour = +prompt('Введите час')

switch (hour) {
  case 0:
  case 5:
  case 6:
    alert(`${hour} часов ночи`)
    break;
    case 1:
    alert(`${hour} час ночи`)
    break; 
    case 2:
    case 3:
    case 4:
    alert(`${hour} часа ночи`)
    break;
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
      alert(`${hour} часов утра`)
      break;
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
      alert(`${hour} часов дня`)
      break;
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      alert(`${hour} часов вечера`)
      break;
      

  default:
    break;
}