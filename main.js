let dark = false

document.getElementById('switch').addEventListener('click', () => {
    if (dark === false){
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
})

document.getElementsByClassName('discord')[0].addEventListener('mouseover', (e) => {
    document.getElementsByClassName('discord')[0].innerText = 'iGoof#0982'
})
document.getElementsByClassName('discord')[0].addEventListener('mouseleave', (e) => {
    document.getElementsByClassName('discord')[0].innerText = 'Discord'
})

document.getElementsByClassName('email')[0].addEventListener('mouseover', (e) => {
    document.getElementsByClassName('email')[0].innerText = 'denistschurtschenthaler@gmail.com'
})
document.getElementsByClassName('email')[0].addEventListener('mouseleave', (e) => {
    document.getElementsByClassName('email')[0].innerText = 'E-Mail'
})

//one
document.getElementById('one').addEventListener('mouseover', (e) => {
    document.getElementById('one-title').style.top = '-190px'
    document.getElementById('one-title').style.fontSize = '20px'
    document.getElementById('one-text').style.top = '-180px'
    document.getElementById('one-img').style.filter = 'blur(4px)'
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
    document.getElementById('two-img').style.filter = 'blur(4px)'
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
    document.getElementById('three-img').style.filter = 'blur(4px)'
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
    document.getElementById('four-img').style.filter = 'blur(4px)'
})
document.getElementById('four').addEventListener('mouseleave', (e) => {
    document.getElementById('four-title').style.top = '-40px'
    document.getElementById('four-title').style.fontSize = '28px'
    document.getElementById('four-text').style.top = '0px'
    document.getElementById('four-img').style.filter = ''
})

if (localStorage.getItem('theme') === 'dark'){
    document.getElementById('switch').style.filter = 'invert(100%)'
    let darkCss = document.createElement('link')
    darkCss.href = 'dark.css'
    darkCss.rel = 'stylesheet'
    document.getElementsByTagName('head')[0].append(darkCss)
    dark = true
}