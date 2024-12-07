document.getElementById("btn").onclick = function() {
    let a = Math.random();
    let percent = Math.trunc(a * 100);
    let he = document.getElementById("he").value;
    let she = document.getElementById("she").value;
    let result2 = "The love percentage of " + "<span class='person'>" + he + "</span>" + " and " + "<span class='person'>" + she + "</span>" + " is : " + "<span class='hero'>" + percent + "</span>" + "%";
    // let result2 = "hello world"
    document.getElementById("result").innerHTML = result2;
};
