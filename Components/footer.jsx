import { React } from "react"

const Footer = () => { 
    return(
        <div className="site-footer-wrapper centered" style={{transitionDuration: '250ms', opacity: 1}}>
        <div className="footer-divider" />
        <div className="site-footer">
          <p className="footer-top">Questions? Call <a className="footer-top-a" href="tel:000-800-040-1843">000-800-040-1843 </a></p>
          <ul className="footer-links structural">
            <li className="footer-link-item" placeholder="footer_responsive_link_faq_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/support/412" placeholder="footer_responsive_link_faq"><span id data-uia="data-uia-footer-label">FAQ</span></a></li>
            <li className="footer-link-item" placeholder="footer_responsive_link_help_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/" placeholder="footer_responsive_link_help"><span id data-uia="data-uia-footer-label">Help Centre</span></a></li>
            <li className="footer-link-item" placeholder="footer_responsive_link_terms_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/termsofuse" placeholder="footer_responsive_link_terms"><span id data-uia="data-uia-footer-label">Terms of Use</span></a></li>
            <li className="footer-link-item" placeholder="footer_responsive_link_privacy_separate_link_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/privacy" placeholder="footer_responsive_link_privacy_separate_link"><span id data-uia="data-uia-footer-label">Privacy</span></a></li>
            <li className="footer-link-item" placeholder="footer_responsive_link_cookies_separate_link_item"><a className="footer-link" data-uia="footer-link" href="#" placeholder="footer_responsive_link_cookies_separate_link"><span id data-uia="data-uia-footer-label">Cookie Preferences</span></a></li>
            <li className="footer-link-item" placeholder="footer_responsive_link_corporate_information_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/corpinfo" placeholder="footer_responsive_link_corporate_information"><span id data-uia="data-uia-footer-label">Corporate Information</span></a></li>
          </ul>
          <div className="lang-selection-container" id="lang-switcher">
            <div className="nfSelectWrapper inFooter selectArrow prefix" data-uia="language-picker+container">
              <label className="nfLabel" htmlFor="lang-switcher-select">Select Language</label>
              <div className="nfSelectPlacement globe">
                <select data-uia="language-picker" className="nfSelect" id="lang-switcher-select" name="__langSelect" tabIndex={0}>
                  <option selected="selected" value="/signup?locale=en-IN" label="English" lang="en">English</option>
                  <option value="/signup?locale=hi-IN" label="हिन्दी" lang="hi">हिन्दी</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
}

export default Footer