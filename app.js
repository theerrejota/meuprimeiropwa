document.addEventListener('DOMContentLoaded', () => {
    const cars = [
        {
            name: 'Ferrari F8 Tributo',
            image: 'https://s2-autoesporte.glbimg.com/PJVx-woD-SAuruWKPoO1KvmeTfg=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/8/g/Sux9niQ3AYKbeLGaHiAg/2019-02-28-ferrari-f8-tributo-2020-1600-01.jpg',
            description: 'Uma supercarro italiana de alto desempenho.',
        },
        {
            name: 'Tesla Model S',
            image: 'https://quatrorodas.abril.com.br/wp-content/uploads/2021/01/Tesla-Model-S-2021-5.jpeg?crop=1&resize=1212,909',
            description: 'Sedã elétrico com grande autonomia e tecnologia avançada.',
        },
        {
            name: 'Lamborghini Huracán',
            image: 'https://quatrorodas.abril.com.br/wp-content/uploads/2022/11/Lamborghini-Huracan-Tecnica-28-e1683845819968.jpg?crop=1&resize=1212,909',
            description: 'Um dos supercarros mais rápidos do mundo.',
        },
    ];

    const carList = document.getElementById('car-list');

    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h2>${car.name}</h2>
            <p>${car.description}</p>
        `;
        carList.appendChild(carElement);
    });
});
