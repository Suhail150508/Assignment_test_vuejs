
<template>
  <nav class=" container navbar navbar-expand-lg   " style="display:flex;justify-content:space-between;"  >
    
    
    <div class="collapse navbar-collapse text-dark " id="navbarSupportedContent" style="display: flex;justify-content:space-between;">
        <a class="navbar-brand" href="#" >Home</a>
        <ul class="navbar-nav mr-auto" >
          <li class="nav-item">
            <RouterLink class="nav-link" to='/login' style="font-size:1.2rem">Login</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to='/resister' style="font-size:1.2rem">Resister</RouterLink>
          </li>
          
        </ul>
 
      </div>
    </nav>
</template>