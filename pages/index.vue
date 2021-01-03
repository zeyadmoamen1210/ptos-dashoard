<template>
  <div class="home-page">
    <Loading v-if="mainLoading" />
    <div v-else>

       <div class="container-fluid">
       <div class="general-stats"> 
          <div class="stats">
               <div style="    display: flex;  flex-wrap:wrap;  margin-bottom: 10px;">
                 <div class="head-who" style="    width: 222px;">
                <span style="    left: -2px;"></span>
                <span style="    left: -47px;top: 17px;"></span>
                <span style="    left: -26px;top: 14px;"></span>
                <h3 style="    font-size: 26px;margin-top: 4px;">الأحصائيات </h3>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div style="    flex: 1;text-align: left;" v-if="$auth.loggedIn && $auth.user.role == 'employee'">
                 <vs-button
             v-if="$auth.loggedIn "
              style="text-align:left;display:inline-block;    margin: 0;padding: 0;"
              :active="active5 == 1"
              @click="Charge"
            >
              شحن / إيداع
            </vs-button>

            <vs-button
             v-if="$auth.loggedIn "
              style="text-align:left;display:inline-block; margin: 0;padding: 0;"
              :active="active5 == 1"
              @click="addWithDrow"
              color="success"
            >
              سحب من المحفظة
            </vs-button>

            
              </div>
               </div>

              <div class="row">
                <div class="col-md-3">
                  <div class="count-students">
                    <h5> الموظفين </h5>
                    <img style="width:30px;" src="@/assets/imgs/icons/employee.svg" alt="">
                    <span> 50 </span>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="count-teachers">
                    <h5> إجمالي الربح </h5>
                   <img style="width:30px;" src="@/assets/imgs/icons/bar-chart.svg" alt="">
                    <span>50</span>
                  </div>
                </div>
                
                <div class="col-md-3">
                  <div class="count-reports">
                    <h5> ملاك السيارات </h5>
                    <img style="width:30px;" src="@/assets/imgs/icons/owner.svg" alt="">
                    <span>50</span>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="count-admins">
                    <h5>السيارات</h5>
                  <img style="width:30px;" src="@/assets/imgs/icons/car.svg" alt="">
                    <span>50</span>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="count-reports" style="background-color:#40407a">
                    <h5>السائقين</h5>
                    <img style="width:30px;" src="@/assets/imgs/icons/driver.svg" alt="">
                    <span>50</span>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="count-students">
                    <h5> الرصيد </h5>
                   <img style="width:30px;" src="@/assets/imgs/icons/loupe.svg" alt="">
                    <span>50</span>
                  </div>
                </div>

                 <div class="col-md-3">
                  <div class="count-teachers">
                    <h5>المعاملات المالية</h5>
                  <img style="width:30px;" src="@/assets/imgs/icons/shopping-cart.svg" alt="">
                    <span>50</span>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="count-students">
                    <h5>الميزانيه</h5>
                  <img style="width:30px;" src="@/assets/imgs/icons/bar-chart.svg" alt="">
                    <span>50</span>
                  </div>
                </div>
               <!-- <div class="col-md-3">
                  <div class="count-admins" style="background:#55efc4;border-color:#55efc4">
                    <h5>Lives Enrolled </h5>
                    <i class="fas fa-money-bill-alt"></i>

                    <span>50</span>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="count-teachers" style="background-color:#218c74">
                    <h5> Lives</h5>
                   <i class="fas fa-signal"></i>
                    <span>50</span>
                  </div>
                </div>
               
                <div class="col-md-3">
                  <div class="count-students" style="background-color:#474787">
                    <h5>Quizes</h5>
                    <i class="far fa-file"></i>
                    <span>50</span>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="count-students" style="background:#fd79a8;border-color:#fd79a8">
                    <h5>Second Sub Categories</h5>
                    <i class="fas fa-code-branch"></i>
                    <span>50</span>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="count-admins" @click="$router.push(`/students`)">
                    <h5>Students</h5>
                    <i class="fas fa-user-graduate"></i>

                    <span>50</span>
                  </div>
                </div>


                <div class="col-md-3">
                  <div class="count-students" style="background-color:#474787">
                    <h5>Instructors</h5>
                    <i class="fas fa-user-tie"></i>
                    <span>50</span>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="count-students">
                    <h5>All Users</h5>
                    <i class="fas fa-users"></i>
                    <span>50</span>
                  </div>
                </div> -->
              </div>
            </div>
       </div>


       



       <div class="centers"  v-if="centers.length != 0">
         <div class="center-head" style="display:flex;flex-wrap:wrap">
           <div style="flex:1">
             

             <div class="head-who" style="width:222px">
            <span></span>
            <span></span>
            <span></span>
            <h3>المراكز</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>


           </div>
           <div style="flex:1">
             <vs-button
             v-if="$auth.loggedIn && $auth.user.role == 'admin'"
              style="text-align:left;display:inline-block"
              :active="active5 == 1"
              @click="addCenter"
            >
              إضافة مركز
            </vs-button>
           </div>
         </div>

         <div class="centers-card">
           <div class="row">
             <div class="col-md-3" v-for="center in centers" :key="center.id">
               <div class="center-card">
                 <h5> {{center.address}} </h5>
                 <span style="    font-size: 12px;color: #333;"> {{ $moment(center.createdAt).fromNow() }} </span>
               </div>
             </div>
           </div>
         </div>

         <div class="center" v-if="centerTotalPages > 1">
            <vs-pagination v-model="centerPage" :length="centerTotalPages" />
          </div>
       </div>


       <div class="employees"  v-if="employees.length != 0">

         <div class="emp-head">
           <div>
              <div class="head-who" style="width:237px">
            <span></span>
            <span></span>
            <span></span>
            <h3>الموظفين</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
           </div>
           <div>
             <vs-button
             v-if="$auth.loggedIn && $auth.user.role == 'admin'"
              :active="active2 == 1"
              @click="addNewEmp"
            >
              إضافة موظف
            </vs-button>
           </div>
         </div>
         <vs-table striped>
        <template #thead>
          <vs-tr>
            <vs-th>
              الكود
            </vs-th>
            <vs-th>
              الصورة الشخصية
            </vs-th>
            <vs-th>
              الأسم
            </vs-th>
            <vs-th>
              رقم الهاتف
            </vs-th>
            <vs-th>
              تاريخ الإنشاء
            </vs-th>
            <vs-th>
              اخر تعديل
            </vs-th>
            <vs-th>
              الرصيد
            </vs-th>
            <vs-th>
              تعديل / حذف
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in employees"
            :data="tr"
          >
          <vs-td>
            {{ tr.id }}
            </vs-td>
            <vs-td>
              <img style="border-radius:20px;width:50px;height:50px;overflow:hidden" :src="tr.photo" />
            </vs-td>
            <vs-td>
              {{ tr.username }}
            </vs-td>
            <vs-td>
            {{ tr.phone }}
            </vs-td>
            <vs-td>
              {{ $moment(tr.createdAt).fromNow() }}
            </vs-td>
            <vs-td>
              {{ $moment(tr.updatedAt).fromNow() }}
            </vs-td>
            <vs-td>
              {{ tr.wallet }}  <font-awesome-icon style="width: 17px;color: #dcba21;" :icon="['fas' ,'coins']"></font-awesome-icon>
            </vs-td>
             <vs-td>
            

              <vs-button
              v-if="$auth.loggedIn && $auth.user.role == 'admin'"
              success
              :active="active4 == 1"
              class="table-btn"
              @click="active4 = 1"
            >
              إضافة 
            </vs-button>

            <vs-button
            v-if="$auth.loggedIn && $auth.user.role == 'admin'"
            danger
            class="table-btn"
              :active="active3 == 1"
              @click="active3 = 1"
            >
              حذف
            </vs-button>
            </vs-td>
          
          </vs-tr>
        </template>
        <template v-if="totalPages > 1" #footer>
          <vs-pagination v-model="page" :length="totalPages" />
        </template>
      </vs-table>
       </div>





      <div class="employees cars" v-if="cars.length != 0 && $auth.loggedIn">
         <div class="emp-head">
           <div>
             <div class="head-who" style="width:222px">
            <span></span>
            <span></span>
            <span></span>
            <h3>السيارات</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
           </div>
                         </div>


              <div class="row">
                <div class="col-md-3" v-for="car in cars" :key="car.id">
                  <div class="single-car">
                    <h6 style="  margin-bottom:5px;  padding-bottom: 7px;border-bottom: 1px solid #EEE;"> 
                      <span style="font-weight:bold">النوع : </span>
                      <span> {{car.type}}  </span>
                    </h6>
                    <h6 style=" margin-bottom:5px;   padding-bottom: 7px;border-bottom: 1px solid #EEE;"> 
                      <span style="font-weight:bold">الرقم : </span>
                      <span> {{car.number}}  </span>
                    </h6>
                    <h6 style="  margin-bottom:5px;  padding-bottom: 7px;border-bottom: 1px solid #EEE;">
                      <span style="font-weight:bold">نوع المواصلات : </span>
                      <span> {{car.transportType}}  </span>
                    </h6>
                    <h6 style="  margin-bottom:5px;  padding-bottom: 7px;border-bottom: 1px solid #EEE;">
                       <span style="font-weight:bold">الكود : </span>
                      <span> {{car.code}}  </span>
                    </h6>

                    <div class="face-post" v-if="car.owner">
                      <div class="post-imgs">
                        <img size="50px" :src="car.owner.photo">
                      </div>
                      <div>
                        <h6 style="font-weight: bold;padding-top: 3px;font-size: 15px;"> {{car.owner.username}} </h6>
                        <h6 style="    font-size: 12px; margin-top: 4px;font-family: 'regularCairo';"> {{car.owner.phone}} </h6>
                        <h6 style="    font-size: 12px;margin-top: 4px;font-family: 'regularCairo';"> {{car.owner.nationalId}} </h6>
                        <h6 style="    font-size: 12px;margin-top: 4px;font-family: 'regularCairo';"> {{car.owner.wallet}} <font-awesome-icon style="width: 17px;color: #dcba21;" :icon="['fas' ,'coins']"></font-awesome-icon> </h6>
                      </div>
                    </div>
                  </div>
            </div>
            <div v-if="carTotalPages > 1" style="width:100%;margin-top:15px">
              <vs-pagination v-model="carPage" :length="carTotalPages" />
            </div>
         </div>
      </div>



      <!-- Drivers -->

       <div class="employees"  >

         <div class="emp-head">
           <div>
              <div class="head-who" style="width:222px">
            <span></span>
            <span></span>
            <span></span>
            <h3>السائقين</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
           </div>
           <div>
             <vs-button
             v-if="$auth.loggedIn "
              :active="active2 == 1"
              @click="addNewDriver"
            >
              إضافة سائق
            </vs-button>
           </div>
         </div>
         <vs-table striped>
        <template #thead>
          <vs-tr>
            <vs-th>
              الكود
            </vs-th>
            <vs-th>
              الصورة الشخصية
            </vs-th>
            <vs-th>
              الأسم
            </vs-th>
            <vs-th>
              رقم الهاتف
            </vs-th>
            <vs-th>
              الرقم القومي
            </vs-th>
            <vs-th>
              تاريخ الإنشاء
            </vs-th>
            <vs-th>
              اخر تعديل
            </vs-th>
            <vs-th>
              الرصيد
            </vs-th>
            <vs-th>
              تعديل / حذف
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in drivers"
            :data="tr"
          >
          <vs-td>
            {{ tr.id }}
            </vs-td>
            <vs-td>
              <img style="border-radius:20px;width:50px;height:50px;overflow:hidden" :src="tr.photo" />
            </vs-td>
            <vs-td>
              {{ tr.username }}
            </vs-td>
            <vs-td>
            {{ tr.phone }}
            </vs-td>
            <vs-td>
            {{ tr.nationalId }}
            </vs-td>
            <vs-td>
              {{ $moment(tr.createdAt).fromNow() }}
            </vs-td>
            <vs-td>
              {{ $moment(tr.updatedAt).fromNow() }}
            </vs-td>
            <vs-td>
              {{ tr.wallet }} <font-awesome-icon style="width: 17px;color: #dcba21;" :icon="['fas' ,'coins']"></font-awesome-icon>
            </vs-td>
             <vs-td>
            

             <template v-if="$auth.loggedIn && $auth.user.role == 'employee'">
                <vs-button
              success
              :active="active4 == 1"
              class="table-btn"
              @click="active4 = 1"
            >
              إضافة 
            </vs-button>

            <vs-button
            
            danger
            class="table-btn"
              :active="active3 == 1"
              @click="active3 = 1"
            >
              حذف
            </vs-button>
             </template>
             <h6 v-else> غير مسموح لك </h6>
            </vs-td>
          
          </vs-tr>
        </template>
        <template v-if="driversTotalPages > 1" #footer>
          <vs-pagination v-model="driversPage" :length="driversTotalPages" />
        </template>
      </vs-table>
       </div>





      <!-- Owner Section -->

      <div class="employees owners"  v-if="owners.length != 0">

         <div class="emp-head">
           <div>
             <div class="head-who" style="width:292px">
            <span></span>
            <span></span>
            <span></span>
            <h3>مُلاك السيارات</h3>
            <span></span>
            <span></span>
            <span></span>
          </div>
           </div>
           <div>
             <vs-button
              v-if="$auth.loggedIn && $auth.user.role == 'employee'"
              :active="active2 == 1"
              @click="addNewOwner"
            >
              إضافة مالك
            </vs-button>
           </div>
         </div>
         <vs-table striped>
        <template #thead>
          <vs-tr>
            <vs-th>
              الكود
            </vs-th>
            <vs-th>
              الصورة الشخصية
            </vs-th>
            <vs-th>
              الأسم
            </vs-th>
            <vs-th>
              رقم الهاتف
            </vs-th>
            <vs-th>
              الرقم القومي
            </vs-th>
            <vs-th>
              تاريخ الإنشاء
            </vs-th>
            <vs-th>
              اخر تعديل
            </vs-th>
            <vs-th>
              الرصيد
            </vs-th>
            <vs-th>
              تعديل / حذف
            </vs-th>
          </vs-tr>
        </template>
        <template #tbody>
          <vs-tr
            :key="i"
            v-for="(tr, i) in owners"
            :data="tr"
          >
          <vs-td>
            {{ tr.id }}
            </vs-td>
            <vs-td>
              <img style="border-radius:20px;width:50px;height:50px;overflow:hidden" :src="tr.photo" />
            </vs-td>
            <vs-td>
              {{ tr.username }}
            </vs-td>
            <vs-td>
            {{ tr.phone }}
            </vs-td>
            <vs-td>
            {{ tr.nationalId }}
            </vs-td>
            <vs-td>
              {{ $moment(tr.createdAt).fromNow() }}
            </vs-td>
            <vs-td>
              {{ $moment(tr.updatedAt).fromNow() }}
            </vs-td>
            <vs-td>
              {{ tr.wallet }} <font-awesome-icon style="width: 17px;color: #dcba21;" :icon="['fas' ,'coins']"></font-awesome-icon>
            </vs-td>
             <vs-td>
            

                <vs-button
                v-if="$auth.loggedIn && $auth.user.role == 'employee'"
                  success
                  :active="active4 == 1"
                  class="table-btn"
                  @click.stop="addCarToOwner(tr)"
                >
                  إضافة سيارة
                </vs-button>
                <span v-else> غير متاح لك </span>

            </vs-td>


            <template #expand>
              <div class="con-content">
                <div class="row">
                  <div class="col-md-3"  v-for="car in tr.cars" :key="car.id">
                    <div class="owner-car-expand">
                      <div>
                        <h6> النوع : </h6>
                        <span> {{car.type}} </span>
                      </div>

                      <div>
                        <h6> الرقم : </h6>
                        <span> {{car.number}} </span>
                      </div>

                      <div>
                        <h6> عدد الكراسي : </h6>
                        <span> {{car.numberOfSeats}} </span>
                      </div>

                      <div>
                        <h6> عدد الكراسي : </h6>
                        <span> {{car.transportType}} </span>
                      </div>

                    </div>  
                  </div>
                </div>
                
              </div>
            </template>


          
          </vs-tr>
        </template>

        


        <template v-if="ownerTotalPages > 1" #footer>
          <vs-pagination v-model="ownerPage" :length="ownerTotalPages" />
        </template>
      </vs-table>
       </div>








    




    </div>


    </div>

    


    <vs-dialog blur v-model="addOwnerPopup">
      <template #header>
          <h4 class="not-margin">
            إضافة مالك جديد
          </h4>
        </template>
      <div>
        <div class="form-group">
          <input placeholder="الاسم" v-model="addOwner.username" type="text" class="form-control">
        </div>

        <div class="form-group">
          <input type="password" v-model="addOwner.password" placeholder="كلمة المرور" class="form-control">
        </div>

        <div class="form-group">
          <input type="number" v-model="addOwner.nationalId" placeholder="الرقم القومي" class="form-control">
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
        <!-- <div class="form-group">
           <v-select v-model="addOwner.center" :options="centers" label="address" :reduce="address => address.id"></v-select>
        </div> -->
      </div>

      <div class="file-uploader" style="     width: 100%">
          <input type="file" @change="file_selected">
          <img style="width:100px" v-if="url" :src="url" alt="">
          <div v-else>
              <img src="https://i.ibb.co/pfybPxs/noun-Camera-1903011.png" alt="">
              <h6>إرفق صورة شخصية للمالك</h6>
          </div>
      </div>

      <div  class="model-foot">
          <button @click="addOwnerMain" class="btn btn-success"> إضافة </button>
      </div>


    </vs-dialog>



    <vs-dialog blur v-model="addEmpPopup">
      <template #header>
          <h4 class="not-margin">
            إضافة موظف جديد
          </h4>
        </template>
      <div>
        <div class="form-group">
          <input placeholder="الاسم" v-model="addEmp.username" type="text" class="form-control">
        </div>

        <div class="form-group">
          <input type="password" v-model="addEmp.password" placeholder="كلمة المرور" class="form-control">
        </div>

        <div class="form-group">
       
          <vue-phone-number-input
                  v-model="addNewEmpPhone"
                  @update="phoneUpdate"
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
        <div class="form-group">
           <v-select placeholder="مركز الشحن" v-model="addEmp.center" :options="centersOptions" label="address" :reduce="address => address.id"></v-select>
        </div>
      </div>

      <div class="file-uploader" style="     width: 100%">
          <input type="file" @change="file_selected">
          <img style="width:100px" v-if="url" :src="url" alt="">
          <div v-else>
              <img src="https://i.ibb.co/pfybPxs/noun-Camera-1903011.png" alt="">
              <h6>إرفق صورة شخصية للموظف</h6>
          </div>
      </div>

      <div v-if="$auth.loggedIn && $auth.user.role == 'admin'" class="model-foot">
          <button @click="addEmpMain" class="btn btn-success"> إضافة </button>
      </div>


    </vs-dialog>




    
    <vs-dialog blur v-model="addDriversPopup">
      <template #header>
          <h4 class="not-margin">
            إضافة سائق جديد
          </h4>
        </template>
      <div>
        <div class="form-group">
          <input placeholder="الاسم" v-model="addDriver.username" type="text" class="form-control">
        </div>

        <div class="form-group">
          <input type="password" v-model="addDriver.password" placeholder="كلمة المرور" class="form-control">
        </div>

        <div class="form-group">
          <input type="number" v-model="addDriver.nationalId" placeholder="الرقم القومي" class="form-control">
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
        <div class="form-group">
           <v-select v-model="addDriver.car" placeholder="اختيار سيارة" :options="carsOptions" label="number" :reduce="number => number.id"></v-select>
        </div>
      </div>

      <div class="file-uploader" style="     width: 100%">
          <input type="file" @change="file_selected">
          <img style="width:100px" v-if="url" :src="url" alt="">
          <div v-else>
              <img src="https://i.ibb.co/pfybPxs/noun-Camera-1903011.png" alt="">
              <h6>إرفق صورة شخصية للسائق</h6>
          </div>
      </div>

      <div v-if="$auth.loggedIn" class="model-foot">
          <button @click="addDriverMain" class="btn btn-success"> إضافة </button>
      </div>


    </vs-dialog>


    <vs-dialog  blur v-model="addCenterPopup">
       <template #header>
          <h4 class="not-margin">
            إضافة مركز جديد
          </h4>
        </template>
      <div>
        <div class="form-group">
          <input placeholder="عنوان أو اسم المركز" type="text" v-model="addressCenter" class="form-control">
        </div>
        <div class="model-foot" v-if="$auth.loggedIn && $auth.user.role == 'admin'">
          <button @click="addCenterMain" class="btn btn-success"> إضافة </button>
        </div>
      </div>
    </vs-dialog>

    <vs-dialog blur v-model="addChargePopup">
       <template #header>
          <h4 class="not-margin">
            شحن المحفظه الالكترونية
          </h4>
        </template>
      <div>
        <div class="form-group">
          <vue-phone-number-input
                  v-model="phoneToCharge"
                  @update="phoneToChargeUpdate"
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
        <div class="form-group">
          <input class="form-control" type="number" v-model="addCharge.charge">
        </div>
        <div class="model-foot" v-if="$auth.loggedIn ">
          <button @click="addChargeMain" class="btn btn-success"> شحن </button>
        </div>
      </div>
    </vs-dialog>




    <vs-dialog blur v-model="addWithDrowPopup">
       <template #header>
          <h4 class="not-margin">
            سحب من المحفظة
          </h4>
        </template>
      <div>
        <div class="form-group">
          <input class="form-control" placeholder="كود السيارة" type="number" v-model="withdraw.code">
        </div>
        <div class="form-group">
          <input class="form-control" placeholder="الرقم القومي" type="number" v-model="withdraw.nationalId">
        </div>
        <div class="form-group">
          <input class="form-control" placeholder="مقدار السحب" type="number" v-model="withdraw.cost">
        </div>
        <div class="model-foot" v-if="$auth.loggedIn ">
          <button @click="addWithDrowMain" class="btn btn-success"> إتمام السحب </button>
        </div>
      </div>
    </vs-dialog>


    


    <vs-dialog title="lvpfjh" blur v-model="addCarToOwnerPopup">
       <template #header>
          <h4 class="not-margin">
            إضافة سيارة الي <br/>
            {{currOwnerToAddCar.username}}
          </h4>
        </template>
      <div>
        <div class="form-group">
          <input placeholder="رقم السيارة" type="text" v-model="newCar.number" class="form-control">
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
           <v-select v-model="newCar.transportType"
           label="text"
          placeholder="النوع"
          :reduce="text => text.value"
          :options="[{text:'اتوبيس', value: 'bus'}, {text:'تاكسي', value: 'taxi'} ]"
          ></v-select>
        </div>
        <div >
          <button @click="addNewCarMain" class="btn btn-success"> إضافة </button>
        </div>
      </div>
    </vs-dialog>


  </div>
</template>

<script>
import Loading from '@/components/Loading';

export default {
  components:{
    Loading
  },
  middleware: ['auth'],
  data(){
    return {
      employees: [],
      carsOptions: [],
      addDriver:{},
      carTotalPages:1,
      mainLoading: true,
      carPage:1,
      cars:[],
      drivers: [],
      driversPage: 1, 
      driversTotalPages: 1,
      ownerPage: 1,
      ownerTotalPages:"",
      addNewOwnerPhone:"",
      addNewDriverPhone:"",
      addOwner:{},
      page:1,
      addEmpPopup: false,
      addDriversPopup: false,
      addCenterPopup: false,
      addOwnerPopup: false,
      addChargePopup: false,
      active2:0,
      addNewEmpPhone:"",
      active3:0,
      active4:0,
      addressCenter: "",
      centersOptions:[],
      active5:0,
      totalPages:1,
      centers: [],
      centerTotalPages: 1,
      centerPage: 1,

      photo:'',
      url: '',
      newCar:{},
      addCharge:{
        phone:''
      },
      addEmp:{},
      addWithDrowPopup: false,
      withdraw: {},
      owners: [],
      currOwnerToAddCar:'',
      addCarToOwnerPopup :false,
      driversPage: 1,
      phoneToCharge:"",
      driversTotalPages: 1,
    }
  },
  watch:{
    page(val){
      const loading = this.$vs.loading();
      this.$axios.get(`/employees?page=${val}`).then(res => {
        console.log(res)
        this.employees = res.data.docs;
        this.page = res.data.page;
        this.totalPages = res.data.totalPages;
      }).finally(() => loading.close());
    },
    centerPage(val){
      const loading = this.$vs.loading();
      this.$axios.get(`/centers?page=${val}&limit=12`).then(res => {
          this.centers = res.data.docs;
          this.centerPage = res.data.page;
          this.centerTotalPages = res.data.totalPages;
        }).catch(err => {
        loading.close();
      }).finally(() => loading.close());
    },
    driversPage(val){
      const loading = this.$vs.loading();
       this.$axios.get(`/drivers?page=${val}`).then(res => {
        console.log(res)
        this.drivers = res.data.docs;
        this.driversPage = res.data.page;
        this.driversTotalPages = res.data.totalPages;
      }).catch(err => {
        loading.close();
      }).finally(() => loading.close());
    },
    ownerPage(val){
      const loading = this.$vs.loading();
      this.$axios.get(`/owners?page=${val}`).then(res => {
        console.log(res)
        this.owners = res.data.docs;
        this.ownerPage = res.data.page;
        this.ownerTotalPages = res.data.totalPages;
      }).catch(err => {
        loading.close();
      }).finally(() => loading.close());
    },
    carPage(val){
      const loading = this.$vs.loading();
      this.$axios.get(`/cars?limit=8&page=${val}`).then(res => {
        console.log(res)
        this.cars = res.data.docs;
        this.carPage = res.data.page;
        this.carTotalPages = res.data.totalPages;
      }).catch(err => {
        loading.close();
      }).finally(() => loading.close());
    },


  },
  methods:{
    addWithDrowMain(){
      const loading = this.$vs.loading();
      this.addWithDrowPopup = false;
      this.$axios.post(`/withdraw`, this.withdraw).then(res => {
        this.$vs.notification({
          position:'top-center',
            color:'success',
            title: 'تم بنجاح',
            text: `لقد تم إضافة الرصيد لهذا الرقم بنجاح`
          });
          this.getCars();
          this.getCarsOptions();
      }).catch(err => {
        loading.close();
        if(err.response.status == 404){
          this.$vs.notification({
          position:'top-center',
            color:'danger',
            title: 'خطأ',
            text: `لا يوجد شخص بهذه البيانات من فضلك ادخل بيانات صحيحة`
          });
        }else if(err.response.status == 403){
          this.$vs.notification({
          position:'top-center',
            color:'danger',
            title: 'خطأ',
            text: `معذرة لا يوجد رصيد كافي لديك لإتمام هذه العملية`
          });
        }
        
      }).finally(() => loading.close());
    },
    addWithDrow(){
      this.addWithDrowPopup = true;
    },
    Charge(){
      this.addChargePopup = true;
    },
    phoneToChargeUpdate(e){
      this.addCharge.phone = e;
    },
    addChargeMain(){
       const loading = this.$vs.loading();

      this.addChargePopup = false;

      this.$axios.post(`/charge`, {
        phone: this.addCharge.phone.formattedNumber,
        charge: this.addCharge.charge,
      }).then(res => {
         this.$vs.notification({
          position:'top-center',
            color:'success',
            title: 'تم بنجاح',
            text: `لقد تم إضافة الرصيد لهذا الرقم بنجاح`
          });
          this.getCars();
          this.getDrivers();
          this.getOwners();
      }).catch(err => {
         this.$vs.notification({
          position:'top-center',
            color:'danger',
            title: 'خطأ',
            text: `هذا المستخدم غير موجود في النظام`
          });
      }).finally(() => loading.close());

    },
    addNewCarMain(){
     const loading  = this.$vs.loading();

      this.addCarToOwnerPopup = false;

      this.$axios.post(`/cars`, {
        type: this.newCar.transportType,
        number: this.newCar.number,
        numberOfSeats: this.newCar.numberOfSeats,
        transportType: this.newCar.type,
        owner: this.currOwnerToAddCar.id,
      }).then(res => {
         this.$vs.notification({
          position:'top-center',
            color:'success',
            title: 'تم بنجاح',
            text: `لقد تم إضافة السيارة لهذا المالك بنجاح`
          });
        this.getCars();
        this.getCarsOptions();
        this.getOwners();
      }).finally(() => loading.close());
    },

    addCarToOwner(owner){
      this.currOwnerToAddCar = owner;
      this.addCarToOwnerPopup = true;
    },
    
    addOwnerMain(){
        const loading = this.$vs.loading();

      this.addOwnerPopup = false;

      let formData = new FormData();
      formData.append('username', this.addOwner.username);
      formData.append('phone', this.addOwner.phone.formattedNumber);
      formData.append('password', this.addOwner.password);
      formData.append('nationalId', this.addOwner.nationalId);

      if(this.photo && this.url){
      formData.append('photo', this.photo);
        
      }

      this.$axios.post(`/owners`, formData).then(res => {
         this.$vs.notification({
          position:'top-center',
            color:'success',
            title: 'تم بنجاح',
            text: `لقد تم إضافة المالك بنجاح`
          });
        this.getOwners();
      }).finally(() => loading.close());

    },
    addEmpMain(){
       const isLoading = this.$vs.loading();

      this.addEmpPopup = false;

      let formData = new FormData();
      formData.append('username', this.addEmp.username);
      formData.append('phone', this.addEmp.phone.formattedNumber);
      formData.append('password', this.addEmp.password);
      formData.append('center', this.addEmp.center);

      if(this.photo && this.url){
      formData.append('photo', this.photo);
        
      }

      this.$axios.post(`/employees`, formData).then(res => {
         this.$vs.notification({
          position:'top-center',
            color:'success',
            title: 'تم بنجاح',
            text: `لقد تم إضافة الموظف بنجاح`
          });
        this.getEmployees();
      }).finally(() => isLoading.close());
    },






    addDriverMain(){
       const loading = this.$vs.loading();

      this.addDriversPopup = false;

      let formData = new FormData();
      formData.append('username', this.addDriver.username);
      formData.append('phone', this.addDriver.phone.formattedNumber);
      formData.append('password', this.addDriver.password);
      formData.append('nationalId', this.addDriver.nationalId);
      
      formData.append('car', this.addDriver.car);

      if(this.photo && this.url){
      formData.append('photo', this.photo);
        
      }

      this.$axios.post(`/drivers`, formData).then(res => {
         this.$vs.notification({
          position:'top-center',
            color:'success',
            title: 'تم بنجاح',
            text: `لقد تم إضافة السائق بنجاح`
          });
        this.getDrivers();
      }).finally(() =>loading.close());
    },







     file_selected(e){
            if(e.target.files.length > 0){
                this.photo = e.target.files[0]
                this.url = URL.createObjectURL(e.target.files[0])
            }
        },
    addNewEmp(){
      this.active2 = 1;
      this.addEmpPopup = true;
    },
    addNewDriver(){
      this.active2 = 1;
      this.addDriversPopup = true;
    },
    addNewOwner(){
      this.active2 = 1;
      this.photo = '';
      this.url = '';
      this.addOwnerPopup = true;
    },
    addCenter(){
      this.active5 = 1;
      this.addCenterPopup = true;
    },
    getCenters(){
        this.$axios.get(`/centers?limit=12`).then(res => {
          this.centers = res.data.docs;
          this.centerPage = res.data.page;
          this.centerTotalPages = res.data.totalPages;
        }).finally(() => this.mainLoading = false);
      },

       getCentersOptions(){
        this.$axios.get(`/centers?paginate=false`).then(res => {
          this.centersOptions = res.data;
        
        }).finally(() => this.mainLoading = false);
      },
    addCenterMain(){
      
      const loading = this.$vs.loading();

      this.addCenterPopup = false;
      this.$axios.post(`/centers`, {address: this.addressCenter}).then(res => {
        this.$vs.notification({
          position:'top-center',
            color:'success',
            title: 'تم بنجاح',
            text: `لقد تم إضافة المركز الجديد بنجاح`
          });
          this.getCentersOptions();
        this.getCenters();

      }).finally(() => loading.close());
    },
    phoneUpdate(e){
      console.log(e);
      this.addEmp.phone = e;
    },
    phoneUpdateDriver(e){
      console.log(e);
      this.addDriver.phone = e;
    },
    phoneOwnerUpdate(e){
      console.log(e);
      this.addOwner.phone = e;
    },
    
    getEmployees(){
      this.$axios.get(`/employees`).then(res => {
        console.log(res)
        this.employees = res.data.docs;
        this.page = res.data.page;
        this.totalPages = res.data.totalPages;
      }).finally(() => this.mainLoading = false);
    },
    getDrivers(){
      this.$axios.get(`/drivers`).then(res => {
        console.log(res)
        this.drivers = res.data.docs;
        this.driversPage = res.data.page;
        this.driversTotalPages = res.data.totalPages;
      }).finally(() => this.mainLoading = false);
    },
    getOwners(){
      this.$axios.get(`/owners`).then(res => {
        console.log(res)
        this.owners = res.data.docs;
        this.ownerPage = res.data.page;
        this.ownerTotalPages = res.data.totalPages;
      }).finally(() => this.mainLoading = false);
    },
    getCars(){
      this.$axios.get(`/cars?limit=8`).then(res => {
        console.log(res)
        this.cars = res.data.docs;
        this.carPage = res.data.page;
        this.carTotalPages = res.data.totalPages;
      }).finally(() => this.mainLoading = false);
    },

    getCarsOptions(){
      this.$axios.get(`/cars?paginate=false`).then(res => {
        console.log(res)
        this.carsOptions= res.data;
   
      }).finally(() => this.mainLoading = false);
    }
  },
  created(){
    if(this.$auth.user.role == 'admin'){
      this.getCenters();
      this.getEmployees();
    }

    this.getCarsOptions();
    this.getCentersOptions();
    
    this.getCars();
    this.getDrivers();
    this.getOwners();
    if(this.$auth.loggedIn ){
      console.log(this.$auth.user)
    }
  }
}
</script>

<style lang="scss">
.home-page{
  .table-btn{
        cursor: pointer;
    display: inline-block;
    margin: 0;
  }
  .vs-table__thead .vs-table__th:first-child{
        width: 208px !important;
  }
  .vs-table__th__content{
    text-align: center !important;
  }
  .vs-table__td{
    text-align: right !important;
    width: 250px;
  }

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
  }
  .stats {
        padding-top: 25px;
    text-align: right;
    padding-bottom: 25px;
    
    i {
      font-size: 62px;
      color: rgba(36, 36, 36, 0.41961);
      transition: all 0.3s linear;
    }
    span {
      display: inline-block;
      font-size: 43px;
      position: absolute;
      bottom: 35px;
      left: 40px;
      color: rgba(36, 36, 36, 0.41961);
    }
    h5 {
      margin-bottom: 30px;
      color: #f5f5f5;
      border-radius: 5px;
      font-size: 18px;
      text-align: right;
    }
    .count-admins {
      background: #dc3545;
      padding: 23px;
      border: 1px solid #dc3545;
      border-radius: 4px;
          margin-bottom: 15px;

    }
    .count-reports {
      background-color: #ffc107;
      padding: 23px;
      border: 1px solid #ffc107;
      border-radius: 4px;
          margin-bottom: 15px;

    }
    .count-students {
      background-color: #17a2b8;
      padding: 23px;
      border: 1px solid #17a2b8;
      border-radius: 4px;
          margin-bottom: 15px;

    }
    .count-teachers {
      background-color: #28a745;
      padding: 23px;
      border: 1px solid 28a745;
      border-radius: 4px;
          margin-bottom: 15px;

    }
  }

  .vs-table__thead .vs-table__th{
    background-color: #FFF !important;
  }

  .centers{
        padding: 15px;
    background: #FFF;
    margin-bottom: 20px;
    border: 1px solid #CCC;
    .center-head{
          display: flex;
          flex-wrap: wrap;
    margin-bottom: 15px;
    background: #f7f7f7;

    h5{
          padding-top: 10px;
    padding-right: 13px;
    }
    }
  }
  .centers-card{
    .center-card{
       text-align: center;
    background: #FFF;
    border: 1px solid #CCC;
    margin-bottom: 10px;
    padding: 14px;
    box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.1);
    h5{
      text-align: center;
    }
    }
  }
 .single-car{
       padding: 10px;
    background: #FFF;
    box-shadow: 0 4px 25px 0 rgba(0,0,0,.1);
    margin-top: 10px;
   h6{
     margin-bottom: 0;
   }
 }
}

 .vs__dropdown-menu{
    max-height: 150px;
  }
  .country-selector__list{
    position: relative;
    z-index: 9999;
  }
  #MazPhoneNumberInput{
        z-index: 999999999999999999999;
    position: relative;
    direction: ltr;
  }

  .face-post{
         padding: 10px;
    background: #f7f7f7;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #CCC;
    margin-top: 6px;
    .post-imgs{
      img{
            border-radius: 20px;
    width: 60px;
    height: 60px;
    overflow: hidden;
      }
    }


   
  }

   .owner-car-expand{
         padding: 9px;
    background: #FFF;
    margin-bottom: 15px;
    border:1px solid #f7f7f7;
      >div{
        display: flex;
        flex-wrap: wrap;
            border-bottom: 2px solid #f9f9f9;
    padding-bottom: 3px;
    padding-top: 2px;
        span{
          margin: 0 10px;
        }
      }
    }
</style>
