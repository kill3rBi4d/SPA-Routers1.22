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


let Topbar = {
    render: async () => {
        let view =  /*html*/`
            <div class="topbar-container">
                <div class="topbar-content-wrapper">
                    <img class="logo" src="/src/props/logos/logo.svg"  id="logo"/>
                    <h2 class="title" id="title"></h2>
                    <a class="friends-wrapper ripple" id="friends-toggle" href="/#/">
                        <span class="alert"></span>
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 21C0 18.8783 0.842855 16.8434 2.34315 15.3431C3.84344 13.8429 5.87827 13 8 13C10.1217 13 12.1566 13.8429 13.6569 15.3431C15.1571 16.8434 16 18.8783 16 21H0ZM8 12C4.685 12 2 9.315 2 6C2 2.685 4.685 0 8 0C11.315 0 14 2.685 14 6C14 9.315 11.315 12 8 12ZM15.363 14.233C16.8926 14.6261 18.2593 15.4918 19.2683 16.7068C20.2774 17.9218 20.8774 19.4242 20.983 21H18C18 18.39 17 16.014 15.363 14.233ZM13.34 11.957C14.178 11.2075 14.8482 10.2893 15.3066 9.26275C15.765 8.23616 16.0013 7.12429 16 6C16.0021 4.63347 15.6526 3.28937 14.985 2.097C16.1176 2.32459 17.1365 2.93737 17.8685 3.8312C18.6004 4.72502 19.0002 5.84473 19 7C19.0003 7.71247 18.8482 8.41676 18.5541 9.06567C18.26 9.71459 17.8305 10.2931 17.2946 10.7625C16.7586 11.2319 16.1285 11.5814 15.4464 11.7874C14.7644 11.9934 14.0462 12.0512 13.34 11.957Z" fill="#1971FB"/>
                        </svg>
                    </a>
                    <a class="noti-wrapper ripple" id="notification-toggle" href="/#/notifications">
                        <span class="alert"></span>
                        <svg width="17" height="22" viewBox="0 0 17 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 16.667L16.9 17.2C16.9557 17.2743 16.9896 17.3626 16.998 17.4551C17.0063 17.5476 16.9887 17.6406 16.9472 17.7236C16.9057 17.8067 16.8419 17.8765 16.7629 17.9253C16.6839 17.9741 16.5929 18 16.5 18H0.5C0.407144 18 0.316123 17.9741 0.237135 17.9253C0.158147 17.8765 0.094313 17.8067 0.0527866 17.7236C0.0112601 17.6406 -0.0063184 17.5476 0.00202058 17.4551C0.0103596 17.3626 0.0442865 17.2743 0.1 17.2L0.5 16.667V8C0.5 5.87827 1.34286 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8V16.667ZM6 19H11C11 19.663 10.7366 20.2989 10.2678 20.7678C9.79893 21.2366 9.16304 21.5 8.5 21.5C7.83696 21.5 7.20107 21.2366 6.73223 20.7678C6.26339 20.2989 6 19.663 6 19Z" fill="#1971FB"/>
                        </svg>
                    </a>
                </div>
            </div>
        `
        return view
    },
    after_render: async () => {
        let isnotification = true,
            isoptionmenu = false

        // Get the parsed URl from the addressbar
        let request = Utils.parseRequestURL()
        // Parse the URL and if it has an id part, change it with the string ":id"
        let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')


        let toggle = document.getElementById('toggle')

        toggle.addEventListener('click', () => {
            console.log('tesing')
        })

        
    }

}

export default Topbar;