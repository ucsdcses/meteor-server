import React from 'react';

function oldMain() {
    $.getScript( './js/oldMain.js', function( data, textStatus, jqxhr ) { });
}

export default function () {
  return (
      <div onLoad={oldMain()}>
      <div className="subscribe-overlay"></div>
      <div className="subscribe-form" id="mc_embed_signup">
      <form action="//ucsd.us12.list-manage.com/subscribe/post?u=fe523e83d20e97f4c9c0a1071&amp;id=678953a0c1" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
      <div id="mc_embed_signup_scroll">
      <h5>Subscribe to CSES newsletter</h5>
      <input type="email" value="" name="EMAIL" id="mce-EMAIL" required></input>
      <div aria-hidden="true">
      <input type="text" name="b_fe523e83d20e97f4c9c0a1071_678953a0c1" tabIndex="-1" value="">
      </input>
      </div>
      <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="subscribe-submit">
      </input>
      <input type="button" className="subscribe-close" value="Close">
      </input>
      </div>
      </form>
      </div>


      <nav role="nav">
      <div className="nav-container">
      <div className="nav-left">
      <a href="/"><img src="/images/cseslogo-300.png" alt="CSES Logo" /></a>
      </div>

      <div className="nav-right">
      <a href="#about">About</a>
      <a href="showcase">Showcase</a>
      <a href="cselabs">CSE Labs</a>
      <a href="#events">Events</a>
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
      </div>

      <div className="nav-right-hamburger">
      <div className="toggle-1"></div>
      <div className="toggle-2"></div>
      <div className="toggle-3"></div>
      </div>
      <div className="nav-right-collapse">
      <a href="#about">About</a>
      <a href="showcase">Showcase</a>
      <a href="cselabs">CSE Labs</a>
      <a href="#events">Events</a>
      <a href="#team">Team</a>
      <a href="#contact">Contact</a>
      <img src="/images/cseslogo-300.png" alt="CSES Logo"></img>
      </div>
      </div>
      </nav>


      <div id="main" role="main">
      <header>
      <div className="wrapper" id="wrapper">
      <h2>UC San Diego</h2>
      <h1>Computer Science &amp; Engineering Society</h1>
      <h4>Connecting UC San Diego's CSE community</h4>
      <a className="header-btn facebook-btn" href="https://www.facebook.com/groups/ucsdcses/" target="_blank">Facebook Group</a>
      <a className="header-btn subscribe-btn">Subscribe</a>
      </div>
      </header>

      <section id="about">
      <div className="section-container container">
      <h1>Our Goal</h1>
      <p>At CSES, we aim to form a passionate community of computer scientists and engineers at UC San Diego. From tech talks, to social events, to outreach, we have a diverse set of events and activities that appeal to any computer scientist or engineer.</p>
      </div>

      <div className="pillar-container">

      <div className="pillar">
      <div className="pillar-icon"><img src="/images/innovate.svg" alt="Pillar Icon"/></div>
      <div className="triangle"></div>
      <h4>Innovate</h4>
      </div>

      <div className="pillar">
      <div className="pillar-icon"><img src="/images/build.svg" alt="Pillar Icon"/></div>
      <div className="triangle"></div>
      <h4>Build</h4>
      </div>

      <div className="pillar">
      <div className="pillar-icon"><img src="/images/connect.svg" alt="Pillar Icon"/></div>
      <div className="triangle"></div>
      <h4>Connect</h4>
      </div>

      </div>
      </section>


      <section id="team">
      <div className="section-container container">
      <h1>Team</h1>
      <ul>


      <li>
      <div className="team-img-container">

      <img src="/images/board/jacob.JPG" alt="CSES Team Member"/>

      </div>
      <h5 className="team-name">Jacob Davis</h5>
      <p className="team-position">President</p>
      </li>

      <li>
      <div className="team-img-container">

      <img src="/images/team-placeholder.jpg" alt="CSES Team Member"/>

      </div>
      <h5 className="team-name">Eric Lin</h5>
      <p className="team-position">VP External</p>
      </li>

      <li>
      <div className="team-img-container">

      <img src="/images/board/rahul.JPG" alt="CSES Team Member"/>

      </div>
      <h5 className="team-name">Rahul Sabnis</h5>
      <p className="team-position">VP Internal</p>
      </li>

      <li>
      <div className="team-img-container">

      <img src="/images/board/joanne.JPG" alt="CSES Team Member"/>

      </div>
      <h5 className="team-name">Joanne Son</h5>
      <p className="team-position">VP Finance</p>
      </li>

      <li>
      <div className="team-img-container">

      <img src="/images/board/joel.JPG" alt="CSES Team Member"/>

      </div>
      <h5 className="team-name">Joel Sequeira</h5>
      <p className="team-position">Pro-Dev Chair</p>
      </li>

      <li>
      <div className="team-img-container">

      <img src="/images/board/sean.JPG" alt="CSES Team Member"/>

      </div>
      <h5 className="team-name">Sean Mcentee</h5>
      <p className="team-position">Design Chair</p>
      </li>

      <li>
      <div className="team-img-container">

      <img src="/images/team-placeholder.jpg" alt="CSES Team Member"/>

      </div>
      <h5 className="team-name">Maxwell Bland</h5>
      <p className="team-position">Tech Chair</p>
      </li>

      <li>
      <div className="team-img-container">

      <img src="/images/board/niral.JPG" alt="CSES Team Member"/>

      </div>
      <h5 className="team-name">Niral Patel</h5>
      <p className="team-position">PR Chair</p>
      </li>

      <li>
      <div className="team-img-container">

      <img src="/images/board/sandra.JPG" alt="CSES Team Member"/>

      </div>
      <h5 className="team-name">Sandra Luo</h5>
      <p className="team-position">Social Chair</p>
      </li>

      <li>
      <div className="team-img-container">

      <img src="/images/board/nicolas.JPG" alt="CSES Team Member"/>

      </div>
      <h5 className="team-name">Nicolas Lama-Solet</h5>
      <p className="team-position">BIC Chair</p>
      </li>

      <li>
      <div className="team-img-container">

      <img src="./images/board/anthony.JPG" alt="CSES Team Member"/>

      </div>
      <h5 className="team-name">Anthony Lu</h5>
      <p className="team-position">CSE Day Chair</p>
      </li>

      </ul>
      </div>
      </section>

      <section id="contact">
      <div className="section-container container">
      <h1>Contact</h1>

      <div className="contact-msg">
      <p>Leave us a message and we'll get back to you as soon as possible.</p> <p>Don't forget to also <span className='subscribe-btn'>subscribe</span> to our newsletter and join our <a href="https://www.facebook.com/groups/ucsdcses/" target="_blank">Facebook group</a> to stay up-to-date with our latest events!</p>
      </div>
      </div>
      </section>
      </div>



      <footer>
      <div className="footer-container">
      <div className="col left">
      <h5>Related Links</h5>
      <a href="/archives">Events Archives</a>
      <a className="subscribe-btn">Subscribe</a>
      <a href="https://www.facebook.com/groups/ucsdcses/" target="_blank">Facebook Group</a>
      <br />
      </div>

      <div className="col right">
      <p>UC San Diego</p>
      <p>9500 Gilman Dr.</p>
      <p>La Jolla, CA 92093</p>
      <br />
      <a href="mailto:csesucsd@gmail.com" >csesucsd@gmail.com</a>
      </div>

      <div className="footer-icons">
      <div className="col left">
      <img className="footer-cses-logo" src="/images/cseslogo-300.png" alt="CSES Logo" />
      </div>
      <div className="col right">
      <img className="footer-ucsd-logo" src="/images/ucsd-logo.png" alt="UCSD Logo" />
      </div>
      </div>
      </div>
      </footer>
      </div>

      );
}
