<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header reveal>
      <q-toolbar
        inverted
        color="white"
      >
        <q-btn
          round
          flat
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon
            name="menu"
            class="menu"
          />
        </q-btn>

        <q-toolbar-title>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-layout-drawer v-model="leftDrawerOpen">
      <q-list
        class="q-ma-none bg-light-blue-2"
        no-border
        inset-delimiter
      >
        <q-item class="q-ma-none q-pa-md justify-center q-title text-bold">
          HRIS
        </q-item>
      </q-list>
      <q-list>
        <q-item class="q-mt-sm q-py-none">
          <q-item-main
            label="Menu"
            class="text-left text-bold"
          />
        </q-item>
      </q-list>
      <q-list
        class="q-ma-none q-pt-none"
        border
        separator
        link
        inset-delimiter
      >
        <q-item
          @click.native="$router.push('/')"
          dark
        >
          <q-item-side
            icon="home"
            color="blue-3"
            inverted-light
          />
          <q-item-main
            label="Home"
            class="text-left text-bold"
          />
        </q-item>
        <q-item
          @click.native="smartlife"
          dark
        >
          <q-item-side
            icon="smartphone"
            color="yellow"
            inverted-light
          />
          <q-item-main
            label="Smart Life"
            class="text-left text-bold"
          />
        </q-item>
        <q-item
          @click.native="logout"
          dark
        >
          <q-item-side
            icon="power_settings_new"
            color="red"
            inverted-light
          />
          <q-item-main
            label="Log Out"
            class="text-left text-bold"
          />
        </q-item>
      </q-list>
      <q-list class="fixed-bottom q-pa-sm q-ma-none bg-light-blue-2">
        <q-item class="q-ma-none q-pa-none">
          <q-item-main class="text-left q-body-1">
            <q-item-tile label>ผู้รับผิดชอบข้อมูล</q-item-tile>
            <q-item-tile
              sublabel
              class="q-ma-none q-pa-none"
            >คุณปรารถนา โกยทอง (อทบ.) โทร 65300</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item class="q-ma-none q-pa-none">
          <q-item-main class="text-left q-body-1">
            <q-item-tile label>ผู้พัฒนาและผู้ดูแลระบบ</q-item-tile>
            <q-item-tile
              sublabel
              class="q-ma-none q-pa-none"
            >หบค-ห. กทห-ห. อจส. โทร 64452</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer reveal>
      <q-item
        class="justify-between"
        style="padding:0"
      >
        <q-btn flat>
          <q-item-side
            icon="home"
            @click.native="$router.push('/')"
            style="color:#14548a;font-size: 20px;"
          />
        </q-btn>
        <q-btn flat>
          <img
            src="statics/speedlogo.png"
            class="col-xs-8 col-md-4"
            style="max-width: 30%;"
          >
        </q-btn>
        <q-btn
          flat
          @click="$router.go(-1)"
        >
          <q-icon
            name="reply"
            color="primary"
            class="menu"
          />
        </q-btn>
      </q-item>
    </q-layout-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  preFetch ({ store }) {
    return store.dispatch('employee/setEmployee')
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    smartlife () {
      this.$router.push({ name: 'smartlife' })
    },
    report () {
      this.$router.push({ name: 'report' })
    },
    logout () {
      this.logoutloading = true
      var keycloakAuth = this.$store.getters.SECURITY_AUTH
      keycloakAuth.logout()
      this.$store.dispatch('authLogout')
    }
  }
}
</script>

<style>
/* .q-layout-header {
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
} */
</style>
