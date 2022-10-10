let ticketPrice, age, kilometers;
trainTicket() // First time launch

document.getElementById('restart').addEventListener('click', trainTicket)

function trainTicket() {
    // Ask for age and kilometers
    age = window.prompt('Enter your age ( Only numbers )');
    kilometers = window.prompt('Enter the kilometeres to travel');

    // Verify if age and kilometers are numbers
    if(!isNaN(age) && !isNaN(kilometers) && age && kilometers ){
        
        //parse string to int
        age = parseInt(age)
        kilometers = parseInt(kilometers)

        //Calculate ticket price
        ticketPrice = kilometers * 0.21;
        if(age <= 12){ ticketPrice = ticketPrice*0.8 };
        if(age >= 65){ ticketPrice = ticketPrice*0.6 };
        window.alert(`This is your price ticket ${ticketPrice}`)

    }else{
        window.alert('the value entered is not a number. Try again')
    }
}

