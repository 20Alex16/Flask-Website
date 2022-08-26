function lerpColor(a, b, amount) { 
    
    var ah = parseInt(a.replace(/#/g, ''), 16),
    ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
    bh = parseInt(b.replace(/#/g, ''), 16),
    br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
    rr = ar + amount * (br - ar),
    rg = ag + amount * (bg - ag),
    rb = ab + amount * (bb - ab);
    
    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}

// let val = 0
// setInterval(() => {
//     val += .1
//     if (val > 360)
//         val -= 360
//     document.documentElement.style.setProperty('--inclinare', val + 'deg');
// })

function setBackground(col1, col2){
    document.body.style.background = `linear-gradient(var(--inclinare), ${col1}, ${col2})`
}

const colors = 
[
'#eeeeee',
'#aee4ed',
'#5fb7cf',
'#5a79c8',
'#3c339a',
]

let colorIndex = 0;
let ratio = 0;
let speed = document.body.getAttribute('speed') / 200;

setInterval(() => {
    ratio += speed;
    // console.log(ratio)
    if(ratio >= 1){
        ratio = 0;
        colorIndex++;
        if(colorIndex == colors.length)
            colorIndex = 0
    }
    setBackground(lerpColor(colors[colorIndex], colors[(colorIndex+1)%colors.length], ratio),
        lerpColor(colors[(colorIndex+1)%colors.length], colors[(colorIndex+2)%colors.length], ratio)
    )
});
