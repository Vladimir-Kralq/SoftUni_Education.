function arenaTier(input) {
    let arena = new Map();

    for (let line of input) {
        if (line === 'Ave Cesar') break;

        if (line.includes(' -> ')) {
            // Формат: {gladiator} -> {technique} -> {skill}
            let [name, tech, skill] = line.split(' -> ');
            skill = Number(skill);

            if (!arena.has(name)) {
                arena.set(name, new Map());
            }

            let gladiatorTechs = arena.get(name);
            if (!gladiatorTechs.has(tech) || gladiatorTechs.get(tech) < skill) {
                gladiatorTechs.set(tech, skill);
            }

        } else if (line.includes(' vs ')) {
            // Формат: {gladiator} vs {gladiator}
            let [glad1, glad2] = line.split(' vs ');

            if (arena.has(glad1) && arena.has(glad2)) {
                let techs1 = arena.get(glad1);
                let techs2 = arena.get(glad2);
                let hasCommon = false;

                // Проверка за обща техника
                for (let key of techs1.keys()) {
                    if (techs2.has(key)) {
                        hasCommon = true;
                        break;
                    }
                }

                if (hasCommon) {
                    let total1 = Array.from(techs1.values()).reduce((a, b) => a + b, 0);
                    let total2 = Array.from(techs2.values()).reduce((a, b) => a + b, 0);

                    if (total1 > total2) {
                        arena.delete(glad2);
                    } else if (total2 > total1) {
                        arena.delete(glad1);
                    }
                }
            }
        }
    }

    // Помощна функция за сумиране на уменията
    const getTotalSkill = (techMap) => Array.from(techMap.values()).reduce((a, b) => a + b, 0);

    // Сортиране на гладиаторите
    let sortedGladiators = Array.from(arena.entries())
        .sort((a, b) => {
            let totalA = getTotalSkill(a[1]);
            let totalB = getTotalSkill(b[1]);
            // Сортиране по общ скил (desc) или по име (asc)
            return totalB - totalA || a[0].localeCompare(b[0]);
        });

    for (let [name, techs] of sortedGladiators) {
        console.log(`${name}: ${getTotalSkill(techs)} skill`);

        // Сортиране на техниките за всеки гладиатор
        let sortedTechs = Array.from(techs.entries())
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

        for (let [tName, tSkill] of sortedTechs) {
            console.log(`- ${tName} <!> ${tSkill}`);
        }
    }
}
arenaTier([
'Peter -> BattleCry -> 400',
'Alex -> PowerPunch -> 300',
'Stefan -> Duck -> 200',
'Stefan -> Tiger -> 250',
'Ave Cesar'
]
);