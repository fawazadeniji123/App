import './Signin.css';
import 'tachyons';

function Signin() {

    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-55-m w-30-l mw6 shadow-5 center">
            <main className="pa4 black-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email-address"
                                id="email-address"
                                //onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password"
                                //onChange={this.onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div className="mt3">
                        <input
                        // onClick={this.onSubmitSignIn}
                        className="btn b ph3 pv2 input-reset w-100 ba pointer f6 dib"
                        type="submit"
                        value="Sign In"
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <p className="f6 link dim black db pointer tr">Forgot Password?</p>
                        {/* <p  onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p> */}
                    </div>
                </div>
            </main>
        </article>
    );
}
  
export default Signin;