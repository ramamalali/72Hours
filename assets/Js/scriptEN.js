
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
                "About Voting <br> benefits",
                "About Top 10 saudi emirati  candidate <br> city"
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
            "title": " : Top 100 Saudi Emirati Companies ",
            "title_2": " AGENDA 3",
            "description": "",
            "buttons": [
                "About Top 100 Companies",
                "Monthly Saudi <br> Emirati Top 10 Companies",
                "Saudi Emirati <br> Top 100 Companies List",
                "Monthly Information Form",
                "Saudi Emirati Top <br> 100 Companies Exhibition",
                "Top 100 Companies Encyclopedia"
            ],
            "image": "../assets/images/agenda3.png"
        },
        {
            "title": " :Launch of Best 100 Saudi Emirati Official Organisations",
            "title_2": " AGENDA 4",
            "description": "",
            "buttons": [
                "About Best 100 Gov Organisation",
                "Monthly Saudi <br> Emirati Best 10 Gov Organisation",
                "Saudi Emirati <br> Best 100 Gov Organisation List",
                "Monthly Information Form",
                "Saudi Emirati Best <br> 100 Gov Organisation Exhibition",
                "Best 100 Gov Organisation Encyclopaedia"
            ],
            "image": "../assets/images/agenda4.png"
        },
        {
            "title": " : Launch Of Saudi Emirati Public-Private Business Council Club",
            "title_2": " AGENDA 5",
            "description": "",
            "buttons": [
                "About Public Private Business Council <br> Club",
                "Saudi Emirati Public  Private  Business  Council  Club  Candidate Cities",
            ],
            "image": "../assets/images/agenda5.png",
        },
        {
            "title": " :LAUNCH OF TRAVELER GUIDE BOOKLET AND IT'S PROGRAM SERVICES",
            "title_2": " AGENDA 6",
            "description": "",
            "buttons": [
                "About The Traveler Guide",
                "Traveler Guide Booklet",
                "About Traveler Guide Services",
                "Traveler Guide Online Shopping",
                "About Traveler Guide Services",
                "Advertising Rates",
                "Traveler Guide Information Form",
                "Roadshow Agenda",
            ],
            "image": "../assets/images/agenda6.png",
        },
        {
            "title": " :LAUNCH OF 72 HOURS ROAD SHOW PROGRAM 2022 - 2023",
            "title_2": " AGENDA 7",
            "description": "",
            "buttons": [
                "About Multi Roadshow Program",
                "Top 10 Candidate Cities Roadshow Agenda",
                "Roadshow Program Services",
                "Roadshow Program Tickets",
                "Segment Sponsor Contracts",
                "Program Registration Form",
            ],
            "image": "../assets/images/agenda7.png",
        },
        {
            "title": " :Distribution of Special Edition of 3D Magnetic Pins and Smart Desk organiser On Saudi National Day 91 and Emirati National Day 50",
            "title_2": " AGENDA 8",
            "description": "",
            "buttons": [
                "About Project gift items",
                "Gift items and Rates",
            ],
            "image": "../assets/images/agenda8.jpg"
        },
        
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
            <img  dir="rtl" src=${content.image} alt="">
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


