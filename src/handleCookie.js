
function handleCookie(cookie) {
    // const cookie = {
    ////     result: '"{\\"url\\":\\"https://sv.isvnu.vn\\",\\"cookies\\":[{\\"domain\\":\\"sv.isvnu.vn\\",\\"expirationDate\\":1686359673.836539,\\"hostOnly\\":true,\\"httpOnly\\":true,\\"name\\":\\"ASC.AUTH\\",\\"path\\":\\"/\\",\\"sameSite\\":\\"lax\\",\\"secure\\":false,\\"session\\":false,\\"storeId\\":\\"0\\",\\"value\\":\\"78BD5A89B264907B4A43215073FEE37C7F9335CF6FFB12799802942D18E9575151F541BE998C24578DAD12B568FE6CF97A77F04E86A683BEA5D4CB1BAF48D97F5642F71D771628FB64A04F99F7120DC0CAB813DBA86EE0CB0A2A11D8430C6F51BCAB04907B02F8C2EFAA5A26F99458E96681BB96D4B6963BA78C906AFFAC05C7\\"},{\\"domain\\":\\".isvnu.vn\\",\\"expirationDate\\":1684201148,\\"hostOnly\\":false,\\"httpOnly\\":false,\\"name\\":\\"_gid\\",\\"path\\":\\"/\\",\\"sameSite\\":\\"unspecified\\",\\"secure\\":false,\\"session\\":false,\\"storeId\\":\\"0\\",\\"value\\":\\"GA1.2.1088720764.1684032473\\"},{\\"domain\\":\\"sv.isvnu.vn\\",\\"hostOnly\\":true,\\"httpOnly\\":true,\\"name\\":\\"ASP.NET_SessionId\\",\\"path\\":\\"/\\",\\"sameSite\\":\\"lax\\",\\"secure\\":false,\\"session\\":true,\\"storeId\\":\\"0\\",\\"value\\":\\"zm3g3fk20hay5jefthgep2tz\\"},{\\"domain\\":\\".isvnu.vn\\",\\"expirationDate\\":1718674748.721164,\\"hostOnly\\":false,\\"httpOnly\\":false,\\"name\\":\\"_ga_2YV7DNHY50\\",\\"path\\":\\"/\\",\\"sameSite\\":\\"unspecified\\",\\"secure\\":false,\\"session\\":false,\\"storeId\\":\\"0\\",\\"value\\":\\"GS1.1.1684113331.15.1.1684114748.0.0.0\\"},{\\"domain\\":\\".isvnu.vn\\",\\"expirationDate\\":1718674748.721673,\\"hostOnly\\":false,\\"httpOnly\\":false,\\"name\\":\\"_ga\\",\\"path\\":\\"/\\",\\"sameSite\\":\\"unspecified\\",\\"secure\\":false,\\"session\\":false,\\"storeId\\":\\"0\\",\\"value\\":\\"GA1.1.1062404516.1682439739\\"}]}"'
    // }
    let removeBackSlash = cookie.result.split('\\').join('');
    let getASCAUTH = removeBackSlash.split('{', 3)[2].slice(removeBackSlash.split('{', 3)[2].search('value') + 8).replace('"},', '');

    // console.log(newCookie.split('{', 3)[2].slice(newCookie.split('{', 3)[2].search('value') + 8).replace('"},', ''));
    // console.log(getASCAUTH);
    return(getASCAUTH);
}

module.exports = handleCookie;
