function adviceGenerator() {
    fetch('https://api.adviceslip.com/advice')
        .then(data => {
            return data.json()
        })
        .then(data => {
            document.querySelector('.advice-number').innerHTML = `Advice # ${data.slip.id}`;
            document.querySelector('.advice').innerHTML = `${data.slip.advice}`

        })
};
document.querySelector('.dice-btn').addEventListener('click', adviceGenerator)