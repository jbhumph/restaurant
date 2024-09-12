import picture from "./images/vegan-lasagna-1-2.jpg";

export const load = () => {
    const content = document.querySelector('#content');

    /* Title */
    const title = document.createElement('h1');
    title.innerText = "Isabela's";
    content.appendChild(title);

    /* First Paragraph */
    const p1 = document.createElement('div');
    p1.classList.add('p1');
    p1.innerText = "Welcome to Isabella's, Bellingham’s premier modern vegan Italian restaurant. Rooted in tradition but reimagined for today, Isabella’s offers a fresh, plant-based take on classic Italian cuisine. Our menu is crafted with the finest locally-sourced, organic ingredients, ensuring that every dish is not only delicious but also sustainable. Whether you’re craving creamy pastas, wood-fired pizzas, or our signature vegan tiramisu, Isabella's brings bold flavors and a vibrant dining experience to the heart of the Pacific Northwest."
    content.appendChild(p1);

    /* Second Paragraph */
    const bar = document.createElement('div');
    bar.classList.add('bar');

    const image = document.createElement('img');
    image.src = picture;
    bar.appendChild(image);

    const p2 = document.createElement('div');
    p2.classList.add('p2');
    p2.innerText = "At Isabella's, we believe in more than just great food — we’re passionate about nourishing both people and the planet. Our commitment to eco-friendly practices extends from our kitchen to our community, with zero-waste initiatives, recyclable packaging, and a focus on reducing our carbon footprint. Whether you’re dining in or taking out, you can feel good knowing your meal supports a healthier, greener future. Come join us and experience the art of Italian dining, vegan-style!"
    bar.appendChild(p2);

    content.appendChild(bar);
}