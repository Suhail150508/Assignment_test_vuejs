
<template>
  <section class="vh-100" style="background-color: #eee;">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style="border-radius: 25px;">
            <div class="card-body p-md-5">
              <div class="row justify-content-center">
                <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
  
                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Create Info</p>
  
                  <form @submit="formSubmit" enctype="multipart/form-data">
                    <div class="form-group">
                      <label for="exampleInputEmail1">Name</label>
                      <input type="text" class="form-control" v-model="model.addStudent.name" id="exampleInputEmail1"
                        aria-describedby="emailHelp" placeholder="Enter name">
                    </div>
                    <div class="form-group">
                      <label>Class</label>
                      <input type="text" class="form-control" v-model="model.addStudent.class" id="exampleInputPassword1"
                        placeholder="Class">
                    </div>
                    <div class="form-group">
                      <label>Image</label>
                      <input type="file" class="form-control" accept="image/jpg, image/png, image/jpeg" @change="onImageChange">
                    </div>
              
                    <button  class="btn btn-primary">Save</button>
                  </form>
  
                </div>
                <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
  
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                    class="img-fluid" alt="Sample image">
  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "StudentCreate",
    data() {
      return {
        model: {
          addStudent: {
            name: '',
            class: '',
            image: ''
          },
        },
      }
    },
  
    methods: {
      onImageChange(e) {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onloadend = (file) => {
            this.model.addStudent.image = reader.result;
        }
        reader.readAsDataURL(file);
      },
  
      formSubmit(e) {
        e.preventDefault();
        const config = {
          headers: { 'content-type': 'multipart/form-data' }
        }
  
        // let formData = new FormData();
        // formData.append('image', this.model.addStudent);
        try {
          axios.post('http://127.0.0.1:8000/api/store', this.model.addStudent,config ).then(res => {
            console.log(res.data);
            this.$router.push({ name: 'home' })
          });
  
        } catch (error) {
          
        }
      }
    }
  }
  </script>