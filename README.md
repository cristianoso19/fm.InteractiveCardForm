# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./images/screenshot.webp)

### Links

- Solution URL: [Github](https://github.com/cristianoso19/fm.InteractiveCardForm)
- Live Site URL: [Vercel deployment](https://fm-interactive-card-form.vercel.app/)

## My process
I start this project with mobile first mentality, i apply a lot of new concepts. Is awesome build this things.
### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [TailwindCss](https://tailwindcss.com/) - JS library

### What I learned

During my development journey, I've had the opportunity to delve into more advanced aspects of web programming. One achievement I'd like to highlight is my mastery of regular expressions in JavaScript for data validation. As an aspiring senior programmer, I understand the importance of ensuring the integrity of the data I handle in my applications. Regular expressions have become an essential tool for performing this task with precision.

Furthermore, I've expanded my skill set in design and presentation using Tailwind CSS. I haven't just limited myself to applying the predefined classes it offers; I've also created my own custom CSS elements to bring unique and appealing designs to life. Tailwind's versatility has allowed me to design elegant and functional user interfaces.

In terms of animations, I've explored the possibilities of enhancing the user experience through transitions and visual effects. This not only adds a touch of professionalism to my projects but also improves user usability and interaction.

In the realm of form validation, I've effectively used the array.every() function in JavaScript. This function has allowed me to efficiently validate multiple inputs, ensuring that all necessary criteria are met before processing the data. This technique has proven highly beneficial in applications where data accuracy and security are paramount.


```css
/*Animations and elements created on tailwind base*/
@layer components {
    .bordered-gradient{
        border: double 4px transparent;
        border-radius: 6px;
        background-image: linear-gradient(white, white), 
                          linear-gradient(to right,hsl(249, 99%, 64%),hsl(278, 94%, 30%));
        background-origin: border-box;
        background-clip: padding-box, border-box;
    }

    .card-shadow {
        filter: drop-shadow(13px 13px 20px rgba(0,0,0,0.2));
    }

    .fade-in {
        /* animation-delay: 1s; */
	    animation: fade-in 1s 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }

    .fade-out {
        animation: fade-out 0.3s ease-out both;
    }

    @keyframes fade-in {
        0% {
        opacity: 0;
        }
        100% {
        opacity: 1;
        }
    }

    @keyframes fade-out {
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
          display: none;
        }
    }
}
```
```js
/*Validation with array.every function*/
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if (validateForm()) {
    document.querySelector('form').classList.add('fade-out');
    // document.querySelector('form').classList.add('hidden');
    success.classList.remove('hidden');
    success.classList.add('fade-in');
  }
});

function validateForm(){
  const conditions = [
    reviewCardholderName(), 
    reviewCardholderNumber(), 
    reviewCardholderMonth(), 
    reviewCardholderYear(), 
    reviewCvc()
  ];
  const allConditionsMet = conditions.every(condition => condition === true);

  if (allConditionsMet){
    return true;
  }else{
    return false;
  }
}

```

## Author

- Website - [Cristian Sacta](https://www.jomron.com)
- Frontend Mentor - [@cristianoso19](https://www.frontendmentor.io/profile/cristianoso19)
- Twitter - [@cristianoso19](https://www.twitter.com/cristianoso19)


