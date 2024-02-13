
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

//fetch Data For Agenda View
// async function fetchData() {
//     try {
//         // URL of the JSON endpoint 
//         const url = '../../Index.html/cardsEn.json';
//         // Fetch the JSON data 
//         const response = await fetch(url);
//         // Check if the response is successful 
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         // Parse the JSON response 
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         // Handle any errors that occurred during the fetch 
//         console.error('Fetch error:', error);
//     }
// }

document.addEventListener('DOMContentLoaded', async function () {
 const cardItems =  [
        {
            "title": " AGENDA 1: SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " AGENDA 2: SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " AGENDA 3: SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " AGENDA 4: SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " AGENDA 5: SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " AGENDA 6: SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " AGENDA 7: SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " AGENDA 8: SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " AGENDA 9: SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title": " AGENDA 10: SAUDI EMIRATI TOP 10 CANDIDATE CITIES VOTING PROGRAM ",
            "description": "The Board of Directors of the Business and Finance Group (BFG) established in 1985 and its Business and Finance Club Magazine, based in Dubai Media City since 2003 would like to present its best greetings.",
            "buttons": [
                "About voting instruction",
                "About voting instruction",
                "About voting instruction"
            ],
            "image": "../assets/images/Group74.png"
        }
    ]
    // const cardItems = await fetchData();
    const cardWrapper = document.querySelector('.OF-wrapper');
    const cardsContainer = document.querySelector('.OF-cards');
    const indexContainer = document.querySelector('.OF-index');

    // Clear existing cards and index
    cardsContainer.innerHTML = '';
    indexContainer.innerHTML = '';

    // Generate cards dynamically from reponse data (fetch)
    cardItems.forEach((content, index) => {
        cardsContainer.innerHTML += `<div class="OF-card">
        <div class="OF-card-image">
            <img dir="rtl" src=${content.image} alt="">
        </div>
        <div class="OF-card-content">
            <div class="OF-card-title">
                <h1 class="card-title-h1">
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
    const cards = document.querySelectorAll('.OF-card');
    const indexItems = document.querySelectorAll('.current-index');

    setActiveCard(currentCardIndex);

    function setActiveCard(index) {
        cards.forEach((card, i) => {
            if (i === index) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
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
