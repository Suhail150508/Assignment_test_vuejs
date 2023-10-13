<!-- <template>
    <div>
<RouterLink class="btn btn-danger" to="/createstudent" style="float: right;">new student</RouterLink>
        <table class="table table-dark">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">name</th>
                    <th scope="col">class</th>
                    <th scope="col">image</th>
                    <th scope="col">actions</th>
                </tr>
            </thead>
            <tbody v-if="students.length > 0">
                <tr v-for="student in students" :key="student.id">
                    <th scope="row">{{ student.id }}</th>
                    <td>{{ student.name }}</td>
                    <td>{{ student.class }}</td>
                    <td><img :src="student.image" :alt="student.image"></td>
                    <td>
                     
               <button class="btn btn-success">Edit</button>
               <button class="btn btn-danger">Delete</button>

                    </td>
                </tr>
      
            </tbody>
            <tbody v-else>
                <tr>
                    <td>
                        Looding.....
                    </td>
                </tr>
            
            </tbody>
        </table>
    </div>
</template> -->


<!-- <template>
    <div class="container  " style="margin-left:18rem;margin-top:4rem">
  
      <RouterLink class="btn btn-primary " to="/studentcreate" style="float:right;">Add new Student</RouterLink>
      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">class</th>
            <th scope="col">image</th>
            <th scope="col">actions</th>
  
          </tr>
        </thead>
        <tbody v-if="users.length >0">
          <tr class="" v-for="user in users" v-bind:key="user.id">
            <td scope="row"> {{ user.id }} </td>
            <td> {{ user.name }} </td>
            <td> {{ user.class }} </td>
            <td> <img class="image" v-bind:src=user.image alt="image" style="height:60px;width:60px"></td>
  
            <td>
              <RouterLink class="btn btn-success " :to="{ path: ('/student/' + user.id + '/edit') }">Edit</RouterLink>
              <button class="btn btn-danger  " style="margin-left:.6rem" @click="Deletestudent(user.id)">Delete</button>
  
            </td>
          </tr>
  
        </tbody>
        <tbody v-else>
          <tr>
            <td>
              <h1 colspan="4">Loading....</h1>
            </td>
          </tr>
  
  
        </tbody>
      </table>
  
    </div>
  </template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';
export default {
    name: 'GetStudent',
    data() {

        return {

            students: {
                name: '',
                class: '',
                image: ''

            }
        }
    },
    mounted(){
        this.Getmethods();
        console.log(this.students) 
    },
 methods: {
    Getmethods(){

        axios.get('http://127.0.0.1:8000/api/students').then(res=>{
           console.log(res) 
           this.students = res.data;
    //        w.Header().Set("Content-Type", "application/json")
    // w.Header().Set("Access-Control-Allow-Origin", "*")
    // w.WriteHeader(code)
    // w.Write(response)
        })
    }
 },
  
//  func respondWithJson(w http.ResponseWriter, code int, payload interface{}) {
//     response, _ := json.Marshal(payload)

// }
}
</script>  -->

<!--  -->


<template>
    <div class="container  " style="margin-top:4rem">
      <RouterLink class="btn btn-primary " to="/studentcreate" style="float:right;">Add new Student</RouterLink>

      <table class="table table-dark">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">class</th>
            <th scope="col">image</th>
            <th scope="col">actions</th>
  
          </tr>
        </thead>
        <tbody v-if="users.length >0">
          <tr class="" v-for="user,index in users" v-bind:key="user.id">
            <td scope="row"> {{ index + 1 }} </td>
            <td> {{ user.name }} </td>
            <td> {{ user.class }} </td>
            <td> <img class="image" v-bind:src=user.image alt="image" style="height:60px;width:60px"></td>
  
            <td>
              <RouterLink class="btn btn-success " :to="{ path: ('/student/' + user.id + '/edit') }">Edit</RouterLink>
              <button class="btn btn-danger  " style="margin-left:.6rem" @click="Deletestudent(user.id)">Delete</button>
  
            </td>
          </tr>
  
        </tbody>
        <tbody v-else>
          <tr>
            <td>
              <h1 colspan="4">Loading....</h1>
            </td>
          </tr>
  
        </tbody>
      </table>
  
    </div>
  </template>
  
  
  <script>
  // import Vue from 'vue'
  import { RouterLink } from "vue-router";
  import axios from "axios";
  
  // Vue.use(axios)
  
  export default {
    name: "StudentShow",
    data() {
      return {
        users: {},
      };
    },
    created() {
      this.StudentShow();
    },
    methods: {
      StudentShow() {
  
      
          axios.get('http://127.0.0.1:8000/api/students').then(({data}) => {
            // console.log('fjlkdjlksd')
            this.users = data;
          });
     
  
      },
  
      Deletestudent(studentid){
  
        if(confirm('Are you sure, you want to delete student !')){
  
          axios.delete(`http://127.0.0.1:8000/api/student/${studentid}/delete`).then(res=>{
           alert(res.data.message);
           this.StudentShow();
            console.log(res.message);
          })
  
        }
  
  
  
      }
  
    },
    components: { RouterLink }
  };
  </script>