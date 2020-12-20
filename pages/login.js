import Link from "next/link";

export default function Login() {
  return (
    <section className="position-relative pb-5">
      <div className="container">
        <div className="position-absolute top-0 right-0 d-none d-lg-flex align-items-center col-lg-6 h-100 bg-primary">
          <div className="p-4">
            <img
              className="img-fluid"
              src="metis-assets/illustrations/walk-dog.png"
              alt=""
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="row pt-4">
              <div className="col-12 col-md-8 col-lg-10 mx-auto">
                <div className="mb-5 pb-5 d-flex align-items-center justify-content-between">
                  <Link href="/">
                    <a>
                      <img
                        className="img-fluid"
                        src="metis-assets/logos/metis/metis.svg"
                      />
                    </a>
                  </Link>
                  <Link href="/register">
                    <a className="btn btn-outline-primary">Sign Up</a>
                  </Link>
                </div>
                <div className="mb-4">
                  <form action="#">
                    <span className="text-muted">Sign In</span>
                    <h2 className="mb-4 fw-light">Join our community</h2>
                    <div className="mb-3 input-group">
                      <input
                        className="form-control"
                        type="email"
                        placeholder="name@email.com"
                      />
                      <span className="input-group-text">
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="mb-3 input-group">
                      <input
                        className="form-control"
                        type="password"
                        placeholder="Enter your password"
                      />
                      <div className="input-group-text">
                        <svg
                          width="20"
                          height="20"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <button className="btn btn-primary mb-4 w-100">
                      Sign In
                    </button>
                    <p className="mb-4 text-muted text-center">
                      or continue with
                    </p>
                    <button
                      className="btn btn-outline-secondary mb-2 w-100 text-left"
                      href="#"
                    >
                      <img
                        className="img-fluid mr-2"
                        src="metis-assets/logos/facebook-sign.svg"
                      />
                      <span>Sign In with Facebook</span>
                    </button>
                    <button
                      className="btn btn-outline-secondary w-100 text-left"
                      href="#"
                    >
                      <img
                        className="img-fluid mr-2"
                        src="metis-assets/logos/google-sign.svg"
                      />
                      <span>Sign In with Google</span>
                    </button>
                    <p className="mt-4">
                      <a href="#">Police privacy</a> and{" "}
                      <a href="#">Terms of Use</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
