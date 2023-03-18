
import Link from "next/link";
const Planform = () => { 
    return (
      <div id="appMountPoint"><div className="netflix-sans-font-loaded"><div className="basicLayout notMobile firefox modernInApp signupSimplicity-planSelection simplicity" dir="ltr" lang="en-IN"><div className="nfHeader noBorderHeader signupBasicHeader"><a href="https://www.netflix.com/" className="svg-nfLogo signupBasicHeader" data-uia="netflix-header-svg-logo"><svg viewBox="0 0 111 30" className="svg-icon svg-icon-netflix-logo" focusable="true"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14" /></g></svg><span className="screen-reader-text">Netflix</span></a><a href="https://www.netflix.com/signout" className="authLinks signupBasicHeader" data-uia="header-signout-link">Sign Out</a></div><div className="simpleContainer" data-transitioned-child="true"><div className="centerContainer narrowCenterContainer" style={{display: 'block', transform: 'none', opacity: 1, transitionDuration: '250ms'}}><div className="planFormContainer" data-uia="form-plan-selection"><div className><div className="stepHeader-container" data-uia="header"><div className="stepHeader" data-a11y-focus="true" tabIndex={0}><span id className="stepIndicator" data-uia>STEP <b>2</b> OF <b>3</b></span><h1 className="stepTitle" data-uia="stepTitle">Choose the plan that’s right for you</h1></div></div><div className="changeAnytime"><ul className="checkmark-group -compact" data-uia="checkmark-group"><li className="checkmark-group--row -compact" data-uia="checkmark-group+row-0"><svg viewBox="0 0 24 24" className="checkmark-group--icon" aria-hidden="true"><path fill="currentColor" d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z" /></svg><span className="checkmark-group--text" data-uia="checkmark-group+row-0+content">Watch all you want. Ad-free.</span></li><li className="checkmark-group--row -compact" data-uia="checkmark-group+row-1"><svg viewBox="0 0 24 24" className="checkmark-group--icon" aria-hidden="true"><path fill="currentColor" d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z" /></svg><span className="checkmark-group--text" data-uia="checkmark-group+row-1+content">Recommendations just for you.</span></li><li className="checkmark-group--row -compact" data-uia="checkmark-group+row-2"><svg viewBox="0 0 24 24" className="checkmark-group--icon" aria-hidden="true"><path fill="currentColor" d="M3.707 12.293l-1.414 1.414L8 19.414 21.707 5.707l-1.414-1.414L8 16.586z" /></svg><span className="checkmark-group--text" data-uia="checkmark-group+row-2+content">Change or cancel your plan anytime.</span></li></ul></div></div><div className="planGrid planGrid--has3Plans" data-uia="plan-grid"><div className="planGrid__header"><div className="planGrid__selector planGrid__planSelector" role="radiogroup" aria-label="Plan" aria-describedby="planGrid_planChoice_description" data-uia="plan-grid-plan-selector"><span className="planGrid__selectorDescription" id="planGrid_planChoice_description" data-uia="plan-grid-plan-selector+description" aria-hidden="true">Select the plan youd like</span><label className="planGrid__selectorChoice planGrid__planChoice" htmlFor="planGrid_planChoice_0" data-uia="plan-grid-plan-selector+label-text_1_stream_name"><input type="radio" name="planChoice" className="planGrid__selectorInput planGrid__planInput" id="planGrid_planChoice_0" data-uia="plan-grid-plan-selector+input-text_1_stream_name" defaultValue={314001031} /><span className="planGrid__selectorLabel planGrid__planLabel">Basic</span></label><label className="planGrid__selectorChoice planGrid__planChoice" htmlFor="planGrid_planChoice_1" data-uia="plan-grid-plan-selector+label-text_2_stream_name"><input type="radio" name="planChoice" className="planGrid__selectorInput planGrid__planInput" id="planGrid_planChoice_1" data-uia="plan-grid-plan-selector+input-text_2_stream_name" defaultValue={10322} /><span className="planGrid__selectorLabel planGrid__planLabel">Standard</span></label><label className="planGrid__selectorChoice planGrid__planChoice" htmlFor="planGrid_planChoice_2" data-uia="plan-grid-plan-selector+label-text_4_stream_name"><input type="radio" name="planChoice" className="planGrid__selectorInput planGrid__planInput" id="planGrid_planChoice_2" data-uia="plan-grid-plan-selector+input-text_4_stream_name" defaultValue={10341} defaultChecked="checked" /><span className="planGrid__selectorLabel planGrid__planLabel">Premium</span></label></div></div><table className="planGrid__featureTable" role="table" data-uia="plan-grid-feature-table"><caption className="planGrid__featureTableCaption">Netflix Plan Features</caption><tbody className="planGrid__featureTableBody" data-uia="plan-grid-feature-table-body"><tr role="row" className="planGrid__featureTableRow planGrid__featureTableRow--planPrice"><td className="planGrid__cell planGrid__featureCell" role="cell" data-uia="plan-grid-feature-table-cell+planPrice-feature">Monthly price</td><td className="planGrid__cell planGrid__stringCell" role="cell" data-uia="plan-grid-feature-table-cell+planPrice-text_1_stream_name" aria-label="Basic">1st Month Free</td><td className="planGrid__cell planGrid__stringCell" role="cell" data-uia="plan-grid-feature-table-cell+planPrice-text_2_stream_name" aria-label="Standard">1st Month Free</td><td className="planGrid__cell planGrid__cell--isSelected planGrid__stringCell" role="cell" data-uia="plan-grid-feature-table-cell+planPrice-text_4_stream_name" aria-label="Premium">1st Month Free</td></tr><tr role="row" className="planGrid__featureTableRow planGrid__featureTableRow--videoQuality"><td className="planGrid__cell planGrid__featureCell" role="cell" data-uia="plan-grid-feature-table-cell+videoQuality-feature">Video quality</td><td className="planGrid__cell planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+videoQuality-text_1_stream_name" aria-label="Basic"><div className="planGrid__videoQualityLabel">Good</div></td><td className="planGrid__cell planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+videoQuality-text_2_stream_name" aria-label="Standard"><div className="planGrid__videoQualityLabel">Better</div></td><td className="planGrid__cell planGrid__cell--isSelected planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+videoQuality-text_4_stream_name" aria-label="Premium"><div className="planGrid__videoQualityLabel">Best</div></td></tr><tr role="row" className="planGrid__featureTableRow planGrid__featureTableRow--resolution"><td className="planGrid__cell planGrid__featureCell" role="cell" data-uia="plan-grid-feature-table-cell+resolution-feature">Resolution</td><td className="planGrid__cell planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+resolution-text_1_stream_name" aria-label="Basic"><div className="planGrid__videoQualityLabel">480p</div></td><td className="planGrid__cell planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+resolution-text_2_stream_name" aria-label="Standard"><div className="planGrid__videoQualityLabel">1080p</div></td><td className="planGrid__cell planGrid__cell--isSelected planGrid__videoQualityCell" role="cell" data-uia="plan-grid-feature-table-cell+resolution-text_4_stream_name" aria-label="Premium"><div className="planGrid__videoQualityLabel">4K+HDR</div></td></tr><tr role="row" className="planGrid__featureTableRow planGrid__featureTableRow--noField"><td className="planGrid__cell planGrid__featureCell" role="cell" data-uia="plan-grid-feature-table-cell+3-feature">Watch on your TV, computer, mobile phone and tablet</td><td className="planGrid__cell planGrid__booleanCell" role="cell" data-uia="plan-grid-feature-table-cell+3-text_1_stream_name" aria-label="Basic"><span className="planGrid__booleanLabel">Yes</span><span className="planGrid__booleanIcon" aria-hidden="true"><svg viewBox="0 0 26 26" className="planGrid__booleanGraphic planGrid__booleanGraphic--isCheck" focusable="false"><polygon points="4.70710678 13.2928932 3.29289322 14.7071068 9 20.4142136 22.7071068 6.70710678 21.2928932 5.29289322 9 17.5857864" /></svg></span></td><td className="planGrid__cell planGrid__booleanCell" role="cell" data-uia="plan-grid-feature-table-cell+3-text_2_stream_name" aria-label="Standard"><span className="planGrid__booleanLabel">Yes</span><span className="planGrid__booleanIcon" aria-hidden="true"><svg viewBox="0 0 26 26" className="planGrid__booleanGraphic planGrid__booleanGraphic--isCheck" focusable="false"><polygon points="4.70710678 13.2928932 3.29289322 14.7071068 9 20.4142136 22.7071068 6.70710678 21.2928932 5.29289322 9 17.5857864" /></svg></span></td><td className="planGrid__cell planGrid__cell--isSelected planGrid__booleanCell" role="cell" data-uia="plan-grid-feature-table-cell+3-text_4_stream_name" aria-label="Premium"><span className="planGrid__booleanLabel">Yes</span><span className="planGrid__booleanIcon" aria-hidden="true"><svg viewBox="0 0 26 26" className="planGrid__booleanGraphic planGrid__booleanGraphic--isCheck" focusable="false"><polygon points="4.70710678 13.2928932 3.29289322 14.7071068 9 20.4142136 22.7071068 6.70710678 21.2928932 5.29289322 9 17.5857864" /></svg></span></td></tr></tbody></table><small className="planGrid__disclaimer planGrid__standardDisclaimer"><span id data-uia="plan-grid-legal">HD
                        (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to 
                        your internet service and device capabilities. Not all content is 
                        available in all resolutions. See our <a href="https://help.netflix.com/legal/termsofuse" target="_blank">Terms of Use</a> for more details.</span></small><small className="planGrid__disclaimer planGrid__standardDisclaimer"><span id data-uia="plan-grid-legal">Only
                        people who live with you may use your account. Watch on 4 different 
                        devices at the same time with Premium, 2 with Standard and 1 with Basic.</span></small></div></div><div className="submitBtnContainer"><Link href="/signup/payment"><button type="button" autoComplete="off" className="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize" data-uia="cta-plan-selection" placeholder="planSelection_button_continue">Next</button></Link></div></div></div>
          </div></div></div>
    );
}

export default Planform