import logo from './logo.svg';
import * as styles from '../src/App.scss'
import { DynamicForm } from './app/reactHookForm';

function App() {
  return (
    <div className="App">
        
      <div className="container-fluid overflow-hidden">
        <div className="row header p-2">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
          <div class="row">
  <div class="col">
    <input class=" mr-sm-2 d-inline form-control" type="search" placeholder="Search" aria-label="Search" />
  </div>
  <div class="col">
  <button class="btn btn-outline-success my-2 my-sm-0 d-inline" type="submit">Search</button>
  </div>
</div>
           
            
        </div>
        </nav>
        </div>
        <div className="row" >
            <div className="col-lg-3 col-md-3 sideMenu ">
                <div className="d-flex gx-2 gy-3 mt-1 row flex-column justify-content-start">
                    <div className="col-12 menuItem"></div>
                    <div className="col-12 menuItem"></div>
                    <div className="col-12 menuItem"></div>
                    <div className="col-12 menuItem"></div>
                </div>
                
            </div>
            <div className="col-lg-6 flex-column  content col-md-9 d-flex  flex-direction-column align-items-start pt-4">
              <div className='row'>
              <DynamicForm />
              </div>
              
            <form class="row g-3">
  <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4" />
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" />
  </div>
  <div class="col-12">
    <label for="inputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Address 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
  </div>
  <div class="col-md-6">
    <label for="inputCity" class="form-label">City</label>
    <input type="text" class="form-control" id="inputCity" />
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-2">
    <label for="inputZip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="inputZip" />
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck" />
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
            </div>
            <div className="col-lg-3 column-3 col-md-12 d-flex align-items-center justify-content-center" >
            <div class="card" style={{width: '18rem', height: 'auto'}}>
              <img src="https://dummyimage.com/640x4:3/" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
            </div>
        </div>
        <div className="row footer">
            
        </div>
    </div>
    </div>
  );
}

export default App;
