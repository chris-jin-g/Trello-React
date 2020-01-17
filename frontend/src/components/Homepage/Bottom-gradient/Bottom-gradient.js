import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

//Import Css for it
import './Bottom-gradient.css';
import kickSvg from '../../../trello-images/logo-kickstarter.svg';
import nationalSvg from '../../../trello-images/logo-national-geographic.svg';
import googleSvg from '../../../trello-images/logo-google.svg';
import fenderSvg from '../../../trello-images/logo-fender.svg';
import atlaSvg from '../../../trello-images/atlassian-logo-gray-small.svg';

export default class BottomGradient extends Component {
	render() {
		return (
			<div className="bottom-gradient">
				<div className="work-smarter">
					<Container>
						<div className="inner text-white text-center">
							<h3>
								Work smarter with Trello
							</h3>
							<p>
								Companies of all shapes and sizes use Trello.
							</p>
							<div className="logo-container">
								<img src={kickSvg} width={207} height={24} />
								<img src={nationalSvg} width={166} height={46} />
								<img src={googleSvg} width={143} height={46} />
								<img src={fenderSvg} width={153} height={55} />
							</div>
							<p>
								<a className="btn btn-light smarter-btn">Find out how →</a>
							</p>
						</div>
					</Container>
				</div>
				<div className="get-started started-margin">
					<Container className="text-center pad-style">
						<Row>
							<Col lg={{ span: 6, offset: 3}} md={{ span: 8, offset: 2}} sm={12} className="padding">
								<h3>
									Start Planning Today
								</h3>
								<p>
									Sign up and become one of the millions of people around the world using Trello to get more done.
								</p>
								<a className="btn btn-success started-btn">Get Started – It’s Free!</a>
							</Col>
						</Row>
					</Container>
				</div>
				<div className="footer">
					<div className="language-picker-container">
						<select name="language-picker" id="language-picker" data-analytics-event="clickedFooterLanguageSelectMenu">
							<option value="choose-one" id="choose" disabled="true">Select your language…</option>
							<option value="cs" data-url="https://trello.com/cs" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Čeština">Čeština</option>
							<option value="de" data-url="https://trello.com/de" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="Deutsch">Deutsch</option>
							<option value="en" data-url="https://trello.com/en" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English">English</option>
							<option value="en-AU" data-url="https://trello.com/en-AU" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (AU)">English (AU)</option>
							<option value="en-GB" data-url="https://trello.com/en-GB" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (UK)">English (UK)</option>
							<option value="en-US" data-url="https://trello.com/en-US" data-analytics-event="selectedFooterLanguageSelectMenuOption" data-analytics-language="English (US)">English (US)</option>
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
					<ul className="global-footer-list">
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
							<a>Legal</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Cookie Settings</a>
						</li>&nbsp;
						<li className="global-footer-list-item">
							<a>Privacy</a>
						</li>
					</ul>
					<p className="global-footer-detail">
						<img className="atlassian-logo-small" src={atlaSvg} />
						© Copyright 2020. All rights reserved.
					</p>
				</div>
			</div>
		);
	}
}