import Vue from 'vue'

import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
if (!Vue.moment) {
    Vue.use(VueMoment, {
        moment,
    })
}