import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <span className="">About your store</span>
                <p className="footer-text">We dare to be different and we invite you to do the same.
We'd love you to join us on this colourful adventure of being
you. You are here to be yourself. Fully and unapologetically.</p>

<p className="footer-text">Now, let's show to the world what we are made of!</p>
            </div>
            <div>
                <span className="">Helpful Links</span>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Shop</a>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Blog</a>
            </div>
            <div>
                <span className="">Quick Shop</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
            <div>
                <span className="">Let's stay in touch</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <p className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;