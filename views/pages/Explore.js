let Explore = {

    render: async () => {
        return /*html*/ `
            <section class="artwork">
                <h2>Explore</h2>
            </section>
        `
    }
    // All the code related to DOM interactions and controls go in here.
    // This is a separate call as these can be registered only after the DOM has been painted
    , after_render: async () => {}
}

export default Explore;