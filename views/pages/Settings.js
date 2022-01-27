let Settings = {

    render: async () => {
        return /*html*/ `
            <section class="section">
                <div class="field">
                   <h2>Settings</h2>
                </div>
            </section>
        `
    }
    // All the code related to DOM interactions and controls go in here.
    // This is a separate call as these can be registered only after the DOM has been painted
    , after_render: async () => {
        // document.getElementById("register_submit_btn").addEventListener ("click",  () => {
        //     let email       = document.getElementById("email_input");
        //     let pass        = document.getElementById("pass_input");
        //     let repeatPass  = document.getElementById("repeat_pass_input");
        //     if (pass.value != repeatPass.value) {
        //         alert (`The passwords dont match`)
        //     } else if (email.value =='' | pass.value == '' | repeatPass == '') {
        //         alert (`The fields cannot be empty`)
        //     } 
        //     else {
        //         alert(`User with email ${email.value} was successfully submitted!`)
        //     }    
        // })
    }
}

export default Settings;