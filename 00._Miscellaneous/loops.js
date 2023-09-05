//loop methods: they are all methods that help loop over a list

const trolls = [
    {name: "Lis", trollLevel: 9},
    {name: "Minnie", trollLevel: 22},
    {name: "Arne", trollLevel: 27},
]

//add a troll level
/*
const levelUp = trolls.map((troll) => ({
...troll,
trollLevel: troll.trollLevel += 1
}))
*/

const upgradedTrolls = trolls.map((troll) => {
    troll.trollLevel += 5
    return troll
})

console.log(upgradedTrolls)

const oddTrolls = upgradedTrolls.filter(troll => troll.trollLevel % 2)

console.log(oddTrolls)