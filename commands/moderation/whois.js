module.exports = {
    name: 'whois',
    code: `
    $title[**$username[$mentioned[1;yes]]'s Information**]
    $description[
    **Username:** $username[$mentioned[1;yes]]
    **User ID:** $mentioned[1;yes]
    **User Avatar:** $userAvatar[$mentioned[1;yes]]
    **User Created:** $creationDate[$mentioned[1;yes]]

    $thumbnail[$userAvatar[$mentioned[1;yes]]]

    $suppressErrors[Please mention someone/User not found]
`   
    }
