
//Slider 
$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 4,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 7000,
    rtl: true,
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
//         const url = '../../index.html/cardsAr.json';
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
            "title_2": "جدول الأعمال١ :  ",
             "title":'المملكة العربية السعودية الإماراتية أفضل 10 مدن مرشحة لبرنامج التصويت',
            "description": "يود مجلس إدارة مجموعة الأعمال والتمويل (BFG) التي تأسست عام 1985 ومجلة نادي الأعمال والتمويل التابع لها، والذي يقع مقره في مدينة دبي للإعلام منذ عام 2003، أن يتقدما بأطيب تحياته.   ",
            "buttons": [
                "حول تعليمات التصويت",
                "حول فوائد التصويت  ",
                " نبذة عن أفضل 10 مرشحين سعوديين وإماراتيين في المدينة "
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title_2": "جدول الأعمال٢ :  ",
             "title":'المملكة العربية السعودية الإماراتية أفضل 10 مدن مرشحة لبرنامج التصويت',
            "description": "يود مجلس إدارة مجموعة الأعمال والتمويل (BFG) التي تأسست عام 1985 ومجلة نادي الأعمال والتمويل التابع لها، والذي يقع مقره في مدينة دبي للإعلام منذ عام 2003، أن يتقدما بأطيب تحياته.   ",
            "buttons": [
                "حول تعليمات التصويت",
                "حول التصويت فوائد",
                "حول تعليمات التصويت"
            ],
            "image": "../assets/images/Group74.png"
        },
        {
            "title_2": "جدول الأعمال٣ :  ",
             "title":"أفضل 100 شركة سعودية إماراتية",
             "description":"",
            "buttons": [
                "حول أفضل 100 شركة",
                "أفضل 10 شركات سعودية إماراتية شهرية",
                "قائمة أفضل 100 شركة سعودية إماراتية",
                "نموذج المعلومات<br> الشهرية",
                "معرض أفضل 100 شركة سعودية إماراتية",
                "موسوعة أفضل 100<br> شركة",
              
            ],
            "image": "../assets/images/agenda3.png"
        },
        {
            "title_2": "جدول الأعمال٤ :  ",
            "title":"إطلاق أفضل 100 منظمة رسمية إماراتية سعودية",
            "description":"",
            "buttons": [
                "عن أفضل 100 منظمة حكومية",
                "أفضل 10 مؤسسات حكومية سعودية إماراتية شهرية",
                "قائمة أفضل 100 مؤسسة حكومية سعودية إماراتية",
                "نموذج المعلومات الشهرية",
                "معرض أفضل 100 مؤسسة حكومية سعودية إماراتية",
                "أفضل 100 موسوعة حكومية",
            ],
            "image": "../assets/images/agenda4.png"
        },
        {
            "title_2": "جدول الأعمال٥ :  ",
             "title":"إطلاق نادي مجلس الأعمال السعودي الإماراتي بين القطاعين العام والخاص",
             "description":"",
             "buttons": [
                "عن نادي مجلس الأعمال العام والخاص",
                "المدن المرشحة لنادي مجلس الأعمال السعودي الإماراتي العام والخاص",
            ],
            "image": "../assets/images/agenda5.png"
        },
        {
            "title_2": "جدول الأعمال٦ :  ",
            "title":"إطلاق كتيب دليل المسافر وخدمات البرامج الخاصة به",
            "description":"",
            "buttons": [
                "عن دليل المسافر",
                "كتيب دليل المسافر",
                "حول خدمات دليل <br>المسافر",
                "دليل المسافر للتسوق عبر <br>الإنترنت",
                "حول خدمات دليل <br>المسافر",
                "أسعار الإعلانات",
                "نموذج معلومات دليل المسافر",
                "جدول أعمال الحملة الترويجية",
            ],
            "image": "../assets/images/agenda6.png"
        },
        {
            "title_2": "جدول الأعمال٧ :  ",
            "title":"إطلاق برنامج العروض الترويجية لمدة 72 ساعة 2022 - 2023",
            "description":"",
            "buttons": [
              "حول برنامج الحملة الترويجية المتعددة",
              "أفضل 10 مدن مرشحة لجدول أعمال الحملة الترويجية",
              "خدمات برنامج الحملة الترويجية",
              "تذاكر برنامج الحملة الترويجية",
              "عقود رعاية القطاع",
              "استمارة التسجيل في البرنامج",
        
            ],
            "image": "../assets/images/agenda7.png"
        },
        {
            "title_2": "جدول الأعمال٨ :  ",
            "title":"توزيع إصدار خاص من الدبابيس المغناطيسية ثلاثية الأبعاد ومنظم المكتب الذكي في اليوم الوطني السعودي 91 واليوم الوطني الإماراتي 50",
            "description": "",
             "buttons": [
                "حول هدايا المشروع",
                "عناصر الهدايا وأسعارها",
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


