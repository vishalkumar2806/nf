import { React } from 'react'

const Payment = () => {
    return(
         <div id="appMountPoint"><div className="netflix-sans-font-loaded"><div className="basicLayout notMobile firefox modernInApp signupSimplicity-payAndStartMembershipWithContext simplicity" dir="ltr" lang="en-IN"><div className="nfHeader noBorderHeader signupBasicHeader"><a href="https://www.netflix.com/" className="svg-nfLogo signupBasicHeader" data-uia="netflix-header-svg-logo"><svg viewBox="0 0 111 30" className="svg-icon svg-icon-netflix-logo" focusable="true"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14" /></g></svg><span className="screen-reader-text">Netflix</span></a><a href="https://www.netflix.com/signout" className="authLinks signupBasicHeader" data-uia="header-signout-link">Sign Out</a></div><div className="simpleContainer" data-transitioned-child="true"><div className="centerContainer contextStep" style={{display: 'block', transform: 'none', opacity: 1, transitionDuration: '250ms'}}><div className="paymentContainer" data-uia="payment-container"><div className="paymentPickerHeading"><div className="stepLogoContainer"><span className="stepLogo paymentStepLogo" /></div><div className="stepHeader-container" data-uia="header"><div className="stepHeader" data-a11y-focus="true" tabIndex={0}><span id className="stepIndicator" data-uia>STEP <b>3</b> OF <b>3</b></span><h1 className="stepTitle" data-uia="stepTitle">Set up your payment</h1></div></div><div className="narrowContainer" data-uia="messagesContainer"><div id className="contextRow contextRowFirst" data-uia>Your membership starts as soon as you set up payment.</div><div className="contextRow" data-uia="encouragements"><div className="contextRowEmphasized">No commitments.</div><div className="contextRowEmphasized">Cancel online anytime.</div></div></div></div><div className="secure-server-badge"><svg id="secure-server-icon" viewBox="0 0 12 16" className="secure-server-badge--icon"><g fill="none"><g fill="#FFB53F"><path d="M8.4 5L8.4 6.3 10 6.3 10 5C10 2.8 8.2 1 6 1 3.8 1 2 2.8 2 5L2 6.3 3.6 6.3 3.6 5C3.6 3.7 4.7 2.6 6 2.6 7.3 2.6 8.4 3.7 8.4 5ZM11 7L11 15 1 15 1 7 11 7ZM6.5 11.3C7 11.1 7.3 10.6 7.3 10.1 7.3 9.3 6.7 8.7 6 8.7 5.3 8.7 4.7 9.3 4.7 10.1 4.7 10.6 5 11.1 5.5 11.3L5.2 13.4 6.9 13.4 6.5 11.3Z" /></g></g></svg><div className="secure-server-badge--text">Secure Server</div></div><div className="basic-spinner-region" style={{minHeight: '50px'}}><div data-uia="loading-indicator" className="basic-spinner center-absolute isHidden" style={{height: '50px', width: '50px'}} /><div><div className="nfTabSelectionWrapper" id="creditOrDebitCardDisplayStringId" data-uia="payment-choice+creditOrDebitOption"><a className="nfTabSelection nfTabSelection--active paymentPicker standardHeight" href="/signup/billing"><div className="mopNameAndLogos"><div className="nfTabSelection--text card-type-text paymentActive" data-uia="mop-type-text"><span className="selectionLabel">Credit or Debit Card</span></div><div className="logosContainer"><span className="logos logos-inline" data-uia="cardLogos-comp" aria-label="We accept VISA, MASTERCARD, AMEX and DISCOVER."><img alt="" className="logoIcon VISA" data-uia="logoIcon-VISA" src="/assets/img/visa-v3.svg" /><img alt="" className="logoIcon MASTERCARD" data-uia="logoIcon-MASTERCARD" src="/assets/img/mastercard-v2.svg" /><img alt="" className="logoIcon AMEX" data-uia="logoIcon-AMEX" src="/assets/img/amex-v2.svg" /><img alt="" className="logoIcon DISCOVER" data-uia="logoIcon-DISCOVER" src="/assets/img/icon_discover.png" srcSet="/assets/img/icon_discover_2x.png 2x" /></span></div></div><span className="ui-svg-icon ui-svg-icon--chevron pull-right pickerArrow" /></a></div></div></div></div></div></div>
          </div></div></div>
    )
}

export default Payment