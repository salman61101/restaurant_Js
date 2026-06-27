export default function loadMenu() {

    const content = document.getElementById("content");

    const menu = document.createElement("div");

    const heading = document.createElement("h2");
    heading.textContent = "Our Menu";

    const items = document.createElement("ul");

    const menuItems = [
        "🍕 Margherita Pizza",
        "🍔 Beef Burger",
        "🍝 Alfredo Pasta",
        "🥗 Caesar Salad",
        "🥤 Fresh Juice"
    ];

    menuItems.forEach(item => {

        const li = document.createElement("li");

        li.textContent = item;

        items.appendChild(li);

    });

    menu.appendChild(heading);
    menu.appendChild(items);

    content.appendChild(menu);

}