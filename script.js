/* ==============================
   THEME SWITCH
============================== */

const root = document.documentElement;
const themeButton = document.querySelector("#theme");

themeButton.onclick = () => {

    root.classList.toggle("theme-light");

    if (root.classList.contains("theme-light")) {
        themeButton.textContent = "☾";
    } else {
        themeButton.textContent = "☼";
    }

};


/* ==============================
   MOVING GLOW
============================== */

const orb = document.querySelector(".orb");

window.addEventListener("pointermove", (event) => {

    const x =
        (event.clientX - window.innerWidth / 2) / 12;

    const y =
        (event.clientY - window.innerHeight / 2) / 12;

    orb.style.setProperty("--mx", `${x}px`);
    orb.style.setProperty("--my", `${y}px`);

});


/* ==============================
   SCROLL ANIMATION
============================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },

    {
        threshold: 0.12
    }

);


document
    .querySelectorAll(".reveal")
    .forEach((element) => {

        observer.observe(element);

    });


/* ==============================
   CONTACT BUTTON
============================== */

function showContactMessage() {

    alert(
        "Add your email, LinkedIn or GitHub link here."
    );

}