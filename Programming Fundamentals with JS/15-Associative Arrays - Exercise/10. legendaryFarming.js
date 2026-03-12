function legendaryFarming(input) {
  let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
  let junkItems = {};
  let legendaryWon = "";

  let args = input.split(" ");

  for (let i = 0; i < args.length; i += 2) {
    let quantity = Number(args[i]);
    let material = args[i + 1].toLowerCase();

    if (material in keyMaterials) {
      keyMaterials[material] += quantity;

      if (keyMaterials[material] >= 250) {
        if (material === "shards") legendaryWon = "Shadowmourne";
        else if (material === "fragments") legendaryWon = "Valanyr";
        else if (material === "motes") legendaryWon = "Dragonwrath";

        keyMaterials[material] -= 250;
        console.log(`${legendaryWon} obtained!`);
        break;
      }
    } else {
      if (!junkItems.hasOwnProperty(material)) {
        junkItems[material] = 0;
      }
      junkItems[material] += quantity;
    }
  }

  let sortedKeys = Object.entries(keyMaterials).sort((a, b) => {
    return b[1] - a[1] || a[0].localeCompare(b[0]);
  });

  for (let [mat, qty] of sortedKeys) {
    console.log(`${mat}: ${qty}`);
  }

  let sortedJunk = Object.entries(junkItems).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  for (let [mat, qty] of sortedJunk) {
    console.log(`${mat}: ${qty}`);
  }
}

legendaryFarming("3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards");
