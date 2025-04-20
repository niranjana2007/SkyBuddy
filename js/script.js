const menuToggle = document.getElementById('menuToggle');
 const navLinks = document.getElementById('navLinks');
 menuToggle.addEventListener('click', () => {
   navLinks.classList.toggle('active');
 });
 
 // Dark mode toggle
 const darkModeToggle = document.getElementById('darkModeToggle');
 darkModeToggle.addEventListener('click', () => {
   document.body.classList.toggle('dark');
 });
 
 // Animated character follows cursor
 const character = document.getElementById('character');
 document.addEventListener('mousemove', (e) => {
   character.style.left = `${e.pageX}px`;
   character.style.top = `${e.pageY}px`;
 });
 
 // Optional: Form submission handler
 const form = document.getElementById('applicationForm');
 if (form) {
   form.addEventListener('submit', (e) => {
     e.preventDefault();
     alert('Application submitted successfully!');
     form.reset();
   });
 }
 // Optional: Smooth scroll for navigation links
 const navLink = document.querySelectorAll('.nav-links a');
 
 navLink.forEach(link => {
   link.addEventListener('click', () => {
     // Remove 'active-link' class from all links
     navLink.forEach(nav => nav.classList.remove('active-link'));
     // Add 'active-link' class to the clicked link
     link.classList.add('active-link');
   });
 });
 const observer = new IntersectionObserver((entries) => {
     entries.forEach((entry) => {
       if (entry.isIntersecting) {
         entry.target.classList.add('animate');
       }
     });
   });
   
   document.querySelectorAll('.feature-box').forEach((box) => {
     observer.observe(box);
   });
   document.addEventListener('click', (e) => {
     const starburst = document.createElement('div');
     starburst.className = 'starburst';
     starburst.style.left = `${e.pageX}px`;
     starburst.style.top = `${e.pageY}px`;
     document.body.appendChild(starburst);
   
     setTimeout(() => {
       starburst.remove();
     }, 1000);
   });
   const slider = document.querySelector('.slider');
   const slides = document.querySelectorAll('.testimonial');
   const prevButton = document.querySelector('.prev');
   const nextButton = document.querySelector('.next');
   
   let currentIndex = 0;
   
   function showSlide(index) {
     const slideWidth = slides[0].clientWidth;
     slider.style.transform = `translateX(-${index * slideWidth}px)`;
   }
   
   prevButton.addEventListener('click', () => {
     currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
     showSlide(currentIndex);
   });
   
   nextButton.addEventListener('click', () => {
     currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
     showSlide(currentIndex);
   });
   
   // Auto-slide every 5 seconds
   setInterval(() => {
     currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
     showSlide(currentIndex);
   }, 5000);
   AOS.init();
 //location details
 /*const locationDetails = {
     paris: {
       title: "Paris",
       description: "Paris, the capital of France, is one of the world’s most iconic tourist destinations. Known as the City of Light, it offers a perfect blend of history, art, fashion, and cuisine. Visitors flock to landmarks like the Eiffel Tower, Notre-Dame Cathedral, and the Louvre Museum. With charming cafés, romantic river cruises on the Seine, and picturesque streets, Paris provides an unforgettable experience for travelers. Whether you're exploring the historic Montmartre district, indulging in delicious pastries, or enjoying a leisurely stroll along the Seine, Paris captivates with its timeless beauty and vibrant culture.",
       image: "images/paris.jpeg"
     },
     maldives: {
       title: "Maldives",
       description: "The Maldives is a tropical paradise in the Indian Ocean, famous for its crystal-clear waters, white-sand beaches, and luxurious overwater resorts. Comprising over 1,000 coral islands, it's a top destination for honeymooners, scuba divers, and anyone seeking relaxation. With vibrant marine life, stunning sunsets, and peaceful surroundings, the Maldives offers a perfect escape from the hustle and bustle of everyday life. Whether you're lounging on the beach, snorkeling in coral reefs, or enjoying a spa treatment, the Maldives promises an unforgettable experience. Explore the local culture in here.",
       image: "images/maldives.jpeg"
     },
     tokyo: {
       title: "Tokyo",
       description: "Tokyo, the capital of Japan, is a vibrant mix of traditional culture and futuristic innovation. From historic temples like Senso-ji to towering skyscrapers and neon-lit districts like Shibuya and Shinjuku, Tokyo offers something for every traveler. It's a paradise for food lovers, tech enthusiasts, and anime fans alike. With efficient transport, unique neighborhoods, and a rich cultural heritage, Tokyo is an exciting and unforgettable destination. Whether you're exploring the serene gardens of the Imperial Palace, indulging in sushi at Tsukiji Market, or experiencing the bustling energy of Akihabara, Tokyo is a city that never fails to amaze.",
       image: "images/tokyo.jpeg"
     },
     newyork: {
       title: "New York",
       description: "New York City, often called The Big Apple, is a fast-paced, iconic metropolis known for its towering skyline, diverse culture, and world-famous landmarks. Visitors can explore Times Square, Central Park, the Statue of Liberty, and the Empire State Building, or enjoy Broadway shows and world-class museums like the Met and MoMA. With its vibrant neighborhoods and endless things to see and do, NYC offers an unforgettable urban adventure. Whether you're indulging in street food, shopping on Fifth Avenue, or taking a stroll through Brooklyn Bridge Park, New York City is a place where dreams come true.",
       image: "images/newyork.jpeg"
     },
     monaco: {
       title: "Monaco",
       description: "Monaco is a glamorous and luxurious destination on the French Riviera, known for its upscale casinos, yacht-filled harbor, and the prestigious Monaco Grand Prix. Despite being one of the smallest countries in the world, it offers stunning Mediterranean views, elegant architecture, and a vibrant nightlife. Highlights include the Monte Carlo Casino, the Prince’s Palace, and the Oceanographic Museum. Monaco is perfect for travelers seeking a mix of sophistication, beauty, and excitement. Whether you're enjoying a meal at a Michelin-starred restaurant, exploring the charming streets of Monte Carlo, or relaxing on a private beach, Monaco promises an unforgettable experience.",
       image: "images/monaco.jpeg"
     },
     rome: {
       title: "Rome",
       description: "Rome, the capital of Italy, is a city steeped in history, art, and culture. Known as the Eternal City, it offers iconic landmarks like the Colosseum, Roman Forum, Trevi Fountain, and the Pantheon. Vatican City, home to St. Peter’s Basilica and the Sistine Chapel, lies within Rome’s borders. With its charming piazzas, delicious Italian cuisine, and ancient ruins around every corner, Rome is a must-visit for history lovers and cultural explorers. Whether you're wandering through the cobblestone streets of Trastevere, savoring gelato at the Spanish Steps, or marveling at the art in the Vatican Museums, Rome captivates with its timeless beauty and rich heritage.",
       image: "images/rome.jpeg"
     },
   };
   
   function showDetails(location) {
     const details = locationDetails[location];
     if (details) {
       console.log(`Showing details for: ${location}`, details); // Debugging
       const detailsContent = document.getElementById("detailsContent");
       detailsContent.innerHTML = `
         <h2>${details.title}</h2>
         <img src="${details.image}" alt="${details.title}" style="width:100%; border-radius:10px; margin-bottom:20px;">
         <p>${details.description}</p>
       `;
       document.getElementById("locationDetails").classList.add("active");
     } else {
       console.error(`Details for location "${location}" not found.`);
     }
   }
   
   function closeDetails() {
     document.getElementById("locationDetails").classList.remove("active");
   }*/
 /*nc function fetchLocationDetails(location) {
       try {
         const response = await fetch('locations.json');
         const locationDetails = await response.json();
         const details = locationDetails[location];
         if (details) {
           const detailsContent = document.getElementById("detailsContent");
           detailsContent.innerHTML = `
             <h2>${details.title}</h2>
             <img src="${details.image}" alt="${details.title}" style="width:100%; border-radius:10px; margin-bottom:20px;">
             <p>${details.description}</p>
           `;
           document.getElementById("locationDetails").classList.add("active");
         } else {
           console.error(`Details for location "${location}" not found.`);
         }
       } catch (error) {
         console.error("Error fetching location details:", error);
       }
     }
     
     function closeDetails() {
       document.getElementById("locationDetails").classList.remove("active");
     }*/
       function showDetails(element) {
         const title = element.getAttribute('data-title');
         const description = element.getAttribute('data-description');
         const image = element.getAttribute('data-image');
       
         const detailsContent = document.getElementById("detailsContent");
         detailsContent.innerHTML = `
           <h2>${title}</h2>
           <img src="${image}" alt="${title}" style="width:100%; border-radius:10px; margin-bottom:20px;">
           <p>${description}</p>
         `;
         document.getElementById("locationDetails").classList.add("active");
       }
       
       function closeDetails() {
         document.getElementById("locationDetails").classList.remove("active");
       }
 
  /*   const slide = document.querySelector('.slider');
       let currentInde = 0;
       
       function autoSlide() {
         currentIndex = (currentInde+ 1) % 3; // Assuming 3 slides
         slider.style.transform = `translateX(-${currentIndex * 100}%)`;
       }
       
       setInterval(autoSlide, 5000); // Slide every 5 seconds*/
     