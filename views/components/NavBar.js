let NavBar = {
    render: async () => {
        let view =  /*html*/`
        <div class="navbar-center">
            <a class="navbar-item ripple active" href="/#/">
                <i class="fas fa-house" id="home-ico"></i>
            </a>
            <a class="navbar-item ripple" href="/#/about">
                <i class="fas fa-user" id="about-ico"></i>
            </a>
            <a class="navbar-item ripple" href="/#/settings">
                <i class="fas fa-gear" id="set-ico"></i>
            </a>
        </div>
        `
        return view
    },
    after_render: async () => { }

}

export default NavBar;