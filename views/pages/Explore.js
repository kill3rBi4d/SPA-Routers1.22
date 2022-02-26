import Xp from "../../literals/Xp.js"; 
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

const usrname = 'Raven McRandom',
    comments = 12300,
    comment = 'I realy like the view from here, here is the link to full photo album. https://bith3skdf.bitcod I realy like the view from here, here is the link to full photo album'
const usrid = 322
let likes = 90099,
    islike = false,
    iscollected = false,
    isSearching = false,
    startSearch = false,
    isShowResult = false

let Explore = {
    render: async () => {
        return /*html*/ `
            <section class="e-skeleton">
                <div class="skelemate-2"></div>
                <div class="s-coll">
                    <div class="e-1">
                        <span class="ep"></span>
                        <div class="ec">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="e-2">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span class="c-4"></span>
                </div>
                <div class="s-coll">
                    <div class="e-1">
                        <span class="ep"></span>
                        <div class="ec">
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div class="e-2">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <span class="c-4"></span>
                </div>
            </section>
            <section class="explore" id="explore">
                <!-- post card -->
                <section class="post-container" id="post-container">
                </section>
                <!--- end of contents --->
                <section class="eoc">
                    <img src="/src/props/icons/fireworks.svg" />
                    <div class="bottom-label">
                        <hr>
                        <span>You're All Caught Up</span>
                    </div>
                </section>
            </section>
        `
    }
    // All the code related to DOM interactions and controls go in here.
    // This is a separate call as these can be registered only after the DOM has been painted
    , after_render: async () => {
      //post generate test
        let postRef = firebase.database().ref('Posts');
        // postRef.push().set({
        //      'name': 'Muhammed Barry',
        //      'profileImage' : 'https://this-person-does-not-exist.com/img/avatar-691b0302f202b5c95f3c8a37606fc336.jpg',
        //      'location' : 'Aceh, Indonesia',
        //      'title' : 'What a nice breeze of the forest ☺',
        //      'contents' : ' I realy like the view from here, here is the link to full photo album. https://bith3skdf.plantcode',
        //      'image' : 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2016%2F01%2F288299-forest-landscape.jpg&f=1&nofb=1'
        //     })
        // Get the parsed URl from the addressbar
        let request = Utils.parseRequestURL()
        // Parse the URL and if it has an id part, change it with the string ":id"
        let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
        let ref = firebase.database().ref('Posts')
        ref.on('child_added', function(snapshot){
            console.log(snapshot)
            // let id = snapshot.id()
            let id = Math.random(1) + 999;
            console.log(id)
            let val = snapshot.val()
            // console.log(snapshot)
            let postCard = `
            <div class="post-card" id="post-card">
                <div class="post-header">
                    <div class="profile-wrapper">
                        <div class="profile-ico ripple">
                            <img src="${val.profileImage}" />
                        </div>
                        <span class="header-content">
                            <span class="name">${val.name}</span>
                            <span class="time">
                                2 weeks ago
                                <span class="location"> • ${val.location}</span>
                            </span>
                        </span>
                        <a href="/#/menu" class="option-toggle ripple">
                        <img src="src/props/icons/more-fill.svg" />
                        </a>
                    </div>
                </div>
                <div class="post-content">
                    <div class="post-content-wrapper">
                        <span class="post-title">${val.title}</span><br>
                        <span class="post-desc-text" id="description-${val.name}"></span>
                        <span class="more" id="more-${val.name}">Expand</span>
                    </div>
                    <div class="img-frame" id="img-frame-${id}">
                        <div class="heart-pop" id="heart-pop-${val.name}">
                            <svg width="67" height="61" viewBox="0 0 67 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M48.575 0C58.7523 0 67 8.24324 67 19.7838C67 42.8649 41.875 56.0541 33.5 61C25.125 56.0541 0 42.8649 0 19.7838C0 8.24324 8.375 0 18.425 0C24.656 0 30.15 3.2973 33.5 6.59459C36.85 3.2973 42.344 0 48.575 0Z" fill="#C44040"/>
                            </svg>
                        </div>
                        <img id="post-image-${id}" class="pinch-zoom"/>
                    </div>
                </div>
                <div class="post-footer">
                    <div class="top-footer">
                        <span class="like-counts" id="like-count-${val.name}">${kFormatter(likes)} Likes</span> • 
                        <span class="comment-counts" id="comment-count-${val.name}">${kFormatter(comments)} Comments</span>
                    </div>
                    <div class="bottom-footer">
                        <div class="action-container like" id="like-btn-${val.name}">
                            <img src="/src/props/icons/like.svg" id="like-icon-${val.name}"/>
                            <span class="label" id="like-label-${val.name}">Like</span>
                        </div>
                        <div class="action-container comment" id="comment-btn-${val.name}">
                            <img src="/src/props/icons/comment.svg" />
                            <span class="label">Comment</span>
                        </div>
                        <div class="action-container share" id="share-btn-${val.name}">
                            <img src="/src/props/icons/share-1.svg" />
                            <span class="label">Share</span>
                        </div>
                        <div class="action-container collect-btn" id="collect-btn-${val.name}">
                            <img src="/src/props/icons/collect.svg" id="collect-ico-${val.name}"/>
                        </div>
                    </div>
                    <div class="collect" id="collected-${val.name}">
                        <span class="saved" id="saved-${val.name}"></span>
                        <a href="/#/collections" class="view">View</a>      
                    </div>
                </div>
            </div>`
            
            let postContainer = document.getElementById('post-container'),
                explore = document.getElementById('explore')

            postContainer.insertAdjacentHTML('beforeend', postCard)
            
            const imgFrame = document.getElementById(`img-frame-${id}`),
                heartPop = document.getElementById(`heart-pop-${val.name}`),
                likeIcon = document.getElementById(`like-icon-${val.name}`),
                likeCounts = document.getElementById(`like-count-${val.name}`),
                likeLabel = document.getElementById(`like-label-${val.name}`),
                likeBox = document.getElementById(`like-btn-${val.name}`),
                collectBox = document.getElementById(`collect-btn-${val.name}`),
                collectIoc = document.getElementById(`collect-ico-${val.name}`),
                collectedView = document.getElementById(`collected-${val.name}`),
                saved = document.getElementById(`saved-${val.name}`),
                description = document.getElementById(`description-${val.name}`),
                moreDes = document.getElementById(`more-${val.name}`),
                _menu = document.getElementById(`menu-${val.name}`),
                _postMenu = document.getElementById(`post-menu-${val.name}`),
                _toggleDown = document.getElementById(`toggle-down-${val.name}`),
                _toggleDown1 = document.getElementById(`toggle-down-1-${val.name}`),
                _menuContainer = document.getElementById(`menu-container-${val.name}`)
            let count = 0
            
            //render image
            var _img = document.getElementById(`post-image-${id}`);
            var newImg = new Image;
            newImg.onload = function() {
                _img.src = this.src;
            }
            newImg.src = `${val.image}`;
            
            //view image (zoom image)
            // let postView = `
            // <section class="view-post" id="explore-post-view">
            //     <img id="postImage"/>
            // </section>
            // `
            // explore.insertAdjacentHTML('beforeend', postView)
            // let postEl = document.getElementById(`post-image-${val.name}`)
            // let pv = new PinchZoom(postEl)
            // pv.enable()
            //pinch zoom
            let pinchZoom = (imageElement) => {
                let imageElementScale = 1;
                
                let start = {};
                
                // Calculate distance between two fingers
                const distance = (event) => {
                    return Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
                };
                imageElement.addEventListener('touchstart', (event) => {
                    // alert('touchstart', event);
                    if (event.touches.length === 2) {
                    event.preventDefault(); // Prevent page scroll
                
                    // Calculate where the fingers have started on the X and Y axis
                    start.x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
                    start.y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
                    start.distance = distance(event);
                    }
                });
                
                imageElement.addEventListener('touchmove', (event) => {
                    // console.log('touchmove', event);
                    if (event.touches.length === 2) {
                    event.preventDefault(); // Prevent page scroll
                
                    // Safari provides event.scale as two fingers move on the screen
                    // For other browsers just calculate the scale manually
                    let scale;
                    if (event.scale) {
                        scale = event.scale;
                    } else {
                        const deltaDistance = distance(event);
                        scale = deltaDistance / start.distance;
                    }
                    imageElementScale = Math.min(Math.max(1, scale), 4);
                
                    // Calculate how much the fingers have moved on the X and Y axis
                    const deltaX = (((event.touches[0].pageX + event.touches[1].pageX) / 2) - start.x) * 2; // x2 for accelarated movement
                    const deltaY = (((event.touches[0].pageY + event.touches[1].pageY) / 2) - start.y) * 2; // x2 for accelarated movement
                
                    // Transform the image to make it grow and move with fingers
                    const transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${imageElementScale})`;
                    imageElement.style.transform = transform;
                    imageElement.style.WebkitTransform = transform;
                    // imageElement.style.position = 'absolute'
                    imageElement.style.zIndex = "9999";
                    }
                });
                
                imageElement.addEventListener('touchend', (event) => {
                    // console.log('touchend', event);
                    // Reset image to it's original format
                    imageElement.style.transform = "";
                    imageElement.style.WebkitTransform = "";
                    imageElement.style.position = ''
                    imageElement.style.zIndex = "";
                });
            }
            pinchZoom(_img)
            // document.querySelectorAll(`#post-image-${id} img:not(#post-image-${id})`).forEach(element => {
            //     pinchZoom(element)
            // })
            
            //like post
            imgFrame.addEventListener("dblclick", (event) => {
                console.log(val.image)
                event.preventDefault()
                islike = true
                count = islike ? 1 : count
                likeIcon.src = islike ? '/src/props/icons/like-fill.svg' : '/src/props/icons/like-fill.svg'

                console.log(islike ? 'liked '+count : 'disliked '+count)
                likeResponse(heartPop, likeIcon, likeCounts, likeLabel)
            })
            likeBox.addEventListener('click', (e) => {
                islike = islike === false ? true : false
                count = islike ? 1 : 0
                e.preventDefault()

                likeIcon.src = islike ? '/src/props/icons/like-fill.svg' : '/src/props/icons/like.svg'
                likeLabel.innerText = islike ? 'Liked' : 'Like'
                likeLabel.style.color = islike ? '#1971FB' : '#626262'
                likeIconResponse(likeIcon, likeCounts)
                console.log(islike ? 'liked '+count : 'disliked '+count)
            })
            collectBox.addEventListener('click', (e) => {
                e.preventDefault()
                iscollected = !iscollected ? true : false
                collectIoc.src = iscollected ? '/src/props/icons/collect-fill.svg' : '/src/props/icons/collect.svg'
                saved.innerText = iscollected ? 'Saved to collections' : 'Removed from collections'
                collectResponse(collectedView)
                console.log(iscollected)
            })
            function likeResponse(el1, el2, counts, label){
                el1.classList.add("liked")
                el2.classList.add("on-like")
                label.innerText = islike ? 'Liked' : 'Like'
                label.style.color = islike ? '#1971FB' : '#626262'
                setTimeout(() => {
                    el1.classList.remove("liked")
                    el2.classList.remove("on-like")
                }, 1200)
            }
            function likeIconResponse(el1, counts){
                el1.classList.add("on-like")
                setTimeout(() => {
                    el1.classList.remove("on-like")
                }, 500)
            }
            function collectResponse(el){
                el.classList.add("collected")
                setTimeout(() => {
                    el.classList.remove("collected")
                }, 1500)
            }
            description.innerHTML = comment.length > 102 ? limit(replaceURLs(comment), 100) + '..' : replaceURLs(comment)
            moreDes.style.display = description.innerText.length <= 102 ? 'auto' : 'none'
            console.log(description.innerText.length)
            viewMore(moreDes, description)

            function viewMore(a, b){
                a.addEventListener('click', () => {
                    a.innerText = a.innerText === 'Expand' ? 'Collapse' : 'Expand'
                    b.innerHTML = b.innerHTML.length <= 102 ? replaceURLs(comment) : limit(replaceURLs(comment), 100) + '..'
                    console.log('more comments clicked')
                })
            }
        })
    }
}

export default Explore;