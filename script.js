function nextPage() {
    window.location.href = 'yes.html';
}

function moveButton(){
    const button = document.getElementById('noButton');
    const container = document.querySelector('.container');
    
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    
    let newX, newY;
    do {
        newX = Math.random() * (containerRect.width - buttonRect.width);
        newY = Math.random() * (containerRect.height - buttonRect.height);
    } while (newX < 0 || newY < 0);
    
    button.style.position = 'absolute';
    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}