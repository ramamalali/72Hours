
//Slider 
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    /*     rtl: true, */
    variableWidth: true,
    responsive: [
        {
            breakpoint: 850,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 650,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
document.addEventListener('DOMContentLoaded', async function () {
    const cardItems = [
        {
            "title": " : SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "title_2": " AGENDA 1",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " : SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "title_2": " AGENDA 2",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " : SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "title_2": " AGENDA 3",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " : SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "title_2": " AGENDA 4",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " : SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "title_2": " AGENDA 5",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " : SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "title_2": " AGENDA 6",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " : SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "title_2": " AGENDA 7",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " : SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "title_2": " AGENDA 8",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " : SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "title_2": " AGENDA 9",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " : SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "title_2": " AGENDA 10",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        }
    ]

    const cardWrapper = document.querySelector('.OF-wrapper');
    const cardsContainer = document.querySelector('.OF-cards');
    const indexContainer = document.querySelector('.OF-index');

    // Clear existing cards and index
    cardsContainer.innerHTML = '';
    indexContainer.innerHTML = '';

    // Generate cards dynamically from the array
    cardItems.forEach((content, index) => {
        cardsContainer.innerHTML += `<div class="OF-card">
        <div class="OF-card-image">
            <img dir="rtl" src=${content.image} alt="">
        </div>
        <div class="OF-card-content">
            <div class="OF-card-title">
                <h1 class="card-title-h1">
                ${content.title_2}
                    <span class="card-title-span">
                    ${content.title}
                    </span> 
                </h1>
                <p>
                    ${content.description}
                </p>
                <div class="OF-buttons">
                ${content.buttons?.map((button) => `
                    <button class="OF-first-button">
                        ${button}
                    </button>
                `).join('')}
            </div>
            </div>
        </div>`

        // Generate index dynamically from the array index
        const indexItem = document.createElement('div');
        indexItem.classList.add('current-index');
        const paddedIndex = String(index + 1).padStart(2, '0');
        indexItem.textContent = paddedIndex;
        indexContainer.appendChild(indexItem);
        indexItem.addEventListener('click', () => setActiveCard(index));
    });
    let currentCardIndex = 0;
    let currentIndex = 0;
    const cards = document.querySelectorAll('.OF-card');
    const indexItems = document.querySelectorAll('.current-index');
    setActiveCard(currentCardIndex);
    function setActiveCard(index) {
        cards.forEach((card, i) => {
            if (index < currentIndex) {
                if (cards[index+1]) {
                    cards[index+1].style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
                    cards[index+1].style.transform = `translateY(${-100 * index + 1}%)`;
                    cards[index+1].style.opacity = '0';
                }
                card.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
                card.style.transform = `translateY(${-100 * index}%)`;
                card.style.opacity = '1';
    
            } else if (i <= index) {
                card.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
                card.style.transform = `translateY(${-100 * index}%)`;
                card.style.opacity = '1';
            }
        });
    
        indexItems.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    
        // Update the index position to keep the active number in the middle
        const activeIndexItem = document.querySelector('.current-index.active');
        const indexContainerHeight = indexContainer.clientHeight;
        const activeIndexItemHeight = activeIndexItem.clientHeight;
        const offset = activeIndexItem.offsetTop - (indexContainerHeight / 2) + (activeIndexItemHeight / 2);
        indexContainer.scrollTop = offset;
        currentIndex = index;
    }

    function scrollHandler(event) {
        event.preventDefault()
        event.stopImmediatePropagation()
        if (event.deltaY > 0 && currentCardIndex < cards.length - 1) {
            currentCardIndex++;
        } else if (event.deltaY < 0 && currentCardIndex > 0) {
            currentCardIndex--;
        }
        setActiveCard(currentCardIndex);
    }
    cardWrapper.addEventListener('wheel', scrollHandler);
});


