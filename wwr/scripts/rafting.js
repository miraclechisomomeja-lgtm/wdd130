function setupNavigation() {
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#navigation");

    if (!menuButton || !navigation) {
        return;
    }

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("open");

        if (navigation.classList.contains("open")) {
            menuButton.setAttribute("aria-label", "Close navigation menu");
            menuButton.textContent = "✕";
        } else {
            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.textContent = "☰";
        }

    });


    const navigationLinks = document.querySelectorAll("#navigation a");

    navigationLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navigation.classList.remove("open");

            menuButton.setAttribute("aria-label", "Open navigation menu");
            menuButton.textContent = "☰";

        });

    });
}

function setupOutsideMenuClick() {
    const menuButton = document.querySelector("#menu-button");
    const navigation = document.querySelector("#navigation");

    if (!menuButton || !navigation) {
        return;
    }

    document.addEventListener("click", (event) => {

        if (
            navigation.classList.contains("open") &&
            !navigation.contains(event.target) &&
            !menuButton.contains(event.target)
        ) {
            navigation.classList.remove("open");

            menuButton.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

            menuButton.textContent = "☰";
        }

    });
}



function init() {
    setupNavigation();
    setupOutsideMenuClick();

}

init();
