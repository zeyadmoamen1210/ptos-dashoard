<template>
  <div class="car-details-page">

      <div class="border-in-print"></div>
      <div class="footer-print" >
          <h4> Public Transaction And Online Shopping  </h4>
          <h6> All Right Reserved </h6>
      </div>
      <div class="header-print" >
          <div style="display:flex">
              <div class="flex:1;">
                  LOGO Here
              </div>
              <div style="flex:6">
                   <h4 style="text-align:center"> Public Transaction And Online Shopping  </h4>
                    <h6 style="text-align:center"> All Right Reserved </h6>
              </div>
              <div style="flex:1">
                   Public info
              </div>
          </div>
      </div>
      <div class="container-fluid">
          <Loading v-if="isLoading" />
          <div v-else>
            <div>
                <div class="head-who" style="width:320px">
                    <span></span>
                    <span></span>
                    <span></span>
                    <h3>تفاصيل السيارة</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div class="car-details-info">
                <div class="row">
                    <div class="col-md-8">
                    <div class="info">
                        <div>
                    <h6> رقم السيارة / </h6>
                    <span> {{car.number}} </span>
                </div>

                <div>
                    <h6> تاريخ الإنشاء / </h6>
                    <span> {{ new Date(car.createdAt).toLocaleDateString()}} - {{ new Date(car.createdAt).toLocaleTimeString('en-US') }} - {{$moment(car.createdAt).fromNow() }} </span>
                </div>
                
                <div>
                    <h6> عدد الكراسي / </h6>
                    <span> {{car.numberOfSeats}} </span>
                </div>

                <div>
                    <h6> نوع التوصيل / </h6>
                    <span v-if="car.transportType == 'public'"> توصيل عام  </span>
                    <span v-else-if="car.transportType == 'travel'"> سفر </span>
                </div>

                <div>
                    <h6>  النوع / </h6>
                    <span v-if="car.type == 'taxi'"> تاكسي </span>
                    <span v-else-if="car.type == 'bus'"> أتوبيس </span>
                </div>


                 <div>
                    <h6> الكود السري / </h6>
                    <span> {{car.code}} </span>
                </div>
                    </div>
                </div>


                


                <div class="col-md-4">
                    <div class="code-container">
                        <qrcode :value="car.code" :options="{ width: 200 }"></qrcode>
                    </div>
                </div>
                </div>

               <div  class="qrcode-for-print" style="border-top:1px solid #CCC;padding-top:5px">
                   <div style="display:flex;border-bottom:1px solid #CCC">
                       <div style="flex:1">
                           <h5 style=" margin-bottom: 0;padding-top: 7px;">  أكواد الطباعه لكل كرسي </h5>
                       </div>
                       <div >
                           <vs-button @click="print">طباعة</vs-button>
                       </div>
                   </div>
                <div class="row">
                    <div v-for="i in car.numberOfSeats" :key="i" class="col-md-2" style="padding:0">
                        <div style="text-align:center;">
                            <qrcode :value="car.code" :options="{ width: 100 }"></qrcode>
                        </div>
                    </div>
                </div>
            </div>

            </div>



            





          </div>
      </div>




      
  </div>
</template>

<script>
import Vue from 'vue';
import Loading from '@/components/loading';
import VueQrcode from '@chenfengyuan/vue-qrcode';
 
Vue.component(VueQrcode.name, VueQrcode);




export default {
    data(){
        return{
            car: {},
            isLoading: true,
        }
    },
    methods:{
        print(){
            window.print();
        },
        getCarDetails(){
            this.isLoading = true;
            this.$axios.get(`/car/${this.$route.params.id}`).then(res =>{
                this.car = res.data;
            }).finally(() => this.isLoading = false);
        }
    },
    components:{
        Loading
    },
    created(){
        this.getCarDetails();
    }
}
</script>

<style lang="scss">
.car-details-page{
    padding-top:40px;
    .footer-print, .header-print{display: none;}
    .car-details-info{
        background: #FFF;
        padding: 15px;
        border: 1px solid #ccc;
        .info{
           >div{
                display: flex;
            padding:5px;
            h6{
                margin:0 0 0 15px;
            }
           }
        }

        .code-container{
            text-align: center;
        }

        .car-owner-info{
            display: flex;
            >div{
                flex: 1;
                img{
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                h6{
                    &:not(:first-child){
                        font-size: 13px;
                        margin-bottom: 2px;
                        font-family: 'regularCairo';
                    }
                }
                h5{
                    margin-bottom: 5px;
                    padding-top: 6px;
                }
            }
            .owner-img{
                width: 70px !important;
                height: 70px;
                overflow: hidden;
                max-width: 70px;
                margin: 4px 15px;
                border-radius: 50%;
            }
        }
    }
}


@media print{
    *{
        font-family: sans-serif !important;
    }
    .myNavbar, .sidebar-component, .qrcode-for-print button{
        display: none !important;
    }
    .qrcode-for-print,.car-details-info,.qrcode-for-print,.qrcode-for-print>div, .qrcode-for-print h5, .qrcode-for-print button{
        border:none !important;
    }
    .border-in-print{
        position: fixed;
        top:0;
        left:0;
        width:100%;
        height:100%;
        content: '';
        z-index:9999;
        border: 1px solid #333;
    }
    .footer-print{
        display: block !important;
        position: fixed;
        bottom:0;
        left:0;
        width:100%;
        content: '';
        z-index:9999;
        border: 1px solid #333;
        h6, h4{
            text-align: center;
        }
    }
    .car-details-page{
        margin-top:50px
    }
    .header-print{
        display: block !important;
        position: fixed;
        top:0;
        padding:10px;
        left:0;
        width:100%;
        content: '';
        z-index:999999;
        border-bottom: 1px solid #333;
        h6, h4{
            text-align: center;
        }
    }
}
</style>