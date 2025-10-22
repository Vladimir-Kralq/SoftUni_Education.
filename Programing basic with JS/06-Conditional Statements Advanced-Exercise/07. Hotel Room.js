function hotelRoom(month, nights) {
  let studio;
  let apartment;

  switch (month) {
    case 'May':
    case 'October':
      studio = 50;
      apartment = 65;
      break;

    case 'June':
    case 'September':
      studio = 75.20;
      apartment = 68.70;
      break;

    case 'July':
    case 'August':
      studio = 76;
      apartment = 77;
      break;
  }

  let studioTotal = studio * nights;
  let apartTotal = apartment * nights;

 
  if ((month === 'May' || month === 'October') && nights > 14) {
    studioTotal *= 0.70; 
  } else if ((month === 'May' || month === 'October') && nights > 7) {
    studioTotal *= 0.95; 
  } else if ((month === 'June' || month === 'September') && nights > 14) {
    studioTotal *= 0.80; 
  }

  
  if (nights > 14) {
    apartTotal *= 0.90; 
  }

  console.log(`Apartment: ${apartTotal.toFixed(2)} lv.`);
  console.log(`Studio: ${studioTotal.toFixed(2)} lv.`);
}


hotelRoom("May", 15);
