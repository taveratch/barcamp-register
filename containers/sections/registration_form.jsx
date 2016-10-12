import InterestInput from './tags_input.jsx';

class Section extends React.Component {
	render() {
		return (
		<body>
			<div className="section registration-form uk-grid" id="registration-form-section">
				<div className="uk-width-small-5-10 uk-width-medium-3-10 uk-width-large-3-10 uk-container-center logo-wrapper">
					<img src="../images/logo.png" alt="" />
				</div>

                <div className="uk-small-width-5-10 uk-width-medium-3-10 uk-width-large-3-10 uk-container-center form-wrapper">
                  <h1>Registration Form</h1>
                  <form className="uk-form uk-grid-small" action="">
                		<fieldset data-uk-margin>
                			<div className="uk-form-row">
                				
                					<input className="uk-width-small-5-10 uk-width-medium-4-10 form-firstname" type="text" placeholder="Firstname" />

                					<input className="uk-width-small-5-10 uk-width-medium-4-10 uk-push-1-10" type="text" placeholder="Lastname" />
                			</div>

                			<div className="uk-form-row ">
                				<input className="uk-width-small-5-10 uk-width-medium-9-10" type="email" placeholder="E-mail: example555@hotmail.com" />
                			</div>

							<div className="uk-form-row">
								<input className="uk-width-small-5-10 uk-width-medium-9-10" type="tel" placeholder="Phone number: XXXXXXXXXX" />
							</div>

                            <div className="uk-form-row">
                                <input className="uk-width-small-5-10 uk-width-medium-9-10" type="text" placeholder="Twitter: @bcbk (Optional)" />
                            </div>

							<div className="uk-form-row uk-width-medium-9-10">
                                <InterestInput />
							</div>

							<a className="uk-button uk-button-large uk-width-medium-9-10">Register</a>

                		</fieldset>
                  </form>
                </div>
            </div>
		</body>
		);
	}
}

export default Section;