"use strict"

import Home         from './views/pages/Home.js'
import Collections from './views/pages/Collections.js'
import ArtWork from './views/pages/ArtWork.js'
import Profile from './views/pages/Profile.js'
import CreatePost from './views/pages/CreatePost.js'

import Utils        from './services/Utils.js'
import Topbar from './views/components/TopBar.js'
import NavBar from './views/components/NavBar.js'

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'                     : Home
    , '/collections'        : Collections
    , '/artwork'            : ArtWork
    , '/profile'            : Profile
    , '/createpost'         : CreatePost
}

// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
const router = async () => {

    //load view element and btns
    const topBar = document.getElementById('top-bar'),
        contianer = document.getElementById('page_container'),
        navBar= document.getElementById('nav-bar')


    // Render the topbar and navbar
    topBar.innerHTML = await Topbar.render()
    await NavBar.after_render()
    navBar.innerHTML = await NavBar.render()
    await NavBar.after_render()


    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()
    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    //Change navbar styles according to current page
    navigateStyle(parsedURL)
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Home
    contianer.innerHTML = await page.render()
    await page.after_render()
  
}

const navigateStyle = async (url) => {
    const icoDisable = 'rgba(137, 43, 226, 0.52)',
        icoActive = 'bluebiolet'
    const  homeIco = document.getElementById('home-ico'),
        collectIco = document.getElementById('collect-ico'),
        artIco = document.getElementById('art-ico'),
        profIco = document.getElementById('prof-ico'),
        plusIco = document.getElementById('plus-ico')
        title = document.getElementById('title')

    homeIco.style.color = url === '/' ? icoActive : icoDisable
    collectIco.style.color = url === '/collections' ? icoActive : icoDisable
    artIco.style.color = url === '/artwork' ? icoActive : icoDisable
    profIco.style.color = url == '/profile' ? icoActive : icoDisable

    title.innerText = url === '/' ? 'FlORIN' 
        : url === '/collections' ? 'My Collections' 
        : url === '/artwork' ? 'My Artworks' 
        : url === '/createpost' ? 'Create New Post'
        : url === '/profile' ? 'Profile'
        : 'FlORIN'
}

// Listen on hash change:
window.addEventListener('hashchange', router)

// Listen on page load:
window.addEventListener('load', router)
