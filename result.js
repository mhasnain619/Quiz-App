let remarks = document.getElementById("remarks")
document.getElementById("obtain").innerHTML = `
 ${localStorage.getItem("Marks")}`
if (`${localStorage.getItem("Marks")}` < 25) {
    document.getElementById("remarks").innerHTML = "&nbsp Sorry you Fail"
} else if (`${localStorage.getItem("Marks")}` <= 30) {
    document.getElementById("remarks").innerHTML = "&nbsp pass"
}
else if (`${localStorage.getItem("Marks")}` >= 35) {
    document.getElementById("remarks").innerHTML = "&nbsp Exelent"
}

