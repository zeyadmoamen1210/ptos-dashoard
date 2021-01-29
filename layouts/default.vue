<template>
  <div>

    <Loading v-if="isLoading" />
    <div v-else>
      <Sidebar v-if="$auth.loggedIn" />
      <Navbar v-if="$auth.loggedIn" />
      <div class="body-bg" dir="rtl">
        <Nuxt />
      </div>
      <Footer />
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import Loading from '@/components/loading'
import Footer from '@/components/Footer'
import Sidebar from '@/components/sidebar'



export default {
  components:{
    Navbar,
    Loading,
    Sidebar,
    Footer
  },
  created(){
    this.$moment.locale('ar');
  },
  data(){
    return {
      isLoading: true,
    }
  },
  mounted(){
    setTimeout(() => {
      this.isLoading = false;
    }, 4000)
    if (localStorage.getItem("account")) {
      let account = JSON.parse(localStorage.getItem("account"));
      this.$auth.setUser(account);
    }else{
      this.$auth.logout();
    }
  }
}
</script>

<style lang="scss">
// @import '@/assets/all.min.css';
.vs-button{
  border-radius: 7px !important;
}
label{
  font-family: 'regularCairo' !important;
}
.vs-dialog__content.notFooter{
  text-align: right;
}
@font-face {
  font-family: "boldCairo";
  src: url('../assets/Cairo/Cairo-Bold.ttf');
}

@font-face {
  font-family: "regularCairo";
  src: url('../assets/Cairo/Cairo-Regular.ttf');
}





h1,h2,h3,h4,h5,h6,p{
  text-align: right;
}
input{
  direction: rtl;
}
button{
  outline: none;
}
 .head-who {
   position: relative;
   span{
     position: absolute;
         border-radius: 50%;
     background: #333;
   }
    h3 {
      margin-right: 53px;
    }
  }
  .head-who span:first-of-type{
        top: 13px;
    left: 9px;
    height: 14px;
    width: 15px;
  }
  .head-who span:nth-of-type(4) {
          top: 14px;
    right: 2px;
    width: 12px;
    height: 12px;
  }

  .head-who span:nth-of-type(5) {
         top: 13px;
    right: 25px;
    width: 15px;
    height: 14px;
  }

  .head-who span:nth-of-type(6) {
         top: 12px;
    right: 51px;
    width: 15px;
    height: 15px;
  }

  .head-who span:nth-of-type(3) {
       top: 13px;
    left: -16px;
    height: 14px;
    width: 15px;
  }

  .head-who span:nth-of-type(2) {
        width: 11px;
    height: 11px;
    top: 15px;
    left: -37px;
  }
  .head-who h3 {
    margin-right: 53px;
    text-align: center;
  }


.body-bg{
  background: #f7f7f7;
    padding: 0 60px 0 0;
    min-height: 100vh;
}

.model-foot{
  text-align: right;
}
* {
  
  font-family: "regularCairo", sans-serif;
}
h1,h2,h3,h4,h5,h6{
  font-family: "boldCairo", sans-serif;
}
.file-uploader{
        position: relative;
    height: 100px;
    width: 100%;
    margin-bottom: 15px;
    >img{
            max-height: 100px;
    }
   input{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 3;
        cursor: pointer;
        opacity: 0;
   }
   >div{
       text-align: center;
       position: absolute;
        top: 0;
        z-index: 1;
        cursor: pointer;
        padding-top: 20px;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px dashed #e2e2e2;
        h6{
                color: #717171;
    text-align: center;
        }
   }
}
span, p, input {
  font-family: regularCairo !important;
}
#MazPhoneNumberInput{
  direction: ltr !important;
  input{
    direction: ltr !important;
  }
}






@media (max-width: 575.98px) {
    .vue-form-wizard .category{
      font-size: 9px !important;
    }
    .home-page .employees .emp-head > div{
      flex:auto !important;
    }
    .head-who{
      width:auto !important;
      >span{
        display: none !important;
      }
      h3{
        margin-right:0;
        text-align: right;
      }
    }
   .myNavbar .nav-container .from-group {
    display: none !important;
}
.wizard-tab-content{
  padding:0 !important;
  margin-top:25px !important;
}
.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn, .vue-form-wizard .wizard-btn{
  min-width: 100px !important;
}
   }
  
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) and (max-width: 767.98px) {
   .myNavbar .nav-container .from-group {
    display: none !important;
}
.wizard-tab-content{
  padding:0 !important;
  margin-top:25px !important;
}
.vue-form-wizard .navbar .navbar-nav>li>a.wizard-btn, .vue-form-wizard .wizard-btn{
  min-width: 100px !important;
}

   }
  
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) and (max-width: 991.98px) {
    .myNavbar .nav-container .from-group {
    width: 50% !important;
}
.wizard-tab-content{
  padding:0 !important;
   margin-top:25px !important;
}
   }
  
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) and (max-width: 1199.98px) {
  .myNavbar .nav-container .from-group {
    width: 300px !important;
}
   }
  
  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
  .myNavbar .nav-container .from-group {
    width: 400px !important;
}
   }


</style>
