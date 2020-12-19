import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="row">
        <div className="col-12 col-lg-6 mx-auto text-center text-lg-left">
          <div className="col-md-8 col-lg-10 mx-auto mx-lg-0 pt-lg-5 pb-4">
            <h2 className="mb-3 fs-1 fw-bold">
              <span>The quick</span>
              <span className="text-primary">brown fox</span>
              <span>jumps over the lazy dog.</span>
            </h2>
            <p className="pr-lg-5 text-muted lh-lg mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis. Quisque vitae nulla malesuada,
              auctor arcu vitae, luctus nisi.
            </p>
          </div>
          <div>
            <a className="mr-2 btn btn-primary" href="#">
              Check Now
            </a>
            <a className="btn btn-outline-primary" href="#">
              Documentation
            </a>
          </div>
        </div>
        <div className="col-12 col-lg-6 mt-5 mt-lg-0">
          <div>
            <img
              className="img-fluid"
              src="metis-assets/illustrations/work-tv.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
