/**
 * ✅ DYNAMIC PAGE CONFIGURATION
 * Define all pages, sensors, and API credentials here
 * Changes here automatically apply to the entire app
 */

const appConfig = {
    appTitle: 'IITMZ Water Management',
    defaultLanguage: 'en',
    
    // ✅ All Pages in the App
    pages: {
        "main_sump": {
                "id": "main_sump",
                "displayName": "Main Sump",
                "title": "Main Sump Water Level Monitoring",
                "icon": "📄",
                "sensors": {
                        "main_sump": {
                                "displayName": "Main Sump",
                                "channelID": "3156369",
                                "apiKey": "CU8K2JLAOSV53K4X",
                                "field": "field3",
                                "isInteger": false,
                                "limits": {
                                        "warning": 300,
                                        "danger": 100
                                }
                        }
                }
        },
        "pampa": {
                "id": "pampa",
                "displayName": "Pampa Sump",
                "title": "Pampa Sump Water Level Monitoring",
                "icon": "📄",
                "sensors": {
                        "pampa": {
                                "displayName": "Pampa Sump",
                                "channelID": "2322174",
                                "apiKey": "9VMWLF58YXMSKZ4O",
                                "field": "field1",
                                "isInteger": false,
                                "limits": {
                                        "warning": 100,
                                        "danger": 60
                                }
                        }
                }
        },
        "himalaya": {
                "id": "himalaya",
                "displayName": "Himalaya OHT",
                "title": "Himalaya OHT Water Level Monitoring",
                "icon": "📄",
                "sensors": {
                        "himalaya": {
                                "displayName": "Himalaya OHT",
                                "channelID": "2322174",
                                "apiKey": "9VMWLF58YXMSKZ4O",
                                "field": "field7",
                                "isInteger": false,
                                "limits": {
                                        "warning": 150,
                                        "danger": 60
                                }
                        }
                }
        },
        "mandakini": {
                "id": "mandakini",
                "displayName": "Mandakini",
                "title": "Mandakini Water Level Monitoring",
                "icon": "📄",
                "sensors": {
                        "mandakini": {
                                "displayName": "Mandakini Sump",
                                "channelID": "2592245",
                                "apiKey": "KI554EX3UF1UNCO9",
                                "field": "field1",
                                "isInteger": false,
                                "limits": {
                                        "warning": 150,
                                        "danger": 70
                                }
                        }
                }
        },
        "ICSR": {
                "id": "ICSR",
                "displayName": "ICSR",
                "title": "ICSR Water Level Monitoring",
                "icon": "📄",
                "sensors": {
                        "ICSR_sump": {
                                "displayName": "ICSR Sump",
                                "channelID": "2511342",
                                "apiKey": "IFAV1XCYUFW5Y478",
                                "field": "field1",
                                "isInteger": false,
                                "limits": {
                                        "warning": 100,
                                        "danger": 60
                                }
                        },
                        "ICSR_OHT": {
                                "displayName": "ICSR OHT",
                                "channelID": "2511342",
                                "apiKey": "IFAV1XCYUFW5Y478",
                                "field": "field6",
                                "isInteger": false,
                                "limits": {
                                        "warning": 50,
                                        "danger": 30
                                }
                        }
                }
        }
},

    // ✅ Get all page info (for index/hub)
    getAllPages: function() {
        return Object.values(this.pages).map(page => ({
            id: page.id,
            displayName: page.displayName,
            icon: page.icon,
            sensorCount: Object.keys(page.sensors).length
        }));
    },

    // ✅ Get specific page config
    getPage: function(pageId) {
        return this.pages[pageId] || null;
    },

    // ✅ Get all sensors for a page
    getSensorsForPage: function(pageId) {
        const page = this.getPage(pageId);
        return page ? page.sensors : {};
    }
};

// Make config accessible globally
if (typeof window !== 'undefined') {
    window.appConfig = appConfig;
}
