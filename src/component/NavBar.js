import React from 'react'
import techrel1 from './image/techrel1.jpg'



function NavBar() {
  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-body-tertiary color-light">
        <div class="container-fluid">
          <img src={techrel1} alt="" height="60px" width="160px"/>


          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>



          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-3 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><b>Home</b></a>
              </li>
   
           <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <b>Courses</b>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Full Stack Java Developr</a></li>
                  <li><a class="dropdown-item" href="#">Software Testing</a></li>
                  <li><a class="dropdown-item" href="#">Ul/UX Developer</a></li>
                  <li><a class="dropdown-item" href="#">Ul/Angular JS Developer</a></li>
                  <li><a class="dropdown-item" href="#">Ul/React JS Developer</a></li>
                  <li><a class="dropdown-item" href="#">DevOps</a></li>
                  <li><a class="dropdown-item" href="#">AWS</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><b>Placed Students</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><b>About Us</b></a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="#"><b>Testimonials</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><b>Contact Us</b></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><b>Compus </b></a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
