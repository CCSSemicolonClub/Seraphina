module.exports = [{

    name: '$alwaysExecute',
    code: `
    $onlyIf[$isBot[$authorID]==false;]
    $onlyIf[$checkContains[$message;treat;Treat]==true;]
    Treat?
    
    `},

    {
    name: 'no treat',
    code: `
    
    Treat?!
    `},

    {
    name: 'no treat!',
    code: `
    $clear[1]
    Aww :(((
        $image[https://media.discordapp.net/attachments/1015133263100121088/1154694242606788659/image.png?width=330&height=270]
    `
}]