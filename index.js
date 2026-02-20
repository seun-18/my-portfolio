function handleReply(choice) {
    const textElement = document.getElementById('display-text');
    const imgElement = document.getElementById('response-img');
    const btnContainer = document.getElementById('btn');

    if (choice === 'no') {
        textElement.classList.remove('visible');
        setTimeout(() => {
             textElement.innerHTML = 'You clicked <span> No</span>!';
        imgElement.src = "https://plus.unsplash.com/premium_photo-1664303453667-3a3eb00f718c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVtZXxlbnwwfHwwfHx8MA%3D%3D";
        imgElement.style.display = "block"
        imgElement.style.width = "100px"
        imgElement.style.heigth = "100px"
        imgElement.style.margin = "auto";
        textElement.classList.add('visible');
        imgElement.classList.add('visible');
        }, 300)
    } else if (choice === 'yes') {
        textElement.innerHTML = 'You clicked <span> Yes</span>!';
         imgElement.src = "https://images.unsplash.com/photo-1561131989-b8112bafbd43?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
        imgElement.style.display = "block"
        imgElement.style.width = "100px"
        imgElement.style.heigth = "100px"
        imgElement.style.margin = "auto"
    }
}