exports.module = {
  mode: "development",
  developer: "VCOTAINA",
  routes: {
    'ecom-legacy.etl': {
      address: 'http://srvit01.villa.sys:4000',
      controllers: {
        order: '/api/ecom-legacy-etl/{vController}order/',
      },
    },
    'ecom.customer': {
      address: 'http://srvit01.villa.sys:4001',
      controllers: {
        customer: '/api/ecom-customer/{vController}customer/',
      },
    },
    'ecom.order': {
      address: 'http://srvit01.villa.sys:4002',
      controllers: {
        order: '/api/ecom-order/{vController}order/',
        orderReturn: '/api/ecom-order/{vController}order-return/',
      },
    },
    'ecom.catalog': {
      address: 'http://srvit01.villa.sys:4003',
      controllers: {
        product: '/api/ecom-catalog/{vController}product/',
        category: '/api/ecom-catalog/{vController}category/',
      },
    },
    'global.notification': {
      address: 'http://srvit01.villa.sys:4004',
      controllers: {
        sms: '/api/global-notification/{vController}sms/',
      },
    },
    'global.configuration': {
      address: 'http://srvit01.villa.sys:4005',
      controllers: {
        'ecom.configuration':
          '/api/global-configuration/{vController}ecom-configuration/',
        configuration: '/api/global-configuration/{vController}configuration/',
        'erp.configuration':
          '/api/global-configuration/{vController}erp-configuration/',
      },
    },
    'ecom.cart': {
      address: 'http://srvit01.villa.sys:4007',
      controllers: {
        cart: '/api/ecom-cart/{vController}cart/',
      },
    },
    'global.search': {
      address: 'http://srvit01.villa.sys:4008',
      controllers: {
        'erp.sales': '/api/global-search/{vController}erp-sales/',
        'erp.product': '/api/global-search/{vController}erp-product/',
        'erp.customer': '/api/global-search/{vController}erp-customer/',
      },
    },
    'global.customer-care': {
      address: 'http://srvit01.villa.sys:4010',
      controllers: {
        octone: '/api/global-customer-care/{vController}oct8ne/',
        chatbot: '/api/global-customer-care/{vController}chatbot/',
      },
    },
    'global.identity': {
      address: 'http://srvit01.villa.sys:4011',
      controllers: {
        session: '/api/global-identity/identity/{vController}session/',
        management: '/api/global-identity/identity/{vController}management/',
      },
    },
    'erp.logistic': {
      address: 'http://srvit01.villa.sys:4015',
      controllers: {
        dachser: '/api/erp-logistic/{vController}dachser/',
        gls: '/api/erp-logistic/{vController}gls/',
        outbound: '/api/erp-logistic/{vController}outbound/',
      },
    },
    'erp.sales': {
      address: 'http://srvit01.villa.sys:4017',
      controllers: {
        sale: '/api/erp-sales/{vController}sale/',
      },
    },
    'global.reporting': {
      address: 'http://srvit01.villa.sys:4018',
      controllers: {
        report: '/api/global-reporting/{vController}report/',
        print: '/api/global-reporting/{vController}print/',
      },
    },
    'erp.wms': {
      address: 'http://127.0.0.1:4019',
      controllers: {
        product: '/api/erp-wms/{vController}product/',
		rEnDocument: '/api/erp-wms/{vController}register-entry-document/'
      },
    },
    'erp.purchases': {
      address: 'http://srvit01.villa.sys:4021',
      controllers: {
        purchase: '/api/erp-purchases/{vController}purchase/',
      },
    },
    'global.template': {
      address: 'http://srvit01.villa.sys:4022',
      controllers: {
        printing: '/api/global-printing/{vController}printing/',
        template: '/api/global-template/{vController}template/',
      },
    },
    'global.resources': {
      address: 'http://srvit01.villa.sys:4025',
      controllers: {
        resource: '/api/global-resources/{vController}resource/',
      },
    },
    'global.carrier': {
      address: 'http://127.0.0.1:4026',
      controllers: {
        label: '/api/global-carrier/{vController}label/',
      },
    },
    'ecom.marketing': {
      address: 'http://srvit01.villa.sys:4029',
      controllers: {
        'dynamic.product': '/api/ecom-marketing/{vController}dynamic-product/',
        'hubspot.product': '/api/ecom-marketing/{vController}hubspot-product/',
        'hubspot.contact': '/api/ecom-marketing/{vController}hubspot-contact/',
		'hubspot.category': '/api/ecom-marketing/{vController}hubspot-category/',
      },
    },
    'erp.core': {
      address: 'http://srvit01.villa.sys:4030',
      controllers: {
        product: '/api/erp-core/{vController}product/',
      },
    },
    "global.organization": {
      address: "http://127.0.0.1:4016",
      controllers: {
        employee: "/api/global-organization/{vController}employee/",
      },
    },
	"global.third-party": {
	  address: "http://127.0.0.1:4034",
	  controllers: {
		'google-vision': "/api/global-third-party/{vController}google-vision/", 
		'bizneo-logged-times': "/api/global-third-party/{vController}bizneo-logged-times/",
		'bizneo-absence': "/api/global-third-party/{vController}bizneo-absence/"
	  },
	},
	"global.media": {
	  address: "http://127.0.0.1:4023",
	  controllers: {
		'media-storage': "/api/global-media/{vController}media-storage/", 
	  },
	},
	"global.content": {
	  address: "http://127.0.0.1:4032",
	  controllers: {
		  'marketing-category': "/api/global-content/{vController}marketing-category/"
	  }
	},
	"global.search": {
		address: "http://127.0.0.1:4008",
		controllers: {
			'logistic-carrier-label': '/api/global-search/{vController}logistic-carrier-label/',
			'ecom-order': '/api/global-search/{vController}ecom-order/',
			'global': '/api/global-search/{vController}global/',
			'ecom-customer': '/api/global-search/{vController}ecom-customer/',
			'logistic-carrier-label-parcel': '/api/global-search/{vController}logistic-carrier-label-parcel/'
		}
	}
  },
  app: {
    listenHostname: "0.0.0.0",
    corsOrigin: ["http://localhost:3000"],
    errorLogPrint: true,
  },
  session: {
    secret: "laguardiadelanoche",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsImVtYWlsIjoidGVzdEBza2x1bS5jb20iLCJ1c2VySWQiOiI0Nzg3MGY1My1kNGM4LTQxNGEtYWVlZS0xZjM5M2QxYzQ5ZTEiLCJpYXQiOjE2NTUyMDU0NjYsImV4cCI6ODY0MDE2NTUyMDU0NjZ9.BZh2EIFEVJ7w-SDs423H_fOx3rolFBqZPDSWJHYznWs",
    identityScopes: [],
    refreshSeconds: 60,
    cacheSeconds: 600,
  },
  kafka: {
	  active:true,
  },
  apm: {
    active: true,
    token: "ffXJApeapWHhn73yFa",
    url: "https://c5a7ce64e21f47acaab3653d55016feb.apm.europe-west3.gcp.cloud.es.io:443",
    environment: "development",
  },
  redis: {
    active: true,
    defaultTTLSeconds: 3600,
    url: "redis://srvit01.villa.sys:6379",
    username: undefined,
    password: undefined,
    db: 0,
  },
  configuration: {
    refreshSeconds: 60,
    cacheSeconds: 600,
  },
  ecomConfiguration: {
    refreshSeconds: 60,
    cacheSeconds: 600,
  },
  erpConfiguration: {
    refreshSeconds: 60,
    cacheSeconds: 600,
  },
  elastic: {
    default: {
      node: "http://srvit01.villa.sys:9200",
    },
  },
  mongo: {},
  translations: {
    useFile: true,
    refreshSeconds: 60,
    cacheSeconds: 600,
  },
};
