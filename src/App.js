import "./App.css";

function App() {
  return (
    <>
  
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link " href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link active" href="#">
              Features
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" href="#">
              Pricing
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
          <div class="row justify-content-center ">
            <div class="col-12 col-sm-6 col-lg-6 ">
              <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">Monthly</h5>
                  <h6 class="card-subtitle mb-2 text-muted">$18/mo</h6>
                  <div class="text-center">
                    <button type="button" class="btn">
                      FIND YOUR BOX
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-6  ">
              <div class="card text-center">
                <div class="card-body">
                  <h5 class="card-title">Yearly</h5>
                  <h6 class="card-subtitle mb-2 text-muted">$15/mo</h6>
                  <div class="text-center">
                    <button type="button" class="btn">
                      FIND YOUR BOX
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


</>
  );
}

export default App;
