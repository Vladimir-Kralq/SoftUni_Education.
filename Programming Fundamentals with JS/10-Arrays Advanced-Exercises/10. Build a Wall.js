function buildAWall(input) {
 
  let sections = input.map(Number);

  const DAILY_CONCRETE_PER_SECTION = 195;
  const COST_PER_CUBIC_YARD = 1900;

  let dailyConcrete = [];
  let totalConcrete = 0;

 
  while (sections.some(h => h < 30)) {
   
    let workingCount = sections.filter(h => h < 30).length;

    let usedToday = workingCount * DAILY_CONCRETE_PER_SECTION;
    dailyConcrete.push(usedToday);
    totalConcrete += usedToday;

   
    sections = sections.map(h => (h < 30 ? h + 1 : h));
  }


  let totalCost = totalConcrete * COST_PER_CUBIC_YARD;

  console.log(dailyConcrete.join(", "));
  console.log(`${totalCost} pesos`);
}


buildAWall([21, 25, 28]);
