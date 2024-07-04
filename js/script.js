const lis = document.getElementsByTagName("li");

const $ = (id) => { return document.getElementById( id ) };

let selected = "";

function select(elem) {
    if (selected) {
        const selDiv = $(selected.id + "_Detail")
        selDiv.style.display = "none";
        selected.classList.remove("sel")
    }
    selected = elem;
    $("wort").innerText = elem.dataset.id
    $("mainTitle").innerText = elem.innerText
    const kursDiv = $(elem.id + "_Detail")
    kursDiv.style.display = "block";
    elem.classList.add("sel");
}

select($("and_g"))

for (const elem of lis) {
    if (!elem.id.startsWith("kmp")) {
        elem.addEventListener("click", () => {
            select(elem);
        })
    }
}

$("footerContent").innerHTML =
    "Copyright 2024 Anton Kölbl, München<br>Diese Webseite speichert keinerlei Benutzerdaten."
