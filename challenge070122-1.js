// 7kyu - remove anchor from URL

// take in url string
// return url string with everything after the anchor removed
// "www.codewars.com?page=1" => "www.codewars.com?page=1"

function removeUrlAnchor(url) {
    let split = url.split('');
    return (split.indexOf('#') === -1) ? url : url.slice(0,split.indexOf('#'));
}