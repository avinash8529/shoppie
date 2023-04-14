import React from 'react'

import './index.scss'

const Login = () => {
    return (
        <section>
                <div className="container">
                    <div className="user signinBx">
                        <div className="imgBx"><img src="https://content.jdmagicbox.com/comp/fatehabad-haryana/h6/9999p1667.1667.130112170957.p7h6/catalogue/red-tape-store-fatehabad-h-o-fatehabad-haryana-shoe-dealers-red-tape-nyrki.jpg" alt="" /></div>
                        <div className="formBx">
                            <form action="" onSubmit="return false;">
                                <h2>Sign In</h2>
                                <input type="text" name="" placeholder="Username" />
                                <input type="password" name="" placeholder="Password" />
                                <input type="submit" name="" value="Login" />
                                <p className="signup">
                                    Don't have an account ?
                                    <a href="/" onClick="toggleForm();">Sign Up.</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
    )
}
export default Login;