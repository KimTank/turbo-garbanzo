// test1
// function greetSomeone(firstName) {
//     var time = 'night';
//     if(time === 'night'){
//         var greeting = 'Good Night';
//     }

//     return greeting + ' ' + firstName;
// }

// greetSomeone('Steve');

// test2
function greetSomeone(firstName) {
    let time = 'night';
    if(time === 'night'){
        let greeting = "Good Night";
    }

    return greeting + ' ' + firstName;  //var가 아니라 greeting이 if문안에 있어 접근을 못함.
}

greetSomeone('Steve');