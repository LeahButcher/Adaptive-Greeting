function AdaptiveGreeting(name) {
  var d = new Date();
  var weekday = d.getDay();
  var hour = d.getHours();
  var day = d.getDate();
  var month = d.getMonth();
  var output;
  var daysToFriday;
  var dayOrDays = "days";
    
  if (weekday < 5 && weekday > 0){
    daysToFriday = 5 - weekday;
  }
  else {
    daysToFriday = 5;
  }
  
  if (daysToFriday == 1){
    dayOrDays = "day";
  }
  
  // Random number for selecting a non-holiday greeting
  var rnd = Math.floor((Math.random() * 10) + 1);
  
  // Holidays
  if (month == 9 && day == 31){
    output = "Hi " + name + ", happy Halloween!";
    return output;
  }
  else if (month == 2 && day == 14){
    output = "Hi " + name + ", happy Pi Day!";
    return output;
  }
  else if (month == 2 && day == 17){
    output = "Hi " + name + ", happy St. Patrick's Day!";
    return output;
  }  
  else if (month == 4 && day == 4){
    output = "Hi " + name + ", May the Fourth be with you!";
    return output;
  }
  else if (month == 4 && day == 5){
    output = "Hi " + name + ", happy Cinco de Mayo!";
    return output;
  }
  else if (month == 8 && day == 19){
    output = "Ahoy " + name + ", a jolly Talk Like A Pirate Day to ye!";
    return output;
  }
  else if (month == 9 && day == 3){
    output = "Hi " + name + ", happy Techies Day!";
    return output;
  }
  // Non-holiday greetings, selected by random number
  else {    
    switch(rnd){
      case 1:
        if (weekday == 5){
          output = "Hi " + name + ", happy Friday!";
          return output;
        }
        else if (hour > 6 && hour < 12){
          output = "Good morning " + name + "!";
          return output;
        }
        else if (hour >= 12 && hour < 19){
          output = "Good afternoon " + name + "!";
          return output;
        }
        else {
          output = "Hi " + name + "!";
          return output;
        }
        break;
      case 2:
        if (weekday == 5){
          output = "Hi " + name + ", happy Friday!";
          return output;
        }
        else if (hour > 6 && hour < 12){
          output = "Good morning " + name + "!";
          return output;
        }
        else if (hour >= 12 && hour < 19){
          output = "Good afternoon " + name + "!";
          return output;
        }
        else {
          output = "Hi " + name + "!";
          return output;
        }
        break;
      case 3:
        if (hour > 6 && hour < 12){
          output = "Good morning " + name + "!";
          return output;
        }
        else if (hour >= 12 && hour < 19){
          output = "Good afternoon " + name + "!";
          return output;
        }
        else {
          output = "Hi " + name + "!";
          return output;
        }
        break;
      case 4: 
        if (weekday == 5){
          output = "Hi " + name + ", happy Friday!";
          return output;
        }
        else {
          output = "Hi " + name + ", only " + daysToFriday + " more " + dayOrDays + " until Friday!";
          return output;
        }       
        break;
      case 5:
        output = "Hey " + name + ", how's it going?";
        return output;
        break;
      case 6:
        output = "Hi there " + name + "!";
        return output;
        break;
      case 7:
        output = "Howdy " + name + "!";
        return output;
        break;
      case 8:
        output = "Hello " + name + "!";
        return output;
        break;  
      case 9:
        output = "Hi " + name + "!";
        return output;
        break;  
      case 10:
        output = "Hi " + name + ", hope all is well" + "!";
        return output;
        break;
      default:
        if (hour > 6 && hour < 12){
          output = "Good morning " + name + "!";
          return output;
        }
        else if (hour >= 12 && hour < 19){
          output = "Good afternoon " + name + "!";
          return output;
        }
        else {
          output = "Hi " + name + "!";
          return output;
        }
        break;
    }    
  }  
}