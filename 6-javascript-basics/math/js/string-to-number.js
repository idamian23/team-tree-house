const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');

const totalBadges = parseInt(HTMLBadges)  + parseInt(CSSBadges) ;
console.log(totalBadges);
console.log(typeof HTMLBadges, typeof CSSBadges);
