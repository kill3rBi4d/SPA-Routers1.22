let NavBar = {
    render: async () => {
        let view =  /*html*/`
        <div class="navbar-center">
            <a class="navbar-item ripple active" href="/#/">
                <img src="/src/props/icons/home.svg" class="fas" id="home-ico" />
            </a>
            <a class="navbar-item ripple" href="/#/explore">
            <img src="/src/props/icons/explore.svg" class="fas" id="explore-ico" />
            </a>
            <a class="navbar-item ripple plus" href="/#/createpost">
                <i class="fas fa-plus" id="plus-ico"></i>
            </a>
            <a class="navbar-item empty">
            </a>
            <a class="navbar-item ripple" href="/#/collections">
                <img src="/src/props/icons/collection.svg" class="fas" id="collection-ico" />
            </a>
            <a class="navbar-item ripple" href="/#/profile">
                <span class="user-profile">
                    <img src="/src/imgs/profTest.jpg" id="prof-ico"/>
                </span>
            </a>
        </div>
        `
        return view
    },
    after_render: async () => { }

}

export default NavBar;