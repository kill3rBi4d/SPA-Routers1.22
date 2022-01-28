let CreatePost = {
    render : async () => {
        let view =  /*html*/`
            <section class="CreatePost">
                <br>
                <h1> New Post Here! </h1>
            </section>
        `
        return view
    },
    after_render: async () => {}
        
}

export default CreatePost;