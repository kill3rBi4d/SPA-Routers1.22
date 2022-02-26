"use strict"

import Home from './views/pages/Home.js'
import Explore from './views/pages/Explore.js'
import NewPost from './views/pages/NewPost.js'
import Collections from './views/pages/Collections.js'
import Profile from './views/pages/Profile.js'
import Error404 from './views/pages/Error404.js'

import Utils        from './services/Utils.js'
import Topbar from './views/components/TopBar.js'
import NavBar from './views/components/NavBar.js'
import Router from './literals/Router2.0.js'

// List of supported routes. Any url other than these routes will throw a 404 error
// const routes = {
//     '/'                     : Home
//     , '/explore'            : Explore
//     , '/collections'        : Collections
//     , '/profile'            : Profile
//     , '/explore-post'     : Explore
// }
let categories = [
    'video',
    'food',
    'pets',
    'science',
    'religion',
    'movies',
    'nature',
    'education',
    'music',
    'travel',
    'books',
    'cars',
    'technology',
    'fashion',
    'articles',
    'memes',
    'quotes',
    'health',
    'communition',
    'industrial'
]



// let offRoutes = {}
const router = new Router({
    mode: 'hash',
    root: '/'
});

const topBar = document.getElementById('top-bar'),
        contianer = document.getElementById('page_container'),
        navBar= document.getElementById('nav-bar')

// console.log(parsedURL)
// let _url = window.location.pathname

// console.log(_url)

// Render the topbar and navbar
// topBar.innerHTML = await Topbar.render()
// await topBar.after_render()
// navBar.innerHTML = await NavBar.render()
// await NavBar.after_render()


router
.add(/profile/, async () => {
    contianer.innerHTML = await Profile.render()
    navigateStyle()
    Profile.after_render() 
})
.add(/explore/, async () => {
    navigateStyle()
    contianer.innerHTML = await Explore.render()
    Explore.after_render()
})
.add('', async () => {
    navigateStyle()
    contianer.innerHTML = await Home.render()
    Home.after_render()
})

//create new user (test)
let _email = 'yasvan@irismail.com',
    _pass = 'pwd12'

async function createNewAccount(){
    try{
        const user = await firebase.auth().createUserWithAndPassword(_email, _pass)
        console.log(user.uid)
    }catch(error){
        console.log(error)
    }
}

/// The router code. Takes a URL, checks against the list of supported routes and then renders the corresponding content page.
// const router = async () => {
//     //load view element and btns
//     const topBar = document.getElementById('top-bar'),
//         contianer = document.getElementById('page_container'),
//         navBar= document.getElementById('nav-bar')


//     // Render the topbar and navbar
//     topBar.innerHTML = await Topbar.render()
//     await NavBar.after_render()
//     navBar.innerHTML = await NavBar.render()
//     await NavBar.after_render()


//     // Get the parsed URl from the addressbar
//     let request = Utils.parseRequestURL()
//     // Parse the URL and if it has an id part, change it with the string ":id"
//     let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
//     //get offroutes
//     offRoutes = {
//         '/createpost': Object.values(routes)
//        ,'/menu': Home
//        ,'/setting-menu': Profile
//     }
//     //Change navbar styles according to current page
//     navigateStyle(parsedURL)
//     // Get the page from our hash of supported routes.
//     // If the parsed URL is not in our list of supported routes, select the 404 page instead
//     let page = routes[parsedURL] ? routes[parsedURL] : Error404  
//     contianer.innerHTML = await page.render()
//     await page.after_render()

//     //prevent default scroll
//     document.body.style.position = parsedURL == '/explore-post' ? 'fixed' : ''
//     document.body.style.top = parsedURL == '/explore-post' ? `-${window.scrollY}px` : ''
//     const scrollY = document.body.style.top;
//     if(parsedURL !== '/explore-post'){
//         window.scrollTo(0, parseInt(scrollY || '0') * -1)
//     }
// }

