function partyTime(arr) {
    let party = arr.indexOf('PARTY');
    let invited = arr.slice(0, party);
    let arrived = arr.slice(party + 1);

    let vip = [];
    let regular = [];

    for (let guest of invited) {
      
        if (guest[0] >= '0' && guest[0] <= '9') {
            vip.push(guest);
        } else {
            regular.push(guest);
        }
    } 

    for (let guest of arrived) {
        let vipIndex = vip.indexOf(guest);
        if (vipIndex !== -1) {
            vip.splice(vipIndex, 1);
        }
        let regularIndex = regular.indexOf(guest);
        if (regularIndex !== -1) {
            regular.splice(regularIndex, 1);
        }
    }

    console.log(vip.length + regular.length);

    for (let guest of vip) {
        console.log(guest);
    }
    for (let guest of regular) {
        console.log(guest);
    }
}
partyTime(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)