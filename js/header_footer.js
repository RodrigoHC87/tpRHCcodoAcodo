function loadHTML(id, url) {
    const element = document.getElementById(id);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                element.innerHTML = xhr.responseText;
            } else {
                console.error(`Failed to load ${url}: ${xhr.status}`);
            }
        }
    };
    xhr.send();
}

window.onload = function() {
    // loadHTML('header', 'header.html');
    loadHTML('footer', 'footer.html');
};