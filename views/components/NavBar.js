let NavBar = {
    render: async () => {
        let view =  /*html*/`
        <div class="navbar-center">
            <a class="navbar-item ripple active" href="/#/" id="home-btn">
                <img src="/src/props/icons/home.svg" class="fas" id="home-ico" />
            </a>
            <a class="navbar-item ripple" href="/#/explore" id="explore-btn">
                <img src="/src/props/icons/explore.svg" class="fas" id="explore-ico" />
            </a>
            <a class="navbar-item ripple plus" id="plus-ico" href="/#/createpost">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.76639 7.28571C7.04253 7.28571 7.26639 7.06186 7.26639 6.78571V0.5C7.26639 0.223857 7.49025 0 7.76639 0H9.18852C9.46466 0 9.68852 0.223858 9.68852 0.5V6.78571C9.68852 7.06186 9.91238 7.28571 10.1885 7.28571H16.4549C16.731 7.28571 16.9549 7.50957 16.9549 7.78571V9.21429C16.9549 9.49043 16.731 9.71429 16.4549 9.71429H10.1885C9.91238 9.71429 9.68852 9.93814 9.68852 10.2143V16.5C9.68852 16.7761 9.46466 17 9.18852 17H7.76639C7.49025 17 7.26639 16.7761 7.26639 16.5V10.2143C7.26639 9.93814 7.04253 9.71429 6.76639 9.71429H0.5C0.223858 9.71429 0 9.49043 0 9.21429V7.78571C0 7.50957 0.223858 7.28571 0.5 7.28571H6.76639Z" fill="#1971FB"/>
                </svg>
            </a>
            <a class="navbar-item ripple" href="/#/chats" id="chat-btn">
                <span class="chat-alert">12</span>
                <img src="/src/props/icons/chats.svg" class="fas" id="chats-ico" />
            </a>
            <a class="navbar-item ripple" href="/#/profile" id="profile-btn">
                <span class="user-profile">
                    <img src="/src/imgs/profTest.jpg" id="prof-ico"/>
                </span>
            </a>
        </div>
        `
        return view
    },
    after_render: async () => {
    }

}

export default NavBar;