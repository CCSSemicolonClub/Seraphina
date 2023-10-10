module.exports = {
    name: 'choke',
    code: `
    $title[Choke]
    $image[$replaceText[$jsonRequest[https://api1.vldz.tk/random-image/choke;image;Something went wrong!]; ;%20]]
    `
} 