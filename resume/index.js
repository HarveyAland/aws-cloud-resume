const counter = document.querySelector('.counter-number');
async function updateCounter() {
    let response = await fetch('https://zmvwl4fuxwbhwofdxa22x2aula0xysvi.lambda-url.eu-west-2.on.aws/');
    let data = await response.json();
    counter.innerHTML = `Views: ${data}`;
}
    updateCounter();