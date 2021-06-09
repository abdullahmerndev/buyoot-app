import React from 'react';

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage__jumbotron">
        <p className="slogan">Let's transform your house into a home</p>
      </div>
      <div className="homepage__content">
        <h2>Benefits you reap when you use our services</h2>
        <article>
          <h4>Best quality</h4>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </article>
        <article>
          <h4>Assured satisfaction</h4>
          <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </article>
        <article>
          <h4>Warranty and Maintenance</h4>
          <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </article>
      </div>
      <div id="cta">
        <h3>Let us begin the adventure</h3>
        <form className="cta-form">
          <label>Name</label>
          <input type="text" required />
          <label>Email</label>
          <input type="text" required />
          <label>Message</label>
          <textarea required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
