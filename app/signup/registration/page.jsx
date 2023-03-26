import Link from "next/link"


const SignUp = () => { 
    return( <div id="appMountPoint">
        <div className="netflix-sans-font-loaded">
          <div className="basicLayout notMobile firefox modernInApp signupSimplicity-planSelectionWithContext simplicity" dir="ltr" lang="en-IN">
            <div className="nfHeader noBorderHeader signupBasicHeader">
              <a href="" className="svg-nfLogo signupBasicHeader" data-uia="netflix-header-svg-logo">
                <svg viewBox="0 0 111 30" className="svg-icon svg-icon-netflix-logo" focusable="true">
                  <g>
                    <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14" />
                  </g>
                </svg>
                <span className="screen-reader-text">Netflix</span>
              </a>
              <a href="" className="authLinks signupBasicHeader" data-uia="header-signout-link">Sign Out</a>
            </div>
            <div className="simpleContainer" data-transitioned-child="true">
              <div className="centerContainer contextStep" style={{display: 'block', transform: 'none', opacity: 1, transitionDuration: '250ms'}}>
                <div className="planContainer" data-uia="plan-context-page-container">
                  <div className="stepLogoContainer"><span className="stepLogo planStepLogo" /></div>
                  <div className="stepHeader-container" data-uia="header">
                    <div className="stepHeader" data-a11y-focus="true" tabIndex={0}>
                      <span id className="stepIndicator" data-uia>STEP <b>2</b> OF <b>3</b></span>
                      <h1 className="stepTitle" data-uia="stepTitle">Choose your plan.</h1>
                    </div>
                  </div>
                  <div className="contextBody contextRow">
                    <ul className="checkmark-group" data-uia="checkmark-group">
                      <li className="checkmark-group--row" data-uia="checkmark-group+row-0">
                        <svg viewBox="0 0 24 24" className="checkmark-group--icon" aria-hidden="true">
                          <path fill="currentColor" d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z" />
                        </svg>
                        <span className="checkmark-group--text" data-uia="checkmark-group+row-0+content">No commitments, cancel anytime.</span>
                      </li>
                      <li className="checkmark-group--row" data-uia="checkmark-group+row-1">
                        <svg viewBox="0 0 24 24" className="checkmark-group--icon" aria-hidden="true">
                          <path fill="currentColor" d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z" />
                        </svg>
                        <span className="checkmark-group--text" data-uia="checkmark-group+row-1+content">Everything on Netflix for one low price.</span>
                      </li>
                      <li className="checkmark-group--row" data-uia="checkmark-group+row-2">
                        <svg viewBox="0 0 24 24" className="checkmark-group--icon" aria-hidden="true">
                          <path fill="currentColor" d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z" />
                        </svg>
                        <span className="checkmark-group--text" data-uia="checkmark-group+row-2+content">No ads and no extra fees. Ever.</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="submitBtnContainer"><Link href="/signup/planform" ><button type="button" autoComplete="off" className="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize" data-uia="continue-button" placeholder="button_see_plans">Next</button></Link></div>
              </div>
            </div>
          </div>
          </div>
          </div>)
}

export default SignUp