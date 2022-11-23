import { Link } from "react-router-dom";
import "./Login2.css";
const Login2 = () => {
  return (
    <>
    <div className="mac-book-air-34aab">
      <div className="image-105aab">
        <span className="loginaab">Login</span>
        <span className="usernameaab">Username</span>
        <div className="flex-containeraab">
          <img className="image-2aab" src="https://s3-alpha-sig.figma.com/img/d104/83f6/801634225163cdaf52a1a967283047d7?Expires=1670198400&Signature=Gh6BOwaf6PbWiqWLMYDd1s3JGUYzMKqINEjRDj4YGWHbzRggHlM7OaI7TgemBsL24gboqOat1KAUGv7laefHwGieae8YDbrLptUpl5Pz7eWnFVjH0afVdW19AlEBJOHkfCRS2QlabmFKHxBkQqARej2WeFDesBfOUkUFeQI-hB1eNpEmHuO5hLqfTnntZmFYt-zYVUIUiQ9OomUHIFAUMXG76FAOdqpLTIdmrDCqciEtSc0q0FEO1enzWYm27qKGV~IYPmDlgos7Z4JGyfjBQlNRXpn0O5SVXxwjXVsM5azk~Rhmm~6M-Vsgl2q3k2w5biXORbRAwiInj3OxB5fCOA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
          <input className="type1" type="text" />
        </div>
        <span className="passwordaab">Password</span>
        <div className="flex-container-1aab">
          <img className="image-3aab" src="https://s3-alpha-sig.figma.com/img/c2df/78e5/7bdde5860ac2daad0001f491ab248a7c?Expires=1670198400&Signature=V7dLs5ficKo3u98FH8JvLYQxfQN8jol5OCr1~N157Dx9aRJucI3wnrsAlBS9TTovHV4w0yIZ5yAFrgH1nFa60JKgBatHcmUxJJW~52AE3Q8CdG7v-IOzKLOn1kL1Qt~teidT4ZqBogDzGpDZ1dzVSdlTeo27~EiCLpkLCPuRQ1TTtIzFYbKigKtHLpiQhQcF2hVtQd1amQHSIw5DTpeTNddY0GZIjS-ec6Xx-poBiVTTF5OLjuaBvTVZvEruh4ysGZlBSYgFpskdaQGqIb1nNctF9Zar7XKSkOSk1TZ66wOKxSEz763v8OZ9H1o6rVMnlsEKgB-FtMptXJ5XN9pu3w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
          <input className="type" type="password" />
        </div><a><Link to="/Choose1">
        <button className="rectangle-4aab">LOGIN</button><br></br></Link></a>
        <div className="boxaab"></div>
      </div>
    </div>
    <a className="supaab">
        <Link to="/Account1">Sign up</Link>
    </a>
    </>
  );
};
export default Login2;

