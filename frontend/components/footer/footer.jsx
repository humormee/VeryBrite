import React from 'react';

export const Footer = () => {
    return (
        <div class="footer">
            <div class="footer-info">
                <div class="copyright">&copy; Justin Ernst 2022</div>
                <div class="technologies">JavaScript &bull; Ruby on Rails &bull; React &bull; Redux &bull; PostgreSQL &bull; HTML5 &bull; CSS3 &bull; SCSS</div>
            <   div className="website-links">
                    <a href='https://github.com/humormee' target="_blank"><i className="fab fa-github"><span ></span></i></a>
                    <a href="https://www.linkedin.com/in/justin-ernst-a0ab10156/" target="_blank"><i className="fab fa-linkedin"><span ></span></i></a>
                    <a href="https://angel.co/u/justin-ernst" target="_blank"><i className="fab fa-angellist"><span ></span></i></a>
                    <a href="https://humormee.github.io/portfolio/" target="_blank"><i class="far fa-address-card"><span></span></i></a>
                </div>
            </div>
            <span></span>
        </div>
    )
}

export default Footer;