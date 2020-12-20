import React from "react";

const Products = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="mb-4 fw-bold">Latest Fruits</h2>
        <div className="row mb-5">
          <div className="col-12 col-lg-4 mb-3">
            <a className="text-decoration-none" href="#">
              <img
                className="w-100 mb-3 rounded"
                style={{ objectFit: "cover", height: "20rem" }}
                src="images/apple.png"
                alt=""
              />
            </a>
            <div>
              <a className="text-decoration-none" href="#">
                CATEGORY
              </a>
              <span className="text-muted">24 Jan, 2020</span>
            </div>
            <h4 className="my-2 fw-bold">
              <a className="text-decoration-none" href="#">
                Lorem ipsum dolor sit amet.
              </a>
            </h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            <p className="text-muted lh-lg">luctus eget justo et iaculis.</p>
          </div>
          <div className="col-12 col-lg-8 mb-3">
            <a className="text-decoration-none" href="#">
              <img
                className="w-100 mb-3 rounded"
                style={{ objectFit: "cover", height: "20rem" }}
                src="/images/mango.jpg"
                alt=""
              />
            </a>
            <div>
              <a className="text-decoration-none" href="#">
                CATEGORY
              </a>
              <span className="text-muted">24 Jan, 2020</span>
            </div>
            <h4 className="my-2 fw-bold">
              <a className="text-decoration-none" href="#">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </a>
            </h4>
            <p className="text-muted lh-lg">
              Aenean tempus orci eu est ultrices hendrerit. Fusce suscipit, leo
              a semper venenatis, felis urna pulvinar nibh, vitae porta erat
              risus sed mauris. Vestibulum vehicula leo eget libero eleifend.
            </p>
          </div>
          <div className="col-12 col-lg-4 mt-3">
            <a className="text-decoration-none" href="#">
              <img
                className="w-100 mb-3 rounded"
                style={{ objectFit: "cover", height: "20rem" }}
                src="https://images.unsplash.com/photo-1602536100338-c7762727ddb7?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt=""
              />
            </a>
            <div>
              <a className="text-decoration-none" href="#">
                CATEGORY
              </a>
              <span className="text-muted">24 Jan, 2020</span>
            </div>
            <h4 className="my-2 fw-bold">
              <a className="text-decoration-none" href="#">
                Lorem ipsum dolor sit amet.
              </a>
            </h4>
            <p className="text-muted lh-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
          <div className="col-12 col-lg-4 mt-3">
            <a className="text-decoration-none" href="#">
              <img
                className="w-100 mb-3 rounded"
                style={{ objectFit: "cover", height: "20rem" }}
                src="https://images.unsplash.com/photo-1603665330306-dd1a67e0cc4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80"
                alt=""
              />
            </a>
            <div>
              <a className="text-decoration-none" href="#">
                CATEGORY
              </a>
              <span className="text-muted">24 Jan, 2020</span>
            </div>
            <h4 className="my-2 fw-bold">
              <a className="text-decoration-none" href="#">
                Lorem ipsum dolor sit amet.
              </a>
            </h4>
            <p className="text-muted lh-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
          <div className="col-12 col-lg-4 mt-3">
            <a className="text-decoration-none" href="#">
              <img
                className="w-100 mb-3 rounded"
                style={{ objectFit: "cover", height: "20rem" }}
                src="https://images.unsplash.com/photo-1603665270146-bbdf9858ea55?ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt=""
              />
            </a>
            <div>
              <a className="text-decoration-none" href="#">
                CATEGORY
              </a>
              <span className="text-muted">24 Jan, 2020</span>
            </div>
            <h4 className="my-2 fw-bold">
              <a className="text-decoration-none" href="#">
                Lorem ipsum dolor sit amet.
              </a>
            </h4>
            <p className="text-muted lh-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              luctus eget justo et iaculis.
            </p>
          </div>
        </div>
        <div className="text-center">
          <a className="btn btn-primary" href="#">
            Show all posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
