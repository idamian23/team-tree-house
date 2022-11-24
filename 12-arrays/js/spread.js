const middle = ['lettuce', 'cheese', 'patty']
const burger = ['top bun', ...middle, 'bottom bun']

const brass = ['trumpet', 'trombone', 'bariton', 'tuba']
const woodwin = ['flute', 'clarinet', 'saxophone', 'basoone']
const instrument = [...brass, ...woodwin]
brass.push('AAA')
console.log(brass)
console.log(instrument)

console.log(burger)
