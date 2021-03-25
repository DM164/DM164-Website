let dark = false

switch (localStorage.getItem('theme')) {
    case 'dark':
        document.getElementById('switch').style.filter = 'invert(100%)'
        let noFlash = document.createElement('link')
        noFlash.href = 'noFlash.css'
        noFlash.rel = 'stylesheet'
        document.getElementsByTagName('head')[0].append(noFlash)
        let darkCss = document.createElement('link')
        darkCss.href = 'dark.css'
        darkCss.rel = 'stylesheet'
        document.getElementsByTagName('head')[0].append(darkCss)
        dark = true
        break;

    default:
        break;
}

document.getElementById('switch').addEventListener('click', () => {
    switchTheme()
})

function switchTheme() {
    if (dark === false) {
        document.getElementById('switch').style.rotate = '180deg'
        document.getElementById('switch').style.filter = 'invert(100%)'
        let darkCss = document.createElement('link')
        darkCss.href = 'dark.css'
        darkCss.rel = 'stylesheet'
        document.getElementsByTagName('head')[0].append(darkCss)
        dark = true
        localStorage.setItem('theme', 'dark')
    } else {
        document.getElementById('switch').style.rotate = ''
        document.getElementById('switch').style.filter = ''
        document.getElementsByTagName('link')[2].remove
        dark = false
        localStorage.setItem('theme', 'light')
        setTimeout(() => {
            location.reload()
        }, 600);
    }
}

document.getElementsByClassName('email')[0].addEventListener('click', (e) => {
    let text = "denistschurtschenthaler@gmail.com";
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });

    document.getElementById('cb-info').style.display = 'inline-block'

    setTimeout(() => {
        document.getElementById('cb-info').style.animation = 'bounce-off-reversed 0.3s forwards'
        setTimeout(() => {
            document.getElementById('cb-info').style.display = 'none'
            document.getElementById('cb-info').style.animation = 'bounce-off 0.3s forwards'
        }, 300);
    }, 3000);
})

//one
document.getElementById('one').addEventListener('mouseover', (e) => {
    document.getElementById('one-title').style.top = '-190px'
    document.getElementById('one-title').style.fontSize = '20px'
    document.getElementById('one-text').style.top = '-180px'
    document.getElementById('one-img').style.filter = 'brightness(0.3)'
})
document.getElementById('one').addEventListener('mouseleave', (e) => {
    document.getElementById('one-title').style.top = '-40px'
    document.getElementById('one-title').style.fontSize = '28px'
    document.getElementById('one-text').style.top = '0px'
    document.getElementById('one-img').style.filter = ''
})
//two
document.getElementById('two').addEventListener('mouseover', (e) => {
    document.getElementById('two-title').style.top = '-190px'
    document.getElementById('two-title').style.fontSize = '20px'
    document.getElementById('two-text').style.top = '-180px'
    document.getElementById('two-img').style.filter = 'brightness(0.3)'
})
document.getElementById('two').addEventListener('mouseleave', (e) => {
    document.getElementById('two-title').style.top = '-40px'
    document.getElementById('two-title').style.fontSize = '28px'
    document.getElementById('two-text').style.top = '0px'
    document.getElementById('two-img').style.filter = ''
})
//three
document.getElementById('three').addEventListener('mouseover', (e) => {
    document.getElementById('three-title').style.top = '-190px'
    document.getElementById('three-title').style.fontSize = '20px'
    document.getElementById('three-text').style.top = '-180px'
    document.getElementById('three-img').style.filter = 'brightness(0.3)'
})
document.getElementById('three').addEventListener('mouseleave', (e) => {
    document.getElementById('three-title').style.top = '-40px'
    document.getElementById('three-title').style.fontSize = '28px'
    document.getElementById('three-text').style.top = '0px'
    document.getElementById('three-img').style.filter = ''
})
//four
document.getElementById('four').addEventListener('mouseover', (e) => {
    document.getElementById('four-title').style.top = '-190px'
    document.getElementById('four-title').style.fontSize = '20px'
    document.getElementById('four-text').style.top = '-180px'
    document.getElementById('four-img').style.filter = 'brightness(0.3)'
})
document.getElementById('four').addEventListener('mouseleave', (e) => {
    document.getElementById('four-title').style.top = '-40px'
    document.getElementById('four-title').style.fontSize = '28px'
    document.getElementById('four-text').style.top = '0px'
    document.getElementById('four-img').style.filter = ''
})
//five
document.getElementById('five').addEventListener('mouseover', (e) => {
    document.getElementById('five-title').style.top = '-190px'
    document.getElementById('five-title').style.fontSize = '20px'
    document.getElementById('five-text').style.top = '-180px'
    document.getElementById('five-img').style.filter = 'brightness(0.3)'
})
document.getElementById('five').addEventListener('mouseleave', (e) => {
    document.getElementById('five-title').style.top = '-40px'
    document.getElementById('five-title').style.fontSize = '28px'
    document.getElementById('five-text').style.top = '0px'
    document.getElementById('five-img').style.filter = ''
})
//six
document.getElementById('six').addEventListener('mouseover', (e) => {
    document.getElementById('six-title').style.top = '-190px'
    document.getElementById('six-title').style.fontSize = '20px'
    document.getElementById('six-text').style.top = '-180px'
    document.getElementById('six-img').style.filter = 'brightness(0.3)'
})
document.getElementById('six').addEventListener('mouseleave', (e) => {
    document.getElementById('six-title').style.top = '-40px'
    document.getElementById('six-title').style.fontSize = '28px'
    document.getElementById('six-text').style.top = '0px'
    document.getElementById('six-img').style.filter = ''
})