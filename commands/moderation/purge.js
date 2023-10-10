module.exports = {
    name: 'purge',
    code: `
$clear[$message]
$color[ff0000]
$title[**$message Purged**]
$description[**$message messages have been deleted**]
$footer[By $username[$authorID]]
$onlyPerms[managemessages;**You don't have the \`Manage Messages\` permission to use this command**]
$onlyIf[$isNumber[$message[1]]==true;**Please enter a valid number**]
$onlyIf[$message[1]!=;**Please enter the amount of messages to purge**]
`
}