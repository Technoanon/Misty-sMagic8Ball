document.getElementById('getAnswer').addEventListener('click', function() {
    let userQuestion = document.getElementById('userQuestion').value.trim();
    if (userQuestion === '') {
        alert('Mists awaits a question!');
        return;
    }
    let randomNumber = Math.floor(Math.random() * 6);
    let response;

    switch (randomNumber) {
        case 0:
            response = "It is Absolute!";
            break;
        case 1:
            response = "It is Certain.";
            break;
        case 2:
            response = "Reply Hazy, Try Again.";
            break;
        case 3:
            response = "Ask Again Later.";
            break;
        case 4:
            response = "My Sources Say No.";
            break;
        case 5:
            response = "Cannot Predict Now.";
            break;
        default:
            response = "Error in Magic 8-Ball!";
    }

    // Reset the result div
    document.getElementById('result').style.visibility = 'hidden';
    document.getElementById('result').style.opacity = '0';
    document.getElementById('result').style.transform = 'rotate(0deg)';

    // Set the new content
    document.getElementById('result').innerHTML = `You asked: "${userQuestion}"<br>Misty's Magic 8-Ball says: "${response}"`;

    // After a small delay, show the result with animation
    setTimeout(function() {
        document.getElementById('result').style.visibility = 'visible';
        document.getElementById('result').classList.add('spin');
        document.getElementById('result').style.opacity = '1';
    }, 100);
})
