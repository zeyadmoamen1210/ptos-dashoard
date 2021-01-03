<template>
  <div class="hidden sidebar-component">
      <vs-sidebar

      style="direction: rtl;    border-radius: 0;"
      right
        hover-expand
        reduce
        open
        >
        <template #logo>
          <!-- ...img logo -->
            <img style="max-height: 61px;height: 47px;width: 49px;border-radius: 11px;overflow: hidden" src="https://res.cloudinary.com/derossy-backup/image/upload/v1555206304/deross-samples/placeholder-profile-male.jpg" alt="">

        </template>
        <vs-sidebar-item to="/" id="home">
          <template #icon>
            <img style="width:30px;" src="@/assets/imgs/icons/home.svg" alt="">
          </template>
          الرئيسية
        </vs-sidebar-item>
        <vs-sidebar-item id="market">
          <template #icon>
            <img style="width:30px;" src="@/assets/imgs/icons/bar-chart.svg" alt="">
          </template>
          الاحصائيات العامة
        </vs-sidebar-item>
        <vs-sidebar-item to="/add-new-user" id="Music">
          <template #icon>
            <img style="width:30px;" src="@/assets/imgs/icons/employee.svg" alt="">
          </template>
          الموظفين
        </vs-sidebar-item>
        <vs-sidebar-item id="Music">
          <template #icon>
            <img style="width:30px;" src="@/assets/imgs/icons/owner.svg" alt="">
          </template>
          ملاك السيارات
        </vs-sidebar-item>
                      <vs-sidebar-group>
                        <template #header>
                          <vs-sidebar-item arrow>
                            <template #icon>
                               <img style="width:30px;" src="@/assets/imgs/icons/car.svg" alt="">
                            </template>
                            المواصلات
                          </vs-sidebar-item>
                        </template>

                        <vs-sidebar-item id="Instagram">
                          <template #icon>
                             <img style="width:30px;" src="@/assets/imgs/icons/employee.svg" alt="">
                          </template>
                          الموظفين
                        </vs-sidebar-item>
                        <vs-sidebar-item id="twitter">
                          <template #icon>
                             <img style="width:30px;" src="@/assets/imgs/icons/driver.svg" alt="">
                          </template>
                          السائقين
                        </vs-sidebar-item>
                        <vs-sidebar-item id="Facebook">
                          <template #icon>
                            <img style="width:30px;" src="@/assets/imgs/icons/bar-chart.svg" alt="">
                          </template>
                          السيارات
                        </vs-sidebar-item>
                      </vs-sidebar-group>
        <vs-sidebar-group>
          <template #header>
            <vs-sidebar-item arrow>
              <template #icon>
                 <img style="width:30px;" src="@/assets/imgs/icons/shopping-cart.svg" alt="">
              </template>
              المتجر
            </vs-sidebar-item>
          </template>

          <vs-sidebar-item id="github">
            <template #icon>
               <img style="width:30px;" src="@/assets/imgs/icons/bar-chart.svg" alt="">
            </template>
            الاحصائيات
          </vs-sidebar-item>
          <vs-sidebar-item id="codepen">
            <template #icon>
               <img style="width:30px;" src="@/assets/imgs/icons/best-seller.svg" alt="">
            </template>
            الاكثر مبيعا
          </vs-sidebar-item>
          <vs-sidebar-item id="discord">
            <template #icon>
               <img style="width:30px;" src="@/assets/imgs/icons/group.svg" alt="">
            </template>
            المستخدمين
          </vs-sidebar-item>
        </vs-sidebar-group>
        <!-- <vs-sidebar-item id="donate">
          <template #icon>
            <i class='bx bxs-donate-heart' ></i>
          </template>
          Donate
        </vs-sidebar-item>
        <vs-sidebar-item id="drink">
          <template #icon>
            <i class='bx bx-drink'></i>
          </template>
          Drink
        </vs-sidebar-item>
        <vs-sidebar-item id="shopping">
          <template #icon>
            <i class='bx bxs-shopping-bags'></i>
          </template>
          Shopping
        </vs-sidebar-item>
        <vs-sidebar-item id="chat">
          <template #icon>
            <i class='bx bx-chat' ></i>
          </template>
          Chat
        </vs-sidebar-item> -->
        <template #footer>
          <vs-row justify="space-between">
            <vs-avatar badge-color="danger" badge-position="top-right">
               <img style="width:20px;" src="@/assets/imgs/icons/comment.svg" alt="">

              <template #badge>
                28
              </template>
            </vs-avatar>

            <vs-avatar>
              <img style="width:20px;" src="@/assets/imgs/icons/notification-bell.svg" alt="">
            </vs-avatar>
          </vs-row>
        </template>
      </vs-sidebar>
    </div>
</template>

<script>
export default {

}
</script>
 
<style lang="scss">
// .sidebar-component{
    
// }
.vs-sidebar__item__text{
        text-align: right;
        width: 65%;
    }
    .vs-sidebar__group__content::after{
        right: 2px !important;
        left:auto !important;
    }
</style>