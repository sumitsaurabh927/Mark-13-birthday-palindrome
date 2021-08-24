var btn = document.querySelector("#btn")
var date = document.querySelector("#date")
var out=document.querySelector("#output")
function clickHandler() {


    var flag = isPalindrome(date)

    if (flag) {
        // console.log("palindrome");
        out.innerText="Hurray! Your birthday is a palindrome"
    } else {
        // console.log("not a palindorme");
        out.innerText="Alas! Your birthday is not a palindrome"

    }

}

function isPalindrome(date) {
    // console.log(date.value);


    var {
        day,
        month,
        year
    } = getDayMonthYear(date)
    console.log(day, month, year);

    var {
        formatOne,
        formatTwo,
        formatThree,
        reversedOne,
        reversedTwo,
        reversedThree
    } = formatDate(day, month, year)
    console.log(formatOne, formatTwo,
        formatThree,
        reversedOne,
        reversedTwo,
        reversedThree);

    if (
        reversedOne === formatOne ||
        reversedTwo === formatTwo ||
        reversedThree === formatThree
    ) {
        return true;
    } else {
        return false;
    }

    // console.log(day, month, year);

}


btn.addEventListener("click", clickHandler)


function getDayMonthYear(date) {
    return {
        day: date.value.split("-").reverse()[0],
        month: date.value.split("-").reverse()[1],
        year: date.value.split("-").reverse()[2]
    }
}

function formatDate(day, month, year) {

    formatOne = day + month + year
    // console.log(formatOne);

    formatTwo = month + day + year

    formatThree = day + month + year.slice(2)
    // console.log(formatThree)

    reversedOne = formatOne.split("").reverse().join("")

    reversedTwo = formatTwo.split("").reverse().join("")

    reversedThree = formatThree.split("").reverse().join("")

    return {
        formatOne,
        formatTwo,
        formatThree,
        reversedOne,
        reversedTwo,
        reversedThree
    }

}