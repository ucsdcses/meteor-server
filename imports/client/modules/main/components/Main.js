import { React, Component } from 'react';

const $ = require('jquery');

/*
 * Class for the main CSES webpage
 */
export default class MainPage extends Component {
  /*
   * Function for handling all the legacy jQuery methods after the
   * main page loads.
   *
   * TODO: Separate this page out into components so that it is more modular,
   * but this will probably happen after a full redesign
   */
  static componentDidMount() {
    // Cache selectors
    const nav = $('.nav-right-collapse, .nav-right');
    const navHeight = 60;
    // all list items
    const links = nav.find('a');

    const wrapper = $('.wrapper');
    wrapper.animate({
      opacity: 1,
      marginTop: 0,
    }, 700);

    // anchors corresponding to menu items
    function mapLinks() {
      const link = $($(this).attr('href'));
      if (link.length) { return link; }
      return null;
    }
    const scrollLinks = links.map(mapLinks);

    /* Easing scroll animation to the correct part of the page */
    function scrollAnim(e) {
      const href = $(this).attr('href');
      const offsetTop = (href === '#') ? 0 : ($(href).offset().top + 10) - navHeight;
      $('html, body').stop().animate({
        scrollTop: offsetTop,
      }, 300);
      e.preventDefault();
    }
    links.on('click', scrollAnim);

    /* Fix navbar to top */
    function navTopFix() {
      const scrollTop = $(document).scrollTop();
      if (scrollTop > 60) {
        $('nav').addClass('fixed');
      } else {
        $('nav').removeClass('fixed');
      }
    }
    $(document).on('scroll', navTopFix);

    /* Highlight current nav item */
    function highLightNav() {
      let lastId;
      // Get container scroll position
      const fromTop = $(this).scrollTop() + navHeight + 25;

      // Get id of current scroll item
      function getScrollId() {
        const linkTop = $(this).offset().top;
        const sectionHeight = $(this).height();
        // 2nd check is to unselect the last item if we keep
        // scrolling past it. Give it leeway of 125 to account for padding
        if (linkTop < fromTop && fromTop < (linkTop + sectionHeight + 100)) {
          return this;
        }
        return 0;
      }
      let cur = scrollLinks.map(getScrollId);
      // Get the id of the current element
      cur = cur[cur.length - 1];
      const id = cur && cur.length ? cur[0].id : '';
      if (lastId !== id) {
        lastId = id;
        links.removeClass('active');
        // TODO, add active class to navs
        // links.filter('[href=#'+id+']').addClass('active');
      }
    }
    $(document).on('scroll', highLightNav);

    /* Submit contact form submit button functionality */
    function contactSubmit() {
      $(this).submit();
    }
    $('.contact-submit-btn').on('click', contactSubmit);

    // esc hit - close form or close nav-collapse
    function escHitCloseForm(e) {
      if (e.keyCode === 27) { // escape key maps to keycode `27`
        if ($('.subscribe-form').css('display') === 'block') {
          $('.subscribe-close').click();
        } else {
          $('.nav-right-hamburger, .nav-right-collapse').removeClass('on');
        }
      }
    }
    $(document).keyup(escHitCloseForm);

    // subscribe clicked - show subscribe form
    function showSubscribeForm() {
      $('.subscribe-overlay').show();
      $('.subscribe-form').show().animate({
        top: '30%',
      }, 200);
    }
    $('.subscribe-btn').on('click', showSubscribeForm);

    // subscribe-close or outside of form is clicked - exit form
    function exitSubscribeForm() {
      $('.subscribe-overlay').hide();
      $('.subscribe-form').css('top', '28%');
      $('.subscribe-form').hide();
    }
    $('.subscribe-overlay, .subscribe-close').on('click', exitSubscribeForm);

    // hamburger nav clicked - toggle nav-collapse
    function collapseHamburger() {
      $('.nav-right-hamburger').toggleClass('on');
      $('.nav-right-collapse').toggleClass('on');
    }
    $('.nav-right-hamburger, .nav-right-collapse a').on('click', collapseHamburger);
  }

  /*
   * Render method for the webpage, contains an unreasonable amount of HTML for
   * handling the various containers.
   */
  static render() {
    return (
      <div>
        <div className="subscribe-overlay" />
        <div className="subscribe-form" id="mc_embed_signup">
          <form
            action="//ucsd.us12.list-manage.com/subscribe/post?u=fe523e83d20e97f4c9c0a1071&amp;id=678953a0c1"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <h5>Subscribe to CSES newsletter</h5>
              <input type="email" value="" name="EMAIL" id="mce-EMAIL" required />
              <div aria-hidden="true">
                <input
                  type="text"
                  name="b_fe523e83d20e97f4c9c0a1071_678953a0c1"
                  tabIndex="-1"
                  value=""
                />
              </div>
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="subscribe-submit"
              />
              <input type="button" className="subscribe-close" value="Close" />
            </div>
          </form>
        </div>


        <nav>
          <div className="nav-container">
            <div className="nav-left">
              <a href="/"><img src="/images/cseslogo-300.png" alt="CSES Logo" /></a>
            </div>

            <div className="nav-right">
              <a href="#about">About</a>
              {/* TODO: Fix these to work with meteor
              <a href="showcase">Showcase</a>
              <a href="cselabs">CSE Labs</a>
              <a href="#events">Events</a>*/}
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="nav-right-hamburger">
              <div className="toggle-1" />
              <div className="toggle-2" />
              <div className="toggle-3" />
            </div>
            <div className="nav-right-collapse">
              <a href="#about">About</a>
              <a href="showcase">Showcase</a>
              <a href="cselabs">CSE Labs</a>
              <a href="#events">Events</a>
              <a href="#team">Team</a>
              <a href="#contact">Contact</a>
              <img src="/images/cseslogo-300.png" alt="CSES Logo" />
            </div>
          </div>
        </nav>


        <div id="main" role="main">
          <header>
            <div className="wrapper" id="wrapper">
              <h2>UC San Diego</h2>
              <h1>Computer Science &amp; Engineering Society</h1>
              <h4>Connecting UC San Diego's CSE community</h4>
              <a
                className="header-btn facebook-btn"
                href="https://www.facebook.com/groups/ucsdcses/"
                target="_blank"
                rel="noopener noreferrer"
              >Facebook Group</a>
              <a className="header-btn subscribe-btn">Subscribe</a>
            </div>
          </header>

          <section id="about">
            <div className="section-container container">
              <h1>Our Goal</h1>
              <p>At CSES, we aim to form a passionate community of computer
              scientists and engineers at UC San Diego. From tech talks, to
              social events, to outreach, we have a diverse set of events and
              activities that appeal to any computer scientist or engineer.</p>
            </div>

            <div className="pillar-container">

              <div className="pillar">
                <div className="pillar-icon">
                  <img src="/images/innovate.svg" alt="Pillar Icon" />
                </div>
                <div className="triangle" />
                <h4>Innovate</h4>
              </div>

              <div className="pillar">
                <div className="pillar-icon">
                  <img src="/images/build.svg" alt="Pillar Icon" />
                </div>
                <div className="triangle" />
                <h4>Build</h4>
              </div>

              <div className="pillar">
                <div className="pillar-icon">
                  <img src="/images/connect.svg" alt="Pillar Icon" />
                </div>
                <div className="triangle" />
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
                    <img src="/images/board/jacob.JPG" alt="CSES Team Member" />
                  </div>
                  <h5 className="team-name">Jacob Davis</h5>
                  <p className="team-position">President</p>
                </li>

                <li>
                  <div className="team-img-container">
                    <img src="/images/team-placeholder.jpg" alt="CSES Team Member" />
                  </div>
                  <h5 className="team-name">Eric Lin</h5>
                  <p className="team-position">VP External</p>
                </li>

                <li>
                  <div className="team-img-container">
                    <img src="/images/board/rahul.JPG" alt="CSES Team Member" />
                  </div>
                  <h5 className="team-name">Rahul Sabnis</h5>
                  <p className="team-position">VP Internal</p>
                </li>

                <li>
                  <div className="team-img-container">
                    <img src="/images/board/joanne.JPG" alt="CSES Team Member" />
                  </div>
                  <h5 className="team-name">Joanne Son</h5>
                  <p className="team-position">VP Finance</p>
                </li>

                <li>
                  <div className="team-img-container">
                    <img src="/images/board/joel.JPG" alt="CSES Team Member" />
                  </div>
                  <h5 className="team-name">Joel Sequeira</h5>
                  <p className="team-position">Pro-Dev Chair</p>
                </li>

                <li>
                  <div className="team-img-container">
                    <img src="/images/board/sean.JPG" alt="CSES Team Member" />
                  </div>
                  <h5 className="team-name">Sean Mcentee</h5>
                  <p className="team-position">Design Chair</p>
                </li>

                <li>
                  <div className="team-img-container">
                    <img src="/images/team-placeholder.jpg" alt="CSES Team Member" />
                  </div>
                  <h5 className="team-name">Maxwell Bland</h5>
                  <p className="team-position">Tech Chair</p>
                </li>

                <li>
                  <div className="team-img-container">
                    <img src="/images/board/niral.JPG" alt="CSES Team Member" />
                  </div>
                  <h5 className="team-name">Niral Patel</h5>
                  <p className="team-position">PR Chair</p>
                </li>

                <li>
                  <div className="team-img-container">
                    <img src="/images/board/sandra.JPG" alt="CSES Team Member" />
                  </div>
                  <h5 className="team-name">Sandra Luo</h5>
                  <p className="team-position">Social Chair</p>
                </li>

                <li>
                  <div className="team-img-container">
                    <img src="/images/board/nicolas.JPG" alt="CSES Team Member" />
                  </div>
                  <h5 className="team-name">Nicolas Lama-Solet</h5>
                  <p className="team-position">BIC Chair</p>
                </li>

                <li>
                  <div className="team-img-container">
                    <img src="./images/board/anthony.JPG" alt="CSES Team Member" />
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
                <p>Leave us a message and we'll get back to you as soon as possible.
                </p>
                <p>Don't forget to also <span className="subscribe-btn">subscribe
                </span> to our newsletter and join our
                <a
                  href="https://www.facebook.com/groups/ucsdcses/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                Facebook group</a> to stay up-to-date with our latest events!</p>
              </div>
              <form
                method="POST"
                id="contact-form"
                action="//formspree.io/csesucsd@gmail.com"
              >
                <div className="contact-name contact-field">
                  <label className="contact-label" htmlFor="name">Name *</label>
                  <input type="text" required="" name="name" id="name" />
                </div>
                <div className="contact-email contact-field">
                  <label className="contact-label" htmlFor="email">Email *</label>
                  <input type="email" required="" name="_replyto" id="email" />
                </div>
                <div className="contact-content contact-field">
                  <label
                    className="contact-label"
                    htmlFor="body"
                  >Message *</label>
                  <textarea
                    className="contact-content"
                    required=""
                    name="body"
                    id="body"
                  />
                  <input type="text" name="_gotcha" style={{ display: 'none' }} />
                </div>
                <div className="contact-submit contact-field">
                  <button className="contact-submit-btn">Submit!
                    <i className="fa fa-paper-plane" />
                  </button>
                </div>
                <input type="hidden" name="_subject" value="CSES: New Message" />
                <input type="hidden" name="_next" value="#" />
              </form>
            </div>
          </section>
        </div>

        <footer>
          <div className="footer-container">
            <div className="col left">
              <h5>Related Links</h5>
              <a href="/archives">Events Archives</a>
              <a className="subscribe-btn">Subscribe</a>
              <a
                href="https://www.facebook.com/groups/ucsdcses/"
                target="_blank"
                rel="noopener noreferrer"
              >Facebook Group</a>
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
                <img
                  className="footer-cses-logo"
                  src="/images/cseslogo-300.png"
                  alt="CSES Logo"
                />
              </div>
              <div className="col right">
                <img
                  className="footer-ucsd-logo"
                  src="/images/ucsd-logo.png"
                  alt="UCSD Logo"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>

    );
  }
}
