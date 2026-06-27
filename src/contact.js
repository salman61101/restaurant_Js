export default function loadContact() {

    const content = document.getElementById("content");

    const contact = document.createElement("div");

    const heading = document.createElement("h2");
    heading.textContent = "Contact Us";

    const phone = document.createElement("p");
    phone.textContent = "📞 +92 300 1234567";

    const email = document.createElement("p");
    email.textContent = "📧 info@salmansrestaurant.com";

    const address = document.createElement("p");
    address.textContent = "📍 Islamabad, Pakistan";

    contact.appendChild(heading);
    contact.appendChild(phone);
    contact.appendChild(email);
    contact.appendChild(address);

    content.appendChild(contact);

}