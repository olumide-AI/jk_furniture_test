# JK Furniture web page design

This web page was built for a project for a pre-apprentenship program with dev/mission. I choose a furniture website for
displaying products and acquiring information about the company

## What's in this project?

← `README.md`: That's this file, where you can tell people what your cool website does and how you built it.

← `index.html`: This is the main HTML page for the site.

← `product.html`: This is the Product page for the site.

← `style.css`: CSS files for all content.

← `script.js`: Javascript code for fetching product.

← `form.js`: Javascript code for backend for the forms.

![Glitch](https://cdn.glitch.com/a9975ea6-8949-4bab-addb-8a95021dc2da%2FLogo_Color.svg?v=1602781328576)

## You built this with Glitch!

[Glitch](https://glitch.com) is a friendly community where millions of people come together to build web apps and websites.

## ← `index.html`:

#### Firstly

- I set the document type to HTML 5, it's the standard right now
- I set english has the default language
  The Head (metadata)
- I set the charcter encoding To UTF-8, it's also the curreent standard
- name =viewport, allows your webpage to be responsive on differnet designs
- rel =icon, browser tab icon
- Attached a bootstrap link for css framework which is hosted on a content delivery network
  Bootstrap has to be the first link cause it take priority, so your stylesheet dosen't overide it
  You can use important! on your css to override bootstrap css
  You can also store bootstrap locally on you computer if you need offline access, instead of using the CDN
- I have my title line
- Then i have links to my js file and stylesheet css.
  js helps web page becaome more interactive
  css help with the color, borders, height and so much more

#### Secondly

- We have our Body(main part of the HTML file )
- As far as i know most webpage start with a NavBar and for conveience sake i just used a bootstrap Nav Bar
- nav - is just HTML semantics for navigation (prioritize accesibilty for users, what content are they going to be navigation to)
- class - (are used to group elements that you want to apply same characteristics to)
  - In the nav we have class navbar navbar-expang-lg bg-body-tetiary
  - navbar is just bootstrap default styling  
    \*-expang-lg helps with responsiveness on differnet devices
  - body-tetiary - is the colour

div - lets us group elements and we can apply specific styling or such. Think of it like a container

<div class="w-100 nav"> will stretch content along the full navbar 
<a class="navbar-brand d-flex align-items-center" href="index.html">
  * This <a is an anchor tag for link(href) and img(src). That is pretty much all i have used it for so far  
  * d flex - (i learnt this using flexbox froggy) but it helps you align you elements 
  * align-item-center: vertically centers the logo and text, bootstrap documentation also helps 
  *I attached my image using img(src) and addded alt(it is an accesibilty thing, in case people can not load your file )
  *A specifically class was added for the logo for accessibillty and readbility i use logo me-3, 
    becasue the me utility in bootstraps allow the logo to be separated from text. It creates that spacing for the design

The next secton was the **button**, this again is a bootstrap function and specifically for smaller screens
*data-bs is bootstrap cooking in the background using bootstrap, i really do not understand what the algorithm
is behind the functions, but my specific code it is for a toggler to expand and collapse. This deals with functionality  
 *aria - Accessible Rich Internet Applications. This allows users esppecially users with diasbaility
to be able to understand your feature.

The last section in the navbar is very essential, We have our links
*We have couple classes here, even me i am getting lost in the in the source with all the classes bootstrap used
*The collapse and navbar- collapse, still boostrap functionality

- <ul class="navbar-nav"> Groups the navigation link
- nav-link is for our various link to different pages or sections in your web app
  \*We also used an id -which helps us specify a unique element

#### Good whole CSS for Navbar
  .nav{ display: flex - turns navbar into a flex property 
        justify-content: space-between - another flexbox froggy tool
  }
  .nav ul (for all the link items) {gap: 1.5rem - adds spacing for just the links on a small screen
  margin & padding = 0
  }
  Added a media query for larger screen (tablet and desktop set the gap to 15rem)
  .nav a (controls the individual nav links {
  font-size(size of letters), font-weight(density of letter), color, transition(animate between 2 states of css property)
  }
  .nav a:hover {color change
                change cursor from point to hand 
  }
  .nav-link.active (active shows which web page you're currently one and it's bolded so users could know what page they're on{
  font-weight: bold; /* Makes the link text bold */
}
  .navbar-collapse {
  flex-grow: 0;  Prevents the collapsible section from growing unnecessarily 
}
# Things i would improve in the Navbar:
  *I will change the backgroung color to black and text white
  
#### Thirdly

-We have our main body
-We have the Welcome video, it's eyecatching and draws people to the website. It is in a class=hero
- <video autoplay loop muted playsinline class="video-background"> this is all HTML 5 attributes, mdn has all the attributes,  
  so much to pick from 
-The class overlay will have to be improved with CSS to give it is pop 
-The final feature on this video page is a botton straight out of bootstrap 
-I also have a poster for a fall back image for places with low accessibilty 
  The CSS for the Overlay 
  position:absolute
  top, left: 50% let the text be center around the video
  transform: translate(-50%, -50%): centering using the video width and height
  z-index allow our text to always stay on top of our video 
  
# Product cards with layout and styling 
  <div class="container py-0"> py-o ensures no spacing between this container and the one on top or at the bottom 
   <div class="row mb-3 align-items-center"> (row is a bootstrap thing, needed for the 12 colum grid system)
    <div class="col-md-6">
  
