let NavBar = {
    render: async () => {
        let view =  /*html*/`
        <div class="navbar-center">
            <a class="navbar-item ripple active" href="/#/">
                <i class="fas fa-house" id="home-ico"></i>
            </a>
            <a class="navbar-item ripple" href="/#/collections">
                <i class="fas fa-holly-berry" id="collect-ico"></i>
            </a>
            <a class="navbar-item ripple plus" href="/#/createpost">
                <i class="fas fa-plus" id="plus-ico"></i>
            </a>
            <a class="navbar-item empty">
            </a>
            <a class="navbar-item ripple" href="/#/artwork">
                <i class="fas fa-leaf" id="art-ico"></i>
            </a>
            <a class="navbar-item ripple" href="/#/profile">
                <i class="fas fa-user" id="prof-ico"></i>
            </a>
        </div>
        `
        return view
    },
    after_render: async () => { }

}

export default NavBar;