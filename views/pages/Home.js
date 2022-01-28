function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
}
function calculatePeriod(date){
    return moment(date, 'YYYYMMDD').fromNow()
}

let Home = {
    render : async () => {
        let view =  /*html*/`
            <section class="home">
                <section class="latest-post">
                    <span class="label">Latest</span>
                    <div class="contents">
                        <div class="post-card ripple">
                            <div class="image-frame">
                                <img src="/src/imgs/test.jpg"/>
                                <div class="interaction-cont">
                                    <div class="view-ico">
                                        <i class="fas fa-eye"></i>
                                    </div>
                                    <span class="counts">112k</span>
                                    <div class="like-btn">
                                        <i class="far fa-heart"></i>
                                    </div>
                                    <span class="counts">12k</span>
                                </div>
                            </div>
                            <div class="caption-box">
                                <div class="profile-bubble">
                                    <img src="/src/imgs/profTest.jpg" />
                                </div>
                                <div class="caption-container">
                                    <span class="caption-header">
                                        ${limit('Mogan Nancy', 20) + ""} <br>
                                        <span class="i">• ${calculatePeriod('20211001')}</span>
                                    </span>
                                </div>
                                <div class="btn-container">
                                    <i class="fas fa-plus"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="trending">
                    <span class="label">Trending</span>
                    <div class="contents">
                        <div class="trend-bubble">
                            <img src="/src/imgs/flotest.jpg"
                        </div>
                    </div>
                </section>
                <section class="post-container">
                    <div class="post-card">
                    </div>
                    <div class="post-card">
                    </div>
                </section>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }

}

export default Home;