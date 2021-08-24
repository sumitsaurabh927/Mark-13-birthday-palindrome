var btn = document.querySelector("#btn")
var date = document.querySelector("#date")

function clickHandler() {
    // console.log(date.value);
    var {
        day,
        month,
        year
    } = getDayMonthYear(date)
    var {
        formateOne,
        formatTwo,
        formatThree,
        reverseOne,
        reverseTwo,
        reverseThree
    } = formatDate(day, month, year)


    console.log(day, month, year);
}

btn.addEventListener("click", clickHandler)


function getDayMonthYear(date) {
    return {
        day: reverse = date.value.split("-").reverse()[0],
        month: reverse = date.value.split("-").reverse()[1],
        year: reverse = date.value.split("-").reverse()[2]
    }
}

function formatDate(day, month, year){
formateOne=day+month+year
formatTwo=month+day+year
formatThree=day+month+year.slice(2)
// console.log(formatThree)
reverseOne=formateOne.split("").reverse().join("")
reverseTwo=formatTwo.split("").reverse().join("")
reverseThree=formatThree.split("").reverse().join("")
return{formateOne,formatTwo,formatThree,reverseOne,reverseTwo,reverseThree}
}
































    //     var split=(date.value.split("-"));
    // console.log(split);
    // var rev=split.reverse();
    // console.log(rev);
    // var joined=rev.join("");
    // console.log(joined);
    //     reverse = date.value.split("-").reverse()[1];
    //     original = date.value.split("-").join("");
    //     console.log(reverse + "\n" + original);

    //     if (reverse === original) {
    //         console.log("palindrome date");
    //     } else {
    //         console.log("not a palindrome");
    //     }