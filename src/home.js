export default function loadHome() {

    const content = document.getElementById("content");

    const home = document.createElement("div");

    const heading = document.createElement("h2");
    heading.textContent = "Welcome to Salman's Restaurant";

    const description = document.createElement("p");
    description.textContent =
        "Experience delicious food made with fresh ingredients and served with exceptional hospitality.";

    const hours = document.createElement("p");
    hours.textContent =
        "Opening Hours: Monday - Sunday | 10:00 AM - 10:00 PM";

    home.appendChild(heading);
    home.appendChild(description);
    home.appendChild(hours);

    content.appendChild(home);

}