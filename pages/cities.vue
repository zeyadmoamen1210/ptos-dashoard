<template>
  <div class="cities-pages">
      <div class="container-fluid">
          <div class="employees cars" v-if="cities.length != 0 && $auth.loggedIn">
         <div class="emp-head">
           <div>
             <div class="head-who" style="width:250px">
            <span></span>
            <span></span>
            <span></span>
            <h3>المُحافظات</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
           </div>

           <div>
            <vs-button
              :active="active == 3"
              @click="handleAddCity"
            >
               إضافة مُحافظة           
            </vs-button>
          </div>
                         </div>


              <div class="row">
                <div class="col-md-3" v-for="(city) in cities" :key="city.id">
                  <div class="single-city">
                    <h6 style=" "> 
                      <span> {{city.nameAr}}  </span>
                    </h6>
                    <h6 class="city-nameEn"> 
                      <span> {{city.nameEn}}  </span>
                    </h6> 

                    <div class="cities-operations">
                     <div>
                        <vs-button
                          success
                          @click="handleEditCity(city)"
                        >
                        <img style="width:20px;" src="@/assets/imgs/icons/edit.svg" alt="">
                          
                        </vs-button>
                     </div>
                      <div>
                        <vs-button
                          danger
                          border
                        >
                        <img style="width:20px;" src="@/assets/imgs/icons/delete.svg" alt="">
                          
                        </vs-button>
                      </div>
                    </div>
                   
                  </div>
            </div>
            <div class="pagination-container">
              <vs-pagination v-model="page" :length="totalPages" />
            </div>
         </div>
      </div>
      </div>



      <vs-dialog blur v-model="addCityPopup">
        <template #header>
            <h4 class="not-margin">
              إضافة مُحافظة جديدة
            </h4>
        </template>

        <div>
          <div class="form-group">
            <label> الإسم باللغة العربية </label>
            <input v-model="addCity.nameAr" type="text" class="form-control">
          </div>
          <div class="form-group">
            <label> الإسم باللغة الإنجليزية </label>
            <input  v-model="addCity.nameEn" type="text" class="form-control">
          </div>
        </div>


      <div  class="model-foot">
          <button @click="addCityToApi" class="btn btn-success"> إضافة </button>
      </div>


    </vs-dialog>

    <vs-dialog blur v-model="editCityPopup">
        <template #header>
            <h4 class="not-margin">
              تعديل مُحافظة {{editCity.nameAr}}
            </h4>
        </template>



        <div>
          <div class="form-group">
            <label> الإسم باللغة العربية </label>
            <input v-model="editCity.nameAr" type="text" class="form-control">
          </div>
          <div class="form-group">
            <label> الإسم باللغة الإنجليزية </label>
            <input  v-model="editCity.nameEn" type="text" class="form-control">
          </div>
        </div>


      <div  class="model-foot">
          <button @click="updateCityApi" class="btn btn-success"> تعديل </button>
      </div>


    </vs-dialog>


  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data(){
    return {
      isLoading: true,
      page:1,
      totalPages:1,
      cities:[],
      active:1,
      addCity:{},
      addCityPopup: false,
      editCity: {},
      editCityPopup: false,
    }
  },
    created(){
      this.isLoading = true;
      this.getCities();
    },
    methods:{
      updateCityApi(){

      },
      handleEditCity(city){
        this.editCity = {...city};
        this.editCityPopup = true;
      },
      getCities(){
        this.isLoading = true;
        this.$axios.get(`/governorates`).then(res => {
          this.cities = res.data.docs;
          this.totalPages = res.data.totalPages;
          this.page = res.data.page;
        }).finally(() => this.isLoading = false);
      },
      addCityToApi(){
        this.addCityPopup = false;
        const loading = this.$vs.loading();
        this.$axios.post(`/governorate/addNew`, this.addCity).then(res => {
          this.addCity = {};
          this.$vs.notification({
            position:'top-center',
            color:'success',
            title: 'تم بنجاح',
            text: `لقد تم إضافة المُحافظة بنجاح`
          });
          this.getCities();
        }).catch(err => {
          this.$vs.notification({
            position:'top-center',
            color:'danger',
            title: 'فشل',
            text: `فشلت العملية لسبب ما`
          });
        }).finally(() => loading.close());
      },
      handleAddCity(){
        this.active = 3;
        this.addCityPopup = true;
      }
    }
}
</script>

<style lang="scss">

.cities-pages{
  .form-group{
    text-align: right;
  }  
  padding-top:50px;
   .employees{
    padding: 15px;
    background: #FFFF;
    border: 1px solid #CCC;
        margin-bottom: 25px;
    .emp-head{
          display: flex;
          flex-wrap: wrap;
    margin-bottom: 0;
    background: #f7f7f7;
           padding-top: 9px;
      >div{
        flex: 1;
        h5{
          text-align: right;
          margin-bottom: 0;
          padding-top: 5px;
          font-size: 22px;
        }
        &:last-of-type{
         button{
            text-align: left;
            display: inline-block;
         }
        }
      }
    }

    .single-city{
      padding: 13px 15px;
      text-align: center;
      box-shadow: 0 4px 25px 0 #0000001a;
      margin: 15px 0;
      h6{
          &:not(:last-of-type){
           margin-bottom:5px;  padding-bottom: 7px;border-bottom: 1px solid #EEE;font-weight:bold;text-align: center;
         }
      }
      .city-nameEn{
        text-align: center;
      }
    }
    .cities-operations{
      display: flex;
      justify-content: center;
      button{
        outline: none !important;
      }
    }
    .pagination-container{
      width:100%;margin-top:15px
    }
  }
}


</style>