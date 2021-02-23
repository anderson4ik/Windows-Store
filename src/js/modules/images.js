const images = () => {
   const imgPopup = document.createElement('div'),
         workSection = document.querySelector(".works"),
         bigImage = document.createElement('img');

   imgPopup.classList.add('popup'); // adding to element class css of modal window
   workSection.appendChild(imgPopup);
   
   imgPopup.style.justifyContent = 'center';
   imgPopup.style.alignItems = 'center';
   imgPopup.style.display = 'none';

   imgPopup.appendChild(bigImage);

   workSection.addEventListener('click', (e) => {
       e.preventDefault(); // to prevent default behaive of link element <a>
       const target = e.target;

       if(target && target.classList.contains("preview")) {
           imgPopup.style.display = 'flex'; // to show modal window
           const path = target.parentNode.getAttribute('href'); // getting path to big img from parent element <a>
           bigImage.setAttribute('src', path); // setting attr src of bigImage to path
           document.body.style.overflow = "hidden"; // to prevent scrolling the page when modal is active
       }

       if(target && target === imgPopup) {
           imgPopup.style.display = 'none';
           document.body.style.overflow = ""; // to allow scrolling the page
       }
   });
};

export default images;