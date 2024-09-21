import React from "react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero relative">
      <div className="hero-bg-video-overlay-horizontal"></div>
      <div className="container z-10 relative">
        <div className="hero-bg-video-left pt-40 mb-20">
          <div className="hero-bg-video-content">
            <h1 className="hero-bg-video-title">
              Hire the Top 5% of professional Talent
            </h1>
            <p className="hero-bg-video-des">
              TopTalenz is network of Highly skilled, certified tech
              professionals. <br></br>Ready to onboard quickly and effectively.
            </p>
          </div>
          <div className="hero-bg-video-btns">
            <a
              href="/request-demo"
              className="button-primary w-button bg-[#0e8ac8] text-white"
            >
              Hire Talent
            </a>
          </div>
        </div>
        <div className="hero-bg-video-counters pb-3">
          <div className="hero-bg-video-counter-card">
            <div className="hero-bg-video-counter-value-wrapper">
              <div className="component-counter">
                <div className="andl-counter-init">
                  <div className="component-counter-value andl-counter-init-count">
                    85%
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-bg-video-counter-value-wrapper-counter-text">
              Reduction in hiring cost
            </div>
          </div>
          <div className="hero-bg-video-counter-card">
            <div className="hero-bg-video-counter-value-wrapper">
              <div className="component-counter">
                <div className="andl-counter-init">
                  <div className="component-counter-value andl-counter-init-count">
                    7X
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-bg-video-counter-value-wrapper-counter-text">
              Faster than traditional hiring
            </div>
          </div>
          <div className="hero-bg-video-counter-card">
            <div className="hero-bg-video-counter-value-wrapper">
              <div className="component-counter">
                <div className="andl-counter-init">
                  <div className="component-counter-value andl-counter-init-count">
                    40%
                  </div>
                </div>
              </div>
            </div>
            <div className="hero-bg-video-counter-value-wrapper-counter-text">
              Faster project delivery
            </div>
          </div>
        </div>
      </div>
      <video
        className="w-full"
        src="https://cdn.pixabay.com/video/2021/11/08/95126-645704295_large.mp4"
        // src="https://cdn.prod.website-files.com/660dcc7f45ad8881324199b5%2F66627bcadad1fe7e52b91a2d_060624%20%20Homepage%20Hero%20Video%20compressed-transcode.mp4"
        autoPlay
        controls={false}
        loop={true}
        muted
      ></video>
      <div className="hero-bg-video-overlay-vertical"></div>
    </div>
  );
}
