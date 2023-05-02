// const p = window.location.pathname.split('/')[1]
// if (p === '') {
//     document.getElementById('title').innerHTML = 'Home'
// }
// else {
//     document.getElementById('title').innerHTML = p
// }
document.getElementById('title').innerHTML = window.location.pathname.split('/')[1]