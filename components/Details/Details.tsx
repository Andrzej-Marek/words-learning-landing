import React, { FC } from "react";

interface OwnProps {}

type Props = OwnProps;

const Details: FC<Props> = () => {
  return (
    <>
      <div className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                <h2>Design And Plan Your Business Growth Steps</h2>
                <p>
                  Use our staff and our expertise to design and plan your
                  business growth strategy. Evolo team is eager to advise you on
                  the best opportunities that you should look into
                </p>
                <a
                  className="btn-solid-reg popup-with-move-anim"
                  href="#details-lightbox-1"
                >
                  LIGHTBOX
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/details-1-office-worker.svg"
                  alt="alternative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/details-2-office-team-work.svg"
                  alt="alternative"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-container">
                <h2>Search For Optimization Wherever Is Possible</h2>
                <ul className="list-unstyled li-space-lg">
                  <li className="media">
                    <i className="fas fa-check"></i>
                    <div className="media-body">
                      Basically we'll teach you step by step what you need to do
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-check"></i>
                    <div className="media-body">
                      In order to develop your company and reach new heights
                    </div>
                  </li>
                  <li className="media">
                    <i className="fas fa-check"></i>
                    <div className="media-body">
                      Everyone will be pleased from stakeholders to employees
                    </div>
                  </li>
                </ul>
                <a
                  className="btn-solid-reg popup-with-move-anim"
                  href="#details-lightbox-2"
                >
                  LIGHTBOX
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="details-lightbox-1"
        className="lightbox-basic zoom-anim-dialog mfp-hide"
      >
        <div className="container">
          <div className="row">
            <button
              title="Close (Esc)"
              type="button"
              className="mfp-close x-button"
            >
              ×
            </button>
            <div className="col-lg-8">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/details-lightbox-1.svg"
                  alt="alternative"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <h3>Design And Plan</h3>
              <hr />
              <h5>Core feature</h5>
              <p>
                The emailing module basically will speed up your email marketing
                operations while offering more subscriber control.
              </p>
              <p>
                Do you need to build lists for your email campaigns? It just got
                easier with Evolo.
              </p>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">List building framework</div>
                </li>
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">Easy database browsing</div>
                </li>
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">User administration</div>
                </li>
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">Automate user signup</div>
                </li>
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">Quick formatting tools</div>
                </li>
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">Fast email checking</div>
                </li>
              </ul>
              <a
                className="btn-solid-reg mfp-close page-scroll"
                href="#request"
              >
                REQUEST
              </a>{" "}
              <a
                className="btn-outline-reg mfp-close as-button"
                href="#screenshots"
              >
                BACK
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        id="details-lightbox-2"
        className="lightbox-basic zoom-anim-dialog mfp-hide"
      >
        <div className="container">
          <div className="row">
            <button
              title="Close (Esc)"
              type="button"
              className="mfp-close x-button"
            >
              ×
            </button>
            <div className="col-lg-8">
              <div className="image-container">
                <img
                  className="img-fluid"
                  src="images/details-lightbox-2.svg"
                  alt="alternative"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <h3>Search To Optimize</h3>
              <hr />
              <h5>Core feature</h5>
              <p>
                The emailing module basically will speed up your email marketing
                operations while offering more subscriber control.
              </p>
              <p>
                Do you need to build lists for your email campaigns? It just got
                easier with Evolo.
              </p>
              <ul className="list-unstyled li-space-lg">
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">List building framework</div>
                </li>
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">Easy database browsing</div>
                </li>
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">User administration</div>
                </li>
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">Automate user signup</div>
                </li>
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">Quick formatting tools</div>
                </li>
                <li className="media">
                  <i className="fas fa-check"></i>
                  <div className="media-body">Fast email checking</div>
                </li>
              </ul>
              <a
                className="btn-solid-reg mfp-close page-scroll"
                href="#request"
              >
                REQUEST
              </a>{" "}
              <a
                className="btn-outline-reg mfp-close as-button"
                href="#screenshots"
              >
                BACK
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
