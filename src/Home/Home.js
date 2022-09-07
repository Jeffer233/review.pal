import React from 'react';

const Home = () => {
    return (
     <div>
        <section className="vh-100 bg-washed-blue baskerville">
            <header className="tc ph5 lh-copy">
                <h1 className="f1 f-headline-l code mb3 fw9 dib tracked-tight light-purple">
                Thanks for reaching out
                </h1>
                <h2 className="tc f1-l fw1">
                Your account has been placed underimmediate review.
                </h2>
            </header>
            <p className="fw1 i tc mt4 mt5-l f4 f3-l">
            Please reach out to us for more complaints
            </p>
            <ul className="list tc pl0 w-100 mt5">
                <li className="dib">
                    <a
                    className="f5 f4-ns link black db pv2 ph3 hover-light-purple"
                    href="/"
                    >
                    Home
                    </a>
                </li>
                <li className="dib">
                <a
                className="f5 f4-ns link black db pv2 ph3 hover-light-purple"
                href="/about"
                >
                About
                </a>
                </li>
                <li className="dib">
                <a
                className="f5 f4-ns link black db pv2 ph3 hover-light-purple"
                href="/careers"
                >
                Careers
                </a>
                </li>
                <li className="dib">
                <a
                className="f5 f4-ns link black db pv2 ph3 hover-light-purple"
                href="/contact"
                >
                Contact
                </a>
                </li>
                <li className="dib">
                <a
                className="f5 f4-ns link black db pv2 ph3 hover-light-purple"
                href="/signup"
                >
                Sign Up
                </a>
                </li>
                <li className="dib">
                <a
                className="f5 f4-ns link black db pv2 ph3 hover-light-purple"
                href="/help"
                >
                Help
                </a>
                </li>
            </ul>
            <p className="tc f1-l fw1 i tc mt4 mt5-l f4 f3-l ">
                Paypal Review Team.
                </p>
        </section>
     </div>
   );
}

export default Home;