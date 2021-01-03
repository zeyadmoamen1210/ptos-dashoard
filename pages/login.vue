<template>
  <div class="login-page">
      <div class="container">
        <div class="login-container">

             <div class="row">
             <div class="col-md-6" style="margin:auto">
                  <div class="login">
                      <div class="login-icon">
                     <img  src="@/assets/imgs/icons/undraw_Access_account_re_8spm.svg" alt="">
                 </div>
                      <vs-input class="login-input" v-model="form.phone" placeholder="رقم الهاتف">
                            <template #icon>
                             <img style="width:30px;" src="@/assets/imgs/icons/user.svg" alt="">
                            </template>
                        </vs-input>

                        <vs-input type="password" class="login-input" v-model="form.password" placeholder="كلمة السر">
                            <template #icon>
                             <img style="width:30px;" src="@/assets/imgs/icons/password.svg" alt="">
                            </template>
                        </vs-input>

                        <vs-button
                            :active="active == 0"
                            @click="login(),active = 0"
                            color="dark btn-submit-login"
                        >
                            تسجيل الدخول
                        </vs-button>
                  </div>

             </div>

       


         </div>


        </div>
      </div>



  </div>
</template>

<script>
export default {
    data(){
        return {
            openError:false,
            form:{
                phone:'',
                password:'',
            },
            active:0,
        }
    },
    methods:{
        
        async login() {
      console.log("This is login");

      const loading = this.$vs.loading();

      try {
        let response = await this.$auth.loginWith("local", {
          data: this.form
        });

         
           


       
        
        if (response.data.user.role == "admin") {
          localStorage.setItem("account", JSON.stringify(response.data));
        this.$vs.notification({
          position:'top-center',
            color:'success',
            title: 'مرحبا بعودتك في بتوس',
            text: ` تسجيل دخول ناجح ${response.data.user.username}`
          });
          this.$auth.setUser(response.data.user);
          console.log(this.$auth.user);
          localStorage.setItem("account", JSON.stringify(response.data.user))

          this.$router.push({
            path: "/"
          });
           loading.close();
          // alert("this is admin")
        }else if(response.data.user.role == "employee"){
            // alert("you are employee");
            localStorage.setItem("account", JSON.stringify(response.data));
        this.$vs.notification({
          position:'top-center',
            color:'success',
            title: 'مرحبا بعودتك في بتوس',
            text: ` تسجيل دخول ناجح ${response.data.user.username}`
          });
          this.$auth.setUser(response.data.user);
           localStorage.setItem("account", JSON.stringify(response.data.user))
            this.$router.push({
                path: "/"
            });
            loading.close();
        }
         else {
          // this.$router.push({ path: "/statistics" });
          this.$vs.notification({
            position:'top-center',
            color:'danger',
            title: 'خطأ!',
            text: 'أنت لست من فريق عمل بتوس'
          })
          console.log('error')
          localStorage.removeItem("account");
          this.$auth.logout();
        //   this.$snotify.error("انت لست من ضمن فريق عمل بيرلا");
        //   this.isLoading = false;

         loading.close();

        }
      } catch (err) {

          loading.close();
          this.$vs.notification({
            color:'danger',
            position:'top-center',
            title: 'خطأ!',
            text: 'تأكد من الهاتف و كلمة المرور'
          })
        this.isLoading = false;
        // this.$snotify.error(`عفوا من فضلك تاكد من اسم المستخدم وكلمة المرور`);
        console.log(err);
      }
    }
    },
}
</script>

<style lang="scss">
.login-page{

    .vs-input--has-icon {
        padding-right: 38px !important;
        padding-left: 0 !important;
    }
    .vs-input-content{
        padding-right: 9px;
    }
    input{
        direction: rtl;
        padding-right:30px;
    }
    .vs-input--has-icon ~ .vs-input__label{
            right: 47px !important;
    left: auto !important;
    /* display: inline-block; */
    width: auto !important;
    height: auto !important;
    }
    .vs-input__icon{
        right: 0px !important;
        left: auto !important ;
    }

    .login-container{
            padding-top: 80px;
    }
    .login{
    }
    .vs-button__content{
        width:100%;
        display: block;
        outline: none;
    }
    .vs-button{
        width: 100%;
    }
    .login-icon{
            width: 160px;
    margin: auto;
    margin-bottom: 15px;
        img{
            width:100%;
            height: 100%;
        }
    }
    input{
            width: 100%;
            margin-bottom:10px;
    background: #fff;
    }
}
</style>