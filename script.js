/* ID Card Animation */

const card =
    document.querySelector(".id-card");

/* Click Animation */

card.addEventListener("click", () => {

    card.style.transform =
        "scale(0.96)";

    setTimeout(() => {

        card.style.transform =
            "";

    }, 180);

});