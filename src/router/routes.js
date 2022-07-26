
const routes = [
  {
    path: '/smartlife',
    name: 'smartlife',
    beforeEnter () { location.href = 'http://smartlife.egat.co.th' }
  },
  {
    path: '/search',
    component: () => import('layouts/MySearch.vue'),
    children: [
      {
        path: '',
        name: 'search',
        component: () => import('pages/Search.vue'),
        meta: {
          requiresAuth: true,
          title: 'HR Search',
          description: 'สอบถามข้อมูลบุคคลและหมายเลขโทรศัพท์'
        }
      }
    ]
  },
  {
    path: '/report',
    component: () => import('layouts/MySearch.vue'),
    children: [
      {
        path: '',
        name: 'report',
        component: () => import('pages/Report.vue'),
        meta: {
          requiresAuth: true,
          title: 'HR Report',
          description: 'รายงานสารสนเทศบุคคล'
        }
      }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/Index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'statistic',
        name: 'statistic',
        component: () => import('pages/UnderConstruction.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'manpower',
        name: 'manpower',
        component: () => import('pages/UnderConstruction.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'retire',
        name: 'retire',
        component: () => import('pages/UnderConstruction.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'infographic',
        name: 'infographic',
        component: () => import('pages/UnderConstruction.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'infographic_list',
        name: 'infographic_list',
        component: () => import('pages/UnderConstruction.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'portfolio',
        name: 'portfolio',
        beforeEnter () { location.href = 'https://pis.egat.co.th' },
        meta: {
          requiresAuth: true
        }
      },
      // {
      //   path: 'benefit',
      //   name: 'benefit',
      //   component: () => import('pages/Benefits.vue'),
      //   meta: {
      //     requiresAuth: true
      //   }
      // },
      // {
      //   path: 'salary',
      //   name: 'salary',
      //   component: () => import('pages/Salary.vue'),
      //   meta: {
      //     requiresAuth: true
      //   }
      // },
      {
        path: 'salary',
        name: 'salary',
        beforeEnter () { location.href = 'https://pis.egat.co.th/psn_extra' },
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'editwl',
        name: 'editwl',
        component: () => import('pages/EditWL.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'editwl_by_bp',
        name: 'editwl_by_bp',
        component: () => import('pages/EditWLbyBP.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('pages/Login'),
    meta: {
      requiresVisitor: true
    }
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