navigateStyle()
// console.log(parsedURL)
function navigateStyle (){
    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()
    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    const srcLink = '/src/props/icons/'
    let isnotification = true,
        isoptionmenu = false
    const icoDisable = 'rgba(137, 43, 226, 0.52)',
        icoActive = 'bluebiolet'
    const  homeIco = document.getElementById('home-ico'),
        exploreIco = document.getElementById('explore-ico'),
        // collectionIco = document.getElementById('collection-ico'),
        profIco = document.getElementById('prof-ico'),
        plusIco = document.getElementById('plus-ico'),
        title = document.getElementById('title'),
        logo = document.getElementById('logo'),
        homeBtn = document.getElementById('home-btn'),
        exploreBtn = document.getElementById('explore-btn'),
        chatBtn = document.getElementById('chat-btn'),
        profileBtn = document.getElementById('profile-btn'),
        backBtn = document.getElementById('back-btn'),
        fToggle = document.getElementById('friends-toggle'),
        nToggle = document.getElementById('notification-toggle')
        // toggle = document.getElementById('header-toggle')


    backBtn.addEventListener('click', () => {
        setTimeout(() => {
            history.back() 
        }, 100)
    })
    let isHome = true,
        isExplore = false,
        isChat = false,
        isProfile = false
    fToggle.style.display = parsedURL === '/chats' ? 'none' 
                : parsedURL === '/notifications' ? 'none' 
                : parsedURL === '/profile' ? 'none'
                : 'flex'
    nToggle.style.display = parsedURL === '/chats' ? 'none' 
                : parsedURL === '/notifications' ? 'none' 
                : parsedURL === '/profile' ? 'none'
                : 'flex' 
    backBtn.style.display = parsedURL === '/chats' ? 'flex' 
                : parsedURL === '/profile' ? 'flex'
                : 'none'
    homeIco.src = parsedURL === '/' ? srcLink+'home-fill.svg' : srcLink + 'home.svg'
    exploreIco.src = parsedURL === '/explore' ? srcLink+'explore-fill.svg' : srcLink+'explore.svg'
    // collectionIco.src = parsedURL === '/collections' ? srcLink+'collection-fill.svg' : srcLink+'collection.svg'
    profIco.style.color = parsedURL == '/profile' ? icoActive : icoDisable
    plusIco.style.display = parsedURL !== '/' ? 'none' : 'flex'
    title.innerText = parsedURL === '/' ? '' 
        : parsedURL === '/explore' ? 'Explore' 
        : parsedURL === '/creatpost' ? '' 
        : parsedURL === '/collections' ? 'My Collections'
        : parsedURL === '/profile' ? 'Profile'
        : parsedURL === '/setting-menu' ? 'Profile'
        : parsedURL === '/notifications' ? 'Notifications'
        : parsedURL === '/friends' ? 'Friends'
        : parsedURL === '/chats' ? 'Chats'
        : ''
    logo.style.display = parsedURL === '/' ? 'flex'
        : parsedURL === '/createpost' ? 'flex' 
        : parsedURL === '/menu' ? 'flex'
        : parsedURL === '/friends' ? 'none'
        : 'none'

    // console.log(parsedURL)
    // toggle.setAttribute(
    //     'href',
    //     parsedURL === '/profile' ? '/#/setting-menu'
    //     : '/#/notifications'
    // )

    // homeBtn.addEventListener('click', () => {
    //     setTimeout(() => {
    //         isHome = true;isExplore = false;
    //         isChat = false;isProfile = false
    //         // getCondition(isHome, isExplore, isChat, isExplore)
    //         applyEffects()
    //         console.log(isHome ? 'home' : '')
    //     }, 50)
    // })
    // exploreBtn.addEventListener('click', () => {
    //     setTimeout(() => {
    //         isHome = false;isExplore = true;
    //         isChat = false;isProfile = false
    //         // getCondition(isExplore, isHome, isChat, isProfile)
    //         console.log(isExplore ? 'explore' : '')
    //         applyEffects()
    //     }, 50)
    // })
    // chatBtn.addEventListener('click', () => {
    //     setTimeout(() => {
    //         isHome = false;isExplore = false;
    //         isChat = true;isProfile = false
    //         // getCondition(isChat, isHome, isExplore, isProfile)
    //         console.log(isChat ? 'chats' : '')
    //         applyEffects()
    //     }, 50)
    // })
    // profileBtn.addEventListener('click', () => {
    //     setTimeout(() => {
    //         isHome = false;isExplore = false;
    //         isChat = false;isProfile = true
    //         // getCondition(isProfile, isHome, isChat, isExplore)
    //         console.log(isProfile ? 'profile' : '')
    //         applyEffects()
    //     }, 50)
    // })
    // function getCondition(_a, _b, _c, _d){
    //     _a = true
    //     _b = false
    //     _c = false
    //     _d = false
    // }
    // function applyEffects(){
    //     homeIco.src = isHome ? srcLink+'home-fill.svg' : srcLink + 'home.svg'
    //     exploreIco.src = isExplore ? srcLink+'explore-fill.svg' : srcLink+'explore.svg'
    //     // collectionIco.src = con === '/collections' ? srcLink+'collection-fill.svg' : srcLink+'collection.svg'
    //     // profIco.style.color = con == '/profile' ? icoActive : icoDisable
    //     plusIco.style.display = !isHome ? 'none' : 'flex'
    //     title.innerText = isHome ? '' 
    //         : isExplore ? 'Explore' 
    //         : isChat ? 'Chats' 
    //         : isProfile ? 'Profile'
    //         : ''
    //     logo.style.display = isHome ? 'flex' : 'none'
    // }
    // homeIco.src = isHome ? srcLink+'home-fill.svg' : srcLink + 'home.svg'
    // exploreIco.src = url === '/explore' ? srcLink+'explore-fill.svg' : srcLink+'explore.svg'
    // // collectionIco.src = url === '/collections' ? srcLink+'collection-fill.svg' : srcLink+'collection.svg'
    // profIco.style.color = url == '/profile' ? icoActive : icoDisable
    // plusIco.style.display = url !== '/' ? 'none' : 'flex'
    // title.innerText = url === '/' ? '' 
    //     : url === '/explore' ? 'Explore' 
    //     : url === '/creatpost' ? '' 
    //     : url === '/collections' ? 'My Collections'
    //     : url === '/profile' ? 'Profile'
    //     : url === '/setting-menu' ? 'Profile'
    //     : url === '/notifications' ? 'Notifications'
    //     : ''
    // logo.style.display = url === '/' ? 'flex'
    //     : url === '/createpost' ? 'flex' 
    //     : url === '/menu' ? 'flex'
    //     : 'none'
    
    // console.log(url)
    // toggle.setAttribute(
    //     'href',
    //     url === '/profile' ? '/#/setting-menu'
    //     : '/#/notifications'
    // )
}

// for(let a = 0; a <= categories.length-1; a++){
//     let insertFolder = firebase.database().ref(`root/usr`);
//     insertFolder.push().set({
//         'about': {
//             'name': 'Muhammed Barry',
//             'email': 'm@iris.mail.com',
//             'phone': '06444232323',
//             'profileImage' : 'https://this-person-does-not-exist.com/img/avatar-691b0302f202b5c95f3c8a37606fc336.jpg',
//             'location' : 'Aceh, Indonesia',
//             'bio' : ' I realy like the view from here, here is the link to full photo album. https://bith3skdf.plantcode',
//             'cover' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F288299-forest-landscape.jpg&f=1&nofb=1'
//         },
//         'photos': {
//             'cover' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F288299-forest-landscape.jpg&f=1&nofb=1'
//         },
//         'following': {
//             'name': 'Muhammed Barry',
//             'profileImage' : 'https://this-person-does-not-exist.com/img/avatar-691b0302f202b5c95f3c8a37606fc336.jpg',
//             'location' : 'Aceh, Indonesia',
//         },
//         'followers': {
//             'name': 'Muhammed Barry',
//             'profileImage' : 'https://this-person-does-not-exist.com/img/avatar-691b0302f202b5c95f3c8a37606fc336.jpg',
//             'location' : 'Aceh, Indonesia',
//         },
//         'friends': {
//             'name': {
//                 'name': 'Muhammed Barry',
//                 'profileImage' : 'https://this-person-does-not-exist.com/img/avatar-691b0302f202b5c95f3c8a37606fc336.jpg',
//                 'location' : 'Aceh, Indonesia',
//                 'chats': {
//                     'user': {
//                         'messege': 'Hi',
//                         'date': '12/22/2022',
//                         'time': '12:32 AM'
//                     },
//                     'client': {
//                         'messege': 'Hello!',
//                         'date': '12/22/2022',
//                         'time': '12:32 AM'
//                     }
//                 }
//             }
//         },
//         'posts': {
//             'profileImage' : 'https://this-person-does-not-exist.com/img/avatar-691b0302f202b5c95f3c8a37606fc336.jpg',
//             'title' : 'What a nice breeze of the forest ☺',
//             'content' : ' I realy like the view from here, here is the link to full photo album. https://bith3skdf.plantcode',
//             'image' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F288299-forest-landscape.jpg&f=1&nofb=1',
//             'comments': {
//                 'name': 'Muhammed Barry',
//                 'profileImage' : 'https://this-person-does-not-exist.com/img/avatar-691b0302f202b5c95f3c8a37606fc336.jpg',
//                 'comment' : ' I realy like the view from here, here is the link to full photo album. https://bith3skdf.plantcode',
//                 'replies': {
//                     'name': 'Muhammed Barry',
//                     'profileImage' : 'https://this-person-does-not-exist.com/img/avatar-691b0302f202b5c95f3c8a37606fc336.jpg',
//                     'reply' : ' I realy like the view from here, here is the link to full photo album. https://bith3skdf.plantcode',
//                     'likes': {
//                         'name': 'Muhammed Barry',
//                     }
//                 },
//                 'likes': {
//                     'name': 'Muhammed Barry'
//                 }
//             }
//         },
//         'liked': {
            
//         },
//         'collection': {
//             'name': 'User name',
//             'profileImage' : 'https://this-person-does-not-exist.com/img/avatar-691b0302f202b5c95f3c8a37606fc336.jpg',
//             'image' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F288299-forest-landscape.jpg&f=1&nofb=1',
//         }
//     })
// }
//scroll sneak

// Listen on hash change:
// window.addEventListener('hashchange', router)

// // Listen on page load:
// window.addEventListener('load', router)
