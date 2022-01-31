let Topbar = {
    render: async () => {
        let view =  /*html*/`
            <div class="topbar-container">
                <div class="topbar-content-wrapper">
                    <img class="logo" src="/src/props/logos/logo.svg"  id="logo"/>
                    <h2 class="title" id="title"></h2>
                    <div class="noti-wrapper">
                        <img src="/src/props/icons/noti-em.svg" />
                    </div>
                </div>
            </div>
        `
        return view
    },
    after_render: async () => { }

}

export default Topbar;