function solve(input) {
  const demons = input[0].split(/\s*,\s*/).sort((a, b) => a.localeCompare(b));

  for (const demon of demons) {
    let health = 0;
    let damage = 0;

    const healthMatches = demon.match(/[^0-9+\-*/.]/g);
    if (healthMatches) {
      for (const ch of healthMatches) {
        health += ch.charCodeAt(0);
      }
    }

    const numberMatches = demon.match(/[+-]?\d+(\.\d+)?/g);
    if (numberMatches) {
      for (const num of numberMatches) {
        damage += Number(num);
      }
    }

    for (const ch of demon) {
      if (ch === "*") {
        damage *= 2;
      } else if (ch === "/") {
        damage /= 2;
      }
    }

    console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`);
  }
}

solve(["M3ph-0.5s-0.5t0.0**, Azazel"]);
