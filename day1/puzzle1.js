import * as fs from 'fs';

const calories = fs.readFileSync('puzzle1.txt', 'utf-8');
let line = 0
let elfCalories = []
elfCalories[0] = 0
calories.split(/\r?\n/).forEach((calory) => {
    let num = parseInt(calory);
    if (calory.length === 0) {
       line += 1
       elfCalories[line] = 0
    } else {
        elfCalories[line] += num
    }
});

const maxCalories = Math.max(...elfCalories)
const elf = elfCalories.indexOf(maxCalories);

console.log(`elf: ${elf}, maxCalories: ${maxCalories}`);

const used = process.memoryUsage().heapUsed/1024/2014;
console.log(used);
console.log(`The script uses approximately ${Math.round(used * 100) / 100} MB`);
