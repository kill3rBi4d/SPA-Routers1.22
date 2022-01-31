function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
}
function calculatePeriod(date){
    return moment(date, 'YYYYMMDD').fromNow()
}
const usrname = 'Raven McRandom',
    comments = 123,
    comment = 'This is so amazing Tulip farm ☺ and I realy like the view from here...'
const usrid = 322
let likes = 123

let Home = {
    render : async () => {
        let view =  /*html*/`
            <section class="home">
                <section class="post-container">
                    <div class="post-card">
                        <div class="post-header">
                            <a href="/#/${usrname}" class="profile-wrapper">
                                <div class="profile-ico">
                                    <img src="src/imgs/profTest.jpg" />
                                </div>
                                <span class="user-name">${usrname}</span>
                            </a>
                            <a href="/#/option${usrid}" class="option-toggle ripple">
                                <img src="src/props/icons/more-fill.svg" />
                            </a>
                        </div>
                        <div class="post-content">
                            <div class="img-frame" id="img-frame">
                                <div class="heart-pop" id="heart-pop">
                                    <svg width="67" height="61" viewBox="0 0 67 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M48.575 0C58.7523 0 67 8.24324 67 19.7838C67 42.8649 41.875 56.0541 33.5 61C25.125 56.0541 0 42.8649 0 19.7838C0 8.24324 8.375 0 18.425 0C24.656 0 30.15 3.2973 33.5 6.59459C36.85 3.2973 42.344 0 48.575 0Z" fill="#8A2BE2"/>
                                    </svg>
                                </div>
                                <img src="src/imgs/floTest.jpg" />
                            </div>
                         </div>
                        <div class="post-footer">
                            <div class="top-footer">
                                <div class="action-box">
                                    <div class="like-box">
                                        <img src="src/props/icons/like.svg" />
                                        <span class="like-counts"></span>
                                    </div>
                                    <div class="collect-box">
                                        <img src="src/props/icons/collect.svg" />
                                    </div>
                                </div>
                                <div class="comment-toggle">
                                    <span class="comment-counts">${comments} Comments</span>
                                    <img src="src/props/icons/arrow-right.svg" />
                                </div>
                            </div>
                            <div class="bottom-footer">
                                <div class="comment-wrapper">
                                    <span class="comment">${comment}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        `
        return view
    }
    , after_render: async () => {
        const imgFrame = document.getElementById('img-frame'),
            heartPop = document.getElementById('heart-pop')
            
            document.querySelector('.like-counts').textContent = likes + 'k'
            let count = 0
            imgFrame.addEventListener("dblclick", () => {
                count++;
                heartPop.classList.add("liked");
                document.querySelector('.like-counts').textContent = likes + count + 'k'
                setTimeout(() => {
                  heartPop.classList.remove("liked");
                }, 1200);
              });

    }

}

export default Home;