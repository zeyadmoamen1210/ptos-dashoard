<template>
  <div class="myNavbar">
      <div class="container-fluid">
          <div class="nav-container">
               <div>
              <vs-button
              v-if="$auth.loggedIn"
                flat
                :active="active == 0"
                @click="logout"
                danger
            >
                تسجيل الخروج
            </vs-button>
          </div>

             <div>
                  <div class="from-group">
                    <vs-input  placeholder="البحث">
                            <template #icon>
                                        <img style="width:30px;" src="@/assets/imgs/icons/loupe.svg" alt="">

                            </template>
                    </vs-input>
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
            active: 0
        }
    },
    methods:{
        logout(){
            this.active = 0;
            this.$auth.logout();
            this.$router.push(`/login`);
        }
    }
}
</script>

<style lang="scss">
.myNavbar{
    box-shadow: 5px 16px 25px 0 rgba(0, 0, 0, 0.1);
    padding: 23px;
    border-bottom: 1px solid #CCC;
    
    .nav-container{
        display: flex;
        >div{
            &:first-of-type{
                flex: 1;
            }
            &:last-of-type{
                
                    margin-right: 20px;
    flex: 2;

            }
        }
        .from-group{
                        width: 400px;
                }
    }


    .vs-input--has-icon {
        padding-right: 38px !important;
        padding-left: 0 !important;
        width: 100%;
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
}
</style>