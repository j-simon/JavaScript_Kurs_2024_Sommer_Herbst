let showNewsletterFor = (name, anrede) => {
    // männlich
    // anrede="Ms."
    if (anrede === "Mr.") {
        console.log(`Hello, ${anrede} ${name},

We are glad to inform you that you won an incredible Ferrari and 20.000$! Congratulations! Please write us an email with your banking information and we will transfer the money.
        
Sincerely, the Win Team`)
    } else {
        // weiblich
        console.log(`Hello, ${anrede} ${name},

We are glad to inform you that you have won a voucher from Tiffany &amp; Co. (50.000$), a luxury trip to New York and additionally 50.000$ for shopping and more! Congratulations! Please write us an email with your banking information and we will transfer the money.
            
Sincerely, the Win Team`)
    }

}

// 1
// showNewsletterFor('Heribert');
// showNewsletterFor('Goldy');
// showNewsletterFor('Ladislaus');

// 2
showNewsletterFor('Heribert', 'Mr.');
//showNewsletterFor('Goldy', 'Ms.');
showNewsletterFor('Ladislaus', 'Mr.');