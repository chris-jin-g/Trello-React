import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginRequest } from '../actions/user.action';


// Import Css for it
import './loginStyle.css';
import trello from '../trello-images/blue-trello.svg';
import blueAtla from '../trello-images/atlassian-logo-blue-small.svg';
import leftBk from '../trello-images/left-bk.svg';
import rightBk from '../trello-images/right-bk.svg';

class Login extends Component {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			email: '',
			password: '',
			errors: {}
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			errors: newProps.errors
		});

		if (newProps.errors) {
			document.getElementById('error').classList.remove('hidden');
		}
	}

	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});

		document.getElementById('error').classList.add('hidden');
	}

	onSubmit(e) {
		e.preventDefault();


		const userdata = {
			email: this.state.email,
			password: this.state.password
		};
		console.log(userdata)
		this.props.loginRequest(userdata, this.props.history);
	}

	render() {
		const { errors } = this.state;
		return (
			<div className="login-body">
				<div style={{'zIndex': 1}}>
					<img className="logo" src={trello} alt="trello mark" />
					<div className="inner-section">
						<div className="section-wrapper">
							<div className="layout-twothirds-center account-form">
								<input id="returnUrl" type="hidden" value=""/>
								<input id="reauthenticate" type="hidden" value=""/>
								<div id="cdn-error" className="hidden error-message"> 
						           	Your browser was unable to load all of Trello's resources.  They may have been blocked by your firewall, proxy or browser configuration.<br/><br/>
						            Try refreshing the page and if that doesn't work, check out our
						            <a href="http://help.trello.com/article/771-loading-resources-from-trellos-cdn">troubleshooting guide</a>.
								</div>
								<div id="error" className="hidden quick-switch">
									<p class="error-message">
										{errors.email}
										{errors.emailnotfound}
										{errors.passwordincorrect}
									</p>
								</div>
								<h1>Log in to Trello</h1>
								<div className="login-password-container">
									{/*Email and Password*/}
									<form id="login-form" method="post">
										<div className="login-password-container-email">
											<div className="email-password">
												<div className="hide-when-two-factor">
													<input onChange={this.onChange} type="email" name="email" id="user" className="form-field" autocorrect="off" spellcheck="false" autocapitalize="off" autofocus="autofocus" placeholder="Enter email" />
													<div id="password-entry" className="show-when-password ">
														<input onChange={this.onChange} type="password" name="password" id="password" className="form-field" placeholder="Enter password"/>
													</div>
												</div>
												<input id="login" type="button" onClick={this.onSubmit} className="account-button button-green btn btn-success" value="Log in with Atlassian"/>
											</div>
										</div>
									</form>
									{/*Login-google*/}
									<div className="login-google-button hide-when-two-factor hidden">
										<div className="login-method-separator">
											OR
										</div>
										<div id="google-link" className="google-button" tabindex="0">
											<span className="icon"></span>&nbsp;
											<span className="label" data-analytics-event="clickedLoginWithGmailButton">Log in with Google</span>
										</div>
									</div>
									{/*Login email and password*/}
									<p id="saml-use-password" className="quiet hidden hide-when-two-factor">
										<a id="use-password-button" href="#" className="quiet" data-analytics-event="clickedUsePasswordLink">Log in with email and password</a>
									</p>
									{/*Login with SSO*/}
									<p id="saml-use-sso" className="quiet hidden hide-when-two-factor">
										<a id="use-sso-button" data-analytics-event="clickedUseSSOLink" href="#" className="quiet">Log in with SSO</a>
									</p>
								</div>
								{/*Hidden div*/}
								<div className="hidden hidden-div">
									<form id="login-google" action="/authenticate_openid" method="post">
										<input type="hidden" name="openid_identifier" value="https://www.google.com/accounts/o8/id"/>
										<input type="hidden" name="provider" value="google"/>
										<input type="hidden" name="locale" id="login-google-locale" value=""/>
										<input type="hidden" name="confirmNew" value="true"/>
									</form>
									<form id="login-atlassian" action="/authenticate_openid" method="post">
										<input type="hidden" name="openid_identifier" value="https://id.atlassian.com/openid/v2/op"/>
										<input type="hidden" name="provider" value="atlassian"/>
										<input type="hidden" name="locale" id="login-atlassian-locale" value=""/>
										<input type="hidden" name="user" id="login-atlassian-user" value=""/>
										<input type="hidden" name="confirmNew" value="true"/>
									</form>
								</div>
								<hr/>
								<ul className="bottom-form-link">
									<li>
										<a href="/forgot" data-analytics-event="clickedForgotPasswordLink">Can't log in?</a>
									</li>&nbsp;
									<li>
										<a href="/signup" data-analytics-event="clickedSignUpLoginLink">Sign up for an account</a>
									</li>
								</ul>
							</div>
							<ul className="bottom-form-link smaller-links">
								<li>
									<a href="/forgot" data-analytics-event="clickedForgotPasswordLink">Can't log in?</a>
								</li>&nbsp;
								<li>
									<a href="/signup" data-analytics-event="clickedSignUpLoginLink">Sign up for an account</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				{/*Footer*/}
				<div className="global-footer">
					<div className="language-picker-container">
						<select name="language-picker" id="language-picker" data-analytics-event="clickedFooterLanguageSelectMenu">
							<option value="choose-one" id="choose" disabled="true">Select your language…</option>
							<option value="cs" data-url="https://trello.com/cs" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Čeština">Čeština</option>
							<option value="de" data-url="https://trello.com/de" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Deutsch">Deutsch</option>
							<option value="en" data-url="https://trello.com/en" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English">English</option>
							<option value="en-AU" data-url="https://trello.com/en-AU" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (AU)">English (AU)</option>
							<option value="en-GB" data-url="https://trello.com/en-GB" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (UK)">English (UK)</option>
							<option value="en-US" data-url="https://trello.com/en-US" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (US)" selected>English (US)</option>
							<option value="es" data-url="https://trello.com/es" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Español">Español</option>
							<option value="fr" data-url="https://trello.com/fr" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Français">Français</option>
							<option value="it" data-url="https://trello.com/it" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Italiano">Italiano</option>
							<option value="hu" data-url="https://trello.com/hu" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Magyar">Magyar</option>
							<option value="nl" data-url="https://trello.com/nl" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Nederlands">Nederlands</option>
							<option value="nb" data-url="https://trello.com/nb" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Norsk (bokmål)">Norsk (bokmål)</option>
							<option value="pl" data-url="https://trello.com/pl" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Polski">Polski</option>
							<option value="pt-BR" data-url="https://trello.com/pt-BR" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Português (Brasil)">Português (Brasil)</option>
							<option value="fi" data-url="https://trello.com/fi" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Suomi">Suomi</option>
							<option value="sv" data-url="https://trello.com/sv" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Svenska">Svenska</option>
							<option value="vi" data-url="https://trello.com/vi" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Tiếng Việt">Tiếng Việt</option>
							<option value="tr" data-url="https://trello.com/tr" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Türkçe">Türkçe</option>
							<option value="ru" data-url="https://trello.com/ru" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Русский">Русский</option>
							<option value="uk" data-url="https://trello.com/uk" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Українська">Українська</option>
							<option value="th" data-url="https://trello.com/th" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="ภาษาไทย">ภาษาไทย</option>
							<option value="zh-Hans" data-url="https://trello.com/zh-Hans" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="中文 (简体)">中文 (简体)</option>
							<option value="zh-Hant" data-url="https://trello.com/zh-Hant" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="中文 (繁體)">中文 (繁體)</option>
							<option value="ja" data-url="https://trello.com/ja" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="日本語">日本語</option>
						</select>
						<div>
							<span className="dropdown-icon"></span>
						</div>
					</div>
					<div>
						<hr />
						<img className="atlassian-logo-small" src={blueAtla} alt="blueAtla" width={150} />
					</div>
					<ul className="global-footer-list sm-div">
						<li className="global-footer-list-item">
							<a>Templates</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Pricing</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Apps</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Jobs</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Blog</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Developers</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>About</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Help</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Cookie Settings</a>
						</li>&nbsp;
					</ul>
				</div>
				{/*Background*/}
				<div className="background display-div">
					<div className="leftBk">
						<img src={leftBk} alt="leftBk" />
					</div>
					<div className="rightBk">
						<img src={rightBk} alt="rightBk" />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  user: state.user,
  errors: state.errors
});

// mapping dispatch functions to the props of LoginForm component
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    loginRequest
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);