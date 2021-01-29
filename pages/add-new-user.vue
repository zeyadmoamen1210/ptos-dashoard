<template>
  <div class="add-new-user-page">
    <div class="container">
      
      <div class="add-new-user">
        <!-- <font-awesome-icon  /> -->
        <form-wizard  title="إضافة شاملة" 
        ref="addOwnerCarDriver"
        back-button-text="السابق"
        next-button-text="التالي"
        finish-button-text="تسجيل"
        subtitle="إضافة شاملة لمالك و سيارة و إختيار سائق للسيارة "  shape="tab" color="#3498db"  @on-complete="onComplete">
          <tab-content  title="إضافة مالك السيارة">
          
            <div>
              <div class="form-group">
                <input
                  placeholder="الاسم"
                  v-model="addOwner.username"
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <input type="number" v-model="addOwner.nationalId" placeholder="الرقم القومي" class="form-control">
              </div>

              <div class="form-group">
                <input
                  type="password"
                  v-model="addOwner.password"
                  placeholder="كلمة المرور"
                  class="form-control"
                />
              </div>

              <div class="form-group">
                <vue-phone-number-input
                  v-model="addNewOwnerPhone"
                  @update="phoneOwnerUpdate"
                  :default-country-code="`EG`"
                  placeholder="رقم الهاتف"
                  :translations="{
                    countrySelectorLabel: 'كود الدولة',
                    countrySelectorError: 'خطأ',
                    phoneNumberLabel: 'رقم الهاتف',
                    example: 'مثال :'
                  }"
                />
              </div>
            </div>

            <div class="file-uploader" style="     width: 100%">
              <input type="file" @change="file_selected" />
              <img style="width:100px" v-if="url" :src="url" alt="" />
              <div v-else>
                <img
                  src="https://i.ibb.co/pfybPxs/noun-Camera-1903011.png"
                  alt=""
                />
                <h6>إرفق صورة شخصية للمالك</h6>
              </div>
            </div>
          </tab-content>
          <tab-content title="بيانات السيارة" >
            <div>
              <div class="form-group">
                <input
                  placeholder="رقم السيارة"
                  type="text"
                  v-model="newCar.number"
                  class="form-control"
                />
              </div>

               <div class="form-group">
          <input placeholder="عدد كراسي السيارة" type="number" v-model="newCar.numberOfSeats" class="form-control">
        </div>


              <div class="form-group">
                <v-select
                  v-model="newCar.type"
                  label="text"
                  placeholder="نوع التوصيل"
                  :reduce="text => text.value"
                  :options="[{text:'عام', value: 'public'}, {text:'سفر', value: 'travel'} ]"
                ></v-select>
              </div>
              <div class="form-group">
                <v-select
                  v-model="newCar.transportType"
                  label="text"
                  placeholder="النوع"
                  :reduce="text => text.value"
                  :options="[{text:'اتوبيس', value: 'bus'}, {text:'تاكسي', value: 'taxi'} ]"
                ></v-select>
              </div>
              <div></div>
            </div>
          </tab-content>
          <tab-content title="بيانات السائق" >
            <!-- Drivers -->

          
      <div>
        <div class="form-group">
          <input placeholder="الاسم" v-model="addDriver.username" type="text" class="form-control">
        </div>

        <div class="form-group">
          <input type="password" v-model="addDriver.password" placeholder="كلمة المرور" class="form-control">
        </div>

        <div class="form-group">
       
          <vue-phone-number-input
                  v-model="addNewDriverPhone"
                  @update="phoneUpdateDriver"
                  :default-country-code="`EG`"
                  placeholder="رقم الهاتف"
                  :translations="{
                    countrySelectorLabel: 'كود الدولة',
                    countrySelectorError: 'خطأ',
                    phoneNumberLabel: 'رقم الهاتف',
                    example: 'مثال :'
                  }"
            />
        </div>
        <!-- <div class="form-group">
           <v-select v-model="addDriver.car" :options="cars" label="number" :reduce="number => number.id"></v-select>
        </div> -->
      </div>

      <div class="file-uploader" style="     width: 100%">
          <input type="file" @change="file_selected_driver">
          <img style="width:100px" v-if="driverUrl" :src="driverUrl" alt="">
          <div v-else>
              <img src="https://i.ibb.co/pfybPxs/noun-Camera-1903011.png" alt="">
              <h6>إرفق صورة شخصية للسائق</h6>
          </div>
      </div>



          </tab-content>
        </form-wizard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: ['auth'],
  data() {
    return {
        currOwnerToAddCar:{},
        driverPhoto:"",
        driverUrl:'',
      addOwner: {},
      addDriver:{},
      addNewDriverPhone:"",
      driversSelected: [],
      newCar: {},
      drivers: [],
      driversPage: 1,
      driversTotalPages: 1,
      url: "",
      driverCar: "",
      photo: "",
      addNewOwnerPhone:""
    };
  },
  methods: {
       phoneUpdateDriver(e){
      console.log(e);
      this.addDriver.phone = e;
      // this.checkDirection();
    },
       addOwnerMain(){
        const isLoading = this.$vs.notification({
            loading: true,
            color:'primary',
            duration:'none',
            position:'top-left',
      });

      this.addOwnerPopup = false;

      

    },
      onComplete(){

        let loading = this.$vs.loading();
          let formData = new FormData();
      formData.append('username', this.addOwner.username);
      formData.append('phone', this.addOwner.phone.formattedNumber); 
      formData.append('nationalId', this.addOwner.nationalId); 
    
      formData.append('password', this.addOwner.password);

      if(this.photo && this.url){
      formData.append('photo', this.photo);
        
      }

      let x = this.$axios.post(`/owners`, formData).then(res => {
        
          this.currOwnerToAddCar = res.data;
      })

     

      Promise.all([x]).then(() => {
           let y = this.$axios.post(`/cars`, {
                type: this.newCar.transportType,
                number: this.newCar.number,
                numberOfSeats: this.newCar.numberOfSeats,
                transportType: this.newCar.type,
                owner: this.currOwnerToAddCar.id,
            }).then(res => {
                this.driverCar = res.data.id
            })

            Promise.all([y]).then(_ => {
                 let formData = new FormData();
                    formData.append('username', this.addDriver.username);
                    formData.append('phone', this.addDriver.phone.formattedNumber);
                    formData.append('password', this.addDriver.password);
                    formData.append('car', this.driverCar);

                    if(this.driverUrl && this.driverPhoto){
                    formData.append('photo', this.driverPhoto);
                        
                    }

                    this.$axios.post(`/drivers`, formData).then(res => {
                        this.$vs.notification({
                        position:'top-center',
                            color:'success',
                            title: 'تم بنجاح',
                            text: `لقد تم إضافة السائق بنجاح`
                        });
                        this.$refs.addOwnerCarDriver.reset();
                        this.addDriver = {};
                        this.getDrivers();
                        this.driverPhoto = '';
                        this.driverUrl = '';

                        this.newCar = {};
                        this.addOwner = {};
                        this.photo = '';
                        this.url = '';
                    }).catch((err) => {
                      loading.close()
                      this.$vs.notification({
                        position:'top-center',
                            color:'danger',
                            title: "خطأ",
                            text: `حدث خطأ ما`
                        });
                    }).finally(() => loading.close());
            })
      })
      },
      phoneOwnerUpdate(e){
      console.log(e);
      this.addOwner.phone = e;
    },
      file_selected(e){
           
            if (e.target.files[0].name.match(/\.(PNG|jpg|jpeg|gif|jfif|png)$/)) {
            
                this.photo = e.target.files[0]
                this.url = URL.createObjectURL(e.target.files[0])
          } else {
            e.target.value = "";
            this.$vs.notification({
                        time: 10000,
              color: "danger",
              position: "top-center",
              title: "غير مدعوم",
              text:
                "من فضلك اختر صورة صحيحة (jfif - PNG - jpg - jpeg - gif)"
                        });
        
          }

        },
        file_selected_driver(e){
   

             if (e.target.files[0].name.match(/\.(PNG|jpg|jpeg|gif|jfif|png)$/)) {
            
                this.driverPhoto = e.target.files[0]
                this.driverUrl = URL.createObjectURL(e.target.files[0])
          } else {
            e.target.value = "";
            this.$vs.notification({
                        time: 10000,
              color: "danger",
              position: "top-center",
              title: "غير مدعوم",
              text:
                "من فضلك اختر صورة صحيحة (jfif - PNG - jpg - jpeg - gif)"
                        });
          }
        },
    getDrivers() {
      this.$axios
        .get(`/drivers`)
        .then(res => {
          console.log(res);
          this.drivers = res.data.docs;
          this.driversPage = res.data.page;
          this.driversTotalPages = res.data.totalPages;
        })
        .finally(() => (this.mainLoading = false));
    },

    // checkDirection(e) {
    //   if (e.target.value.length == 0) {
    //     e.target.style.direction = "rtl";
    //   }
    //   if (this.isUnicode(e.target.value)) {
    //     e.target.style.direction = "rtl";
    //   } else {
    //     e.target.style.direction = "ltr";
    //   }
    // },
    // isUnicode(str) {
    //   var letters = [];
    //   for (var i = 0; i <= str.length; i++) {
    //     letters[i] = str.substring(i - 1, i);
    //     if (letters[i].charCodeAt() > 255) {
    //       return true;
    //     }
    //   }
    //   return false;
    // },

  },
  created(){
      this.getDrivers();
  }
};
</script>

<style lang="scss">
.add-new-user {
      padding: 15px;
    background: #FFF;
    margin: 27px 0;
    border: 1px solid #ccc;
    box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
  .vue-form-wizard .wizard-progress-bar {
    float: right !important;
  }
  .vs-checkbox-con{
      direction: ltr !important;
  }

  .vue-form-wizard .wizard-nav-pills a, .vue-form-wizard .wizard-nav-pills li, .vue-form-wizard.md .wizard-icon-circle.tab_shape{
    outline: none !important;
  }

 .vue-form-wizard .wizard-nav{
   padding:0;
 }

 .wizard-icon-container .tab_shape{
   outline: none !important;
 }
}




    // Extra small devices (portrait phones, less than 576px)
  
</style>
