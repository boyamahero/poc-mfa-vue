<template>
  <q-page padding>
    <div class="row justify-center">
      <div class="col-12">
        <q-card class="q-ma-md">
          <q-card-main>
            <h3 class="flex flex-center">
              ยินดีต้อนรับ <span class="q-pl-xs text-red">{{ user.name }}</span>
            </h3>
          </q-card-main>
        </q-card>
      </div>
    </div>
    <div class="row justify-center">
      <div class="col-12">
      <q-card class="q-ma-md">
      <q-card-main>
        <p class="header">เมนู</p>
        <div class="row gutter-xs q-ml-xs">
          <div class="col-lg-2 col-md-4 col-xs-6" style="position: relative;">
            <img class="full-width cursor-pointer menu" src="statics/menu/menu-ess1.png" @click="$router.push('/portfolio')"><br>
            <div class="text-bold text-red" style="position: absolute;top: 7px;right:5px;">สำหรับเครือข่ายภายใน</div>
          </div>
          <div class="col-lg-2 col-md-4 col-xs-6">
            <img class="full-width cursor-pointer menu" src="statics/menu/menu-search1.png" @click="$router.push('/search')">
          </div>
          <div class="col-lg-2 col-md-4 col-xs-6" style="position: relative;">
            <img class="full-width cursor-pointer menu" src="statics/menu/menu-compen.png" @click="$router.push('/salary')">
            <div class="text-bold text-red" style="position: absolute;top: 7px;right:5px;">สำหรับเครือข่ายภายใน</div>
          </div>
        </div>
      </q-card-main>
    </q-card>
    </div>
    </div>
  </q-page>
</template>

<style>
img.menu:hover {
  opacity: 0.8;
  box-shadow: 0px 0px 2px 2px rgb(26, 69, 148);
}
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.state.employee.employee
    }
  }
}
</script>
