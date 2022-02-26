function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
}	
function replaceURLs(str) {
  if(!str) return;
 
  var urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return str.replace(urlRegex, function (url) {
    var hyperlink = url;
    if (!hyperlink.match('^https?:\/\/')) {
      hyperlink = 'http://' + hyperlink;
    }
    return '<a href="' + hyperlink + '" target="_blank" rel="noopener noreferrer">' + url + '</a>'
  });
}
 
const Utils = { 
    // --------------------------------
    //  Parse a url and break it into resource, id and verb
    // --------------------------------
    parseRequestURL : () => {

        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/")
        let request = {
            resource    : null,
            id          : null,
            verb        : null
        }
        request.resource    = r[1]
        request.id          = r[2]
        request.verb        = r[3]

        return request
    }

    // --------------------------------
    //  Simple sleep implementation
    // --------------------------------
    , sleep: (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
}
function calculatePeriod(date){
    return moment(date, 'YYYYMMDD').fromNow()
}

const usrname = 'Raven McRandom',
    comments = 12300,
    comment = 'I realy like the view from here, here is the link to full photo album. https://bith3skdf.bitcod I realy like the view from here, here is the link to full photo album'
const usrid = 322
let likes = 90099,
    islike = false,
    iscollected = false 


let Home = {
    render : async () => {    
        let view =  /*html*/`
            <section class="home-skeleton" id="home-skeleton">
                <div class="skelimate"></div>
                <div class="skel-1">
                    <div class="s-1"></div>
                    <div class="s-2"></div>
                </div>
                <div class="skel-2">
                    <div class="c">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="p-0"></div>
            </section>
            <!-- page contents --->
            <section class="home" id="home-page">
                <!--- Share post -->
                <section class="share-post-wrapper">
                    <div class="s-wrapper">
                        <div class="prof-img">
                            <img src="/src/imgs/profTest.jpg" />
                        </div>
                        <div class="post-input-container">
                            <span>What's on your mind?</span>
                        </div>
                    </div>
                </section>
                <!--- Friend suggestions -->
                <section class="friend-sugg-wrapper">
                    <div class="top-tile">
                        <span class="tt-text">Friend suggestions</span>
                        <div class="tt-btn">
                            <span>View</span>
                            <img src="/src/props/icons/arrow-right-dif.svg" />
                        </div>
                    </div>
                    <div class="bottom-tile">
                        <div class="sug">
                            <img src="/src/imgs/profTest.jpg" />
                        </div>
                        <div class="sug">
                        <img src="/src/imgs/profTest.jpg" />
                        </div>
                        <div class="sug">
                        <img src="/src/imgs/profTest.jpg" />
                        </div>
                        <div class="sug">
                        <img src="/src/imgs/profTest.jpg" />
                        </div>
                        <div class="sug">
                        <img src="/src/imgs/profTest.jpg" />
                        </div>
                    </div>
                </section>
                <!-- post card -->
                <section class="post-container">
                    <div class="post-card">
                        <div class="post-header">
                            <div class="profile-wrapper">
                                <div class="profile-ico ripple">
                                    <img src="src/imgs/profTest.jpg" />
                                </div>
                                <span class="header-content">
                                    <span class="name">${usrname}</span>
                                    <span class="time">
                                        2 weeks ago
                                        <span class="location"> • Lampung, Indonesia</span>
                                    </span>
                                </span>
                                <a href="/#/menu" class="option-toggle ripple">
                                <img src="src/props/icons/more-fill.svg" />
                                </a>
                            </div>
                        </div>
                        <div class="post-content">
                            <div class="post-content-wrapper">
                                <span class="post-title">This is so amazing Tulip garden ☺.</span><br>
                                <span class="post-desc-text" id="description"></span>
                                <span class="more" id="more">Expand</span>
                            </div>
                            <div class="img-frame" id="img-frame">
                                <div class="heart-pop" id="heart-pop">
                                    <svg width="67" height="61" viewBox="0 0 67 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M48.575 0C58.7523 0 67 8.24324 67 19.7838C67 42.8649 41.875 56.0541 33.5 61C25.125 56.0541 0 42.8649 0 19.7838C0 8.24324 8.375 0 18.425 0C24.656 0 30.15 3.2973 33.5 6.59459C36.85 3.2973 42.344 0 48.575 0Z" fill="#C44040"/>
                                    </svg>
                                </div>
                               <img src="src/imgs/iris-image.jpg"  id="post-image"/>
                            </div>
                         </div>
                        <div class="post-footer">
                            <div class="top-footer">
                                <span class="like-counts" id="like-count">${kFormatter(likes)} Likes</span> • 
                                <span class="comment-counts" id="comment-count">${kFormatter(comments)} Comments</span>
                            </div>
                            <div class="bottom-footer">
                                <div class="action-container like" id="like-btn">
                                    <img src="/src/props/icons/like.svg" id="like-icon"/>
                                    <span class="label" id="like-label">Like</span>
                                </div>
                                <div class="action-container comment" id="comment-btn">
                                    <img src="/src/props/icons/comment.svg" />
                                    <span class="label">Comment</span>
                                </div>
                                <div class="action-container share" id="share-btn">
                                    <img src="/src/props/icons/share-1.svg" />
                                    <span class="label">Share</span>
                                </div>
                                <div class="action-container collect-btn" id="collect-btn">
                                    <img src="/src/props/icons/collect.svg" id="collect-ico"/>
                                </div>
                            </div>
                            <div class="collect" id="collected">
                                <span class="saved" id="saved"></span>
                                <a href="/#/collections" class="view">View</a>      
                            </div>
                        </div>
                    </div>
                    <!--- end of contents --->
                    <section class="eoc">
                        <img src="/src/props/icons/fireworks.svg" />
                        <div class="bottom-label">
                            <hr>
                            <span>You're All Caught Up</span>
                        </div>
                    </section>
                </section>
                
                <!--Menu--->
                <section class="menu" id="menu">
                    <div class="menu-container" id="menu-container">
                        <div class="bubble-container">
                            <div class="bubble">
                                <div class="b-icon ripple-dark">
                                    <img src="/src/props/icons/user-plus.svg" />
                                </div>
                                <span class="label">Follow</span>
                            </div>
                            <div class="bubble">
                                <div class="b-icon ripple-dark">
                                    <img src="/src/props/icons/share.svg" />
                                </div>
                                <span class="label">Share</span>
                            </div>
                            <div class="bubble red">
                                <div class="b-icon ripple-red">
                                    <img src="/src/props/icons/alert.svg" />
                                </div>
                                <span class="label">Report</span>
                            </div>
                        </div>
                        <div class="options-container">
                            <div class="option ripple-dark">
                                <span class="hide-post">Hide post</span>
                            </div>
                            <div class="option ripple-dark">
                                <span class="link">Copy link</span>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <!--Post menu-->
            <section class="post-menu" id="post-menu">
                <div class="post-menu-container" id="post-menu-container">
                    <div class="post-bubble-container">
                        <div class="post-bubble">
                            <div class="b-icon ripple-dark">
                                <img src="/src/props/icons/camera.svg" />
                            </div>
                        </div>
                        <div class="post-bubble">
                            <div class="b-icon ripple-dark">
                                <img src="/src/props/icons/gallery.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `
        return view
    }
    , after_render: async () => {
        let _skeleton = document.getElementById('home-skeleton')
        // Get the parsed URl from the addressbar
        let request = Utils.parseRequestURL()
        // Parse the URL and if it has an id part, change it with the string ":id"
        let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

        // let fetchRef = firebase.database().ref('Posts')
        // fetchRef.on('child_added', function(sn){
        //     let id = Math.random(1) + 999;
        //     let val = sn.val()

        //     if(_skeleton != null){
        //         _skeleton.style.display = 'none' 
        //     }
        //     const imgFrame = document.getElementById(`img-frame-${id}`),
        //     heartPop = document.getElementById(`heart-pop-${id}`),
        //     likeIcon = document.getElementById(`like-icon-${id}`),
        //     likeCounts = document.getElementById(`like-count-${id}`),
        //     likeLabel = document.getElementById(`like-label-${id}`),
        //     likeBox = document.getElementById(`like-btn-${id}`),
        //     collectBox = document.getElementById(`collect-btn-${id}`),
        //     collectIoc = document.getElementById(`collect-ico-${id}`),
        //     collectedView = document.getElementById(`collected-${id}`),
        //     saved = document.getElementById(`saved-${id}`),
        //     description = document.getElementById(`description-${id}`),
        //     moreDes = document.getElementById(`more-${id}`),
        //     _menu = document.getElementById(`menu-${id}`),
        //     _postMenu = document.getElementById(`post-menu-${id}`),
        //     _toggleDown = document.getElementById(`toggle-down-${id}`),
        //     _toggleDown1 = document.getElementById(`toggle-down-1-${id}`),
        //     _menuContainer = document.getElementById(`menu-container-${id}`)
        //     let count = 0
            
        //     // let postEl = document.getElementById('post-image')
        //     // new PinchZoom.default(imgFrame, {})
        //     // pv.enable()
        //     imgFrame.addEventListener("dblclick", (event) => {
        //         event.preventDefault()
        //         islike = true
        //         count = islike ? 1 : count
        //         likeIcon.src = islike ? '/src/props/icons/like-fill.svg' : '/src/props/icons/like-fill.svg'

        //         console.log(islike ? 'liked '+count : 'disliked '+count)
        //         likeResponse(heartPop, likeIcon, likeCounts, likeLabel)
        //     })
        //     likeBox.addEventListener('click', () => {
        //         islike = islike === false ? true : false
        //         count = islike ? 1 : 0

        //         likeIcon.src = islike ? '/src/props/icons/like-fill.svg' : '/src/props/icons/like.svg'
        //         likeLabel.innerText = islike ? 'Liked' : 'Like'
        //         likeLabel.style.color = islike ? '#1971FB' : '#626262'
        //         likeIconResponse(likeIcon, likeCounts)
        //         console.log(islike ? 'liked '+count : 'disliked '+count)
        //     })
        //     collectBox.addEventListener('click', () => {
        //         iscollected = !iscollected ? true : false
        //         collectIoc.src = iscollected ? '/src/props/icons/collect-fill.svg' : '/src/props/icons/collect.svg'
        //         saved.innerText = iscollected ? 'Saved to collections' : 'Removed from collections'
        //         collectResponse(collectedView)
        //         console.log(iscollected)
        //     })

        //     function likeResponse(el1, el2, counts, label){
        //         el1.classList.add("liked")
        //         el2.classList.add("on-like")
        //         label.innerText = islike ? 'Liked' : 'Like'
        //         label.style.color = islike ? '#1971FB' : '#626262'
        //         setTimeout(() => {
        //             el1.classList.remove("liked")
        //             el2.classList.remove("on-like")
        //         }, 1200)
        //     }
        //     function likeIconResponse(el1, counts){
        //         el1.classList.add("on-like")
        //         setTimeout(() => {
        //             el1.classList.remove("on-like")
        //         }, 500)
        //     }
        //     function collectResponse(el){
        //         el.classList.add("collected")
        //         setTimeout(() => {
        //             el.classList.remove("collected")
        //         }, 1500)
        //     }

        //     description.innerHTML = comment.length > 102 ? limit(replaceURLs(comment), 100) + '..' : replaceURLs(comment)
        //     moreDes.style.display = description.innerText.length <= 102 ? 'auto' : 'none'
        //     console.log(description.innerText.length)
        //     viewMore(moreDes, description)

        //     function viewMore(a, b){
        //         a.addEventListener('click', () => {
        //             a.innerText = a.innerText === 'Expand' ? 'Collapse' : 'Expand'
        //             b.innerHTML = b.innerHTML.length <= 102 ? replaceURLs(comment) : limit(replaceURLs(comment), 100) + '..'
        //             console.log('more comments clicked')
        //         })
        //     }

        //     let pathname = parsedURL,
        //         isclosemenu = false
        //     //menu --> options
        //     _menu.style.display = pathname === '/menu' ? 'flex' : 'none'
            
        //     //menu --> create post
        //     _postMenu.style.display = pathname === '/createpost' ? 'flex' : 'none'
        //     //close menu
        //     // window.onclick = (e) => {
        //     //     isclosemenu = e.target.matches('.post-menu') 
        //     //         || e.target.matches('.menu') ? true : false
        //     //     console.log(isclosemenu)
        //     //     if(isclosemenu)
        //     //         history.back()
        //     //     console.log(e.target)
        //     // }

        //     let postEl = document.getElementById('post-image')
        //     //pinch zoom
        //     const pinchZoom = (imageElement) => {
        //         let imageElementScale = 1;
                
        //         let start = {};
            
        //     // Calculate distance between two fingers
        //         const distance = (event) => {
        //             return Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
        //         };
            
        //         imageElement.addEventListener('touchstart', (event) => {
        //             // console.log('touchstart', event);
        //             if (event.touches.length === 2) {
        //             event.preventDefault(); // Prevent page scroll
                
        //             // Calculate where the fingers have started on the X and Y axis
        //             start.x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
        //             start.y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
        //             start.distance = distance(event);
        //             }
        //         });
            
        //         imageElement.addEventListener('touchmove', (event) => {
        //             // console.log('touchmove', event);
        //             event.preventDefault()
        //             if (event.touches.length === 2) {
        //             event.preventDefault(); // Prevent page scroll
                
        //             // Safari provides event.scale as two fingers move on the screen
        //             // For other browsers just calculate the scale manually
        //             let scale;
        //             if (event.scale) {
        //                 scale = event.scale;
        //             } else {
        //                 const deltaDistance = distance(event);
        //                 scale = deltaDistance / start.distance;
        //             }
        //             imageElementScale = Math.min(Math.max(1, scale), 4);
                
        //             // Calculate how much the fingers have moved on the X and Y axis
        //             const deltaX = (((event.touches[0].pageX + event.touches[1].pageX) / 2) - start.x) * 2; // x2 for accelarated movement
        //             const deltaY = (((event.touches[0].pageY + event.touches[1].pageY) / 2) - start.y) * 2; // x2 for accelarated movement
                
        //             // Transform the image to make it grow and move with fingers
        //             const transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${imageElementScale})`;
        //             imageElement.style.transform = transform;
        //             imageElement.style.WebkitTransform = transform;
        //             // imageElement.style.position = 'absolute'
        //             imageElement.style.zIndex = "9999";
        //             }
        //         });
            
        //         imageElement.addEventListener('touchend', (event) => {
        //             // console.log('touchend', event);
        //             // Reset image to it's original format
        //             imageElement.style.transform = "";
        //             imageElement.style.WebkitTransform = "";
        //             imageElement.style.position = 'inherit'
        //             imageElement.style.zIndex = "";
        //         });
        //     }
        //     pinchZoom(postEl)
        // })
        
        
    }
}
export default Home;