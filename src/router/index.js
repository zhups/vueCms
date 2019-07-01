import Vue from 'vue';
import Router from 'vue-router';

const Home = r => require.ensure([], () => r(require('../components/common/Home')), 'Home')
const index = r => require.ensure([], () => r(require('../components/page/index')), 'index')

const article = r => require.ensure([], () => r(require('../components/page/article')), 'article')

const member = r => require.ensure([], () => r(require('../components/page/jurisdiction/member')), 'member')
const group = r => require.ensure([], () => r(require('../components/page/jurisdiction/group')), 'group')
const permissions = r => require.ensure([], () => r(require('../components/page/jurisdiction/permissions')), 'permissions')
const peoplemanagement = r => require.ensure([], () => r(require('../components/page/jurisdiction/peoplemanagement')), 'peoplemanagement')
const jurisdictionList = r => require.ensure([], () => r(require('../components/page/jurisdiction/jurisdictionList')), 'jurisdictionList')

const recharge = r => require.ensure([], () => r(require('../components/page/money/recharge')), 'recharge')
const becomeBoss = r => require.ensure([], () => r(require('../components/page/money/becomeBoss')), 'becomeBoss')
const upgradeBoss = r => require.ensure([], () => r(require('../components/page/money/upgradeBoss')), 'upgradeBoss')
const cardbag = r => require.ensure([], () => r(require('../components/page/money/cardbag')), 'cardbag')
const withdraw = r => require.ensure([], () => r(require('../components/page/money/withdraw')), 'withdraw')
const bounty = r => require.ensure([], () => r(require('../components/page/money/bounty')), 'bounty')
const addbankcard = r => require.ensure([], () => r(require('../components/page/money/addbankcard')), 'addbankcard')
const bountyList = r => require.ensure([], () => r(require('../components/page/money/bountyList')), 'bountyList')


const login = r => require.ensure([], () => r(require('../components/login/login')), 'login')

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: Home,
        children: [{
            path: '',
            component: index
        }, {
            path: '/index',
            component: index
        }, {
            path: '/member',
            component: member
        }, {
            path: '/group',
            component: group,
        }, {
            path: '/group/permissions',
            component: permissions
        }, {
            path: '/group/peoplemanagement',
            component: peoplemanagement
        }, {
            path: '/jurisdictionList',
            component: jurisdictionList
        }, {
            path: '/recharge',
            component: recharge
        }, {
            path: '/becomeBoss',
            component: becomeBoss
        }, {
            path: '/upgradeBoss',
            component: upgradeBoss
        }, {
            path: '/cardbag',
            component: cardbag
        }, {
            path: '/withdraw',
            component: withdraw
        }, {
            path: '/bounty',
            component: bounty
        }, {
            path: '/addbankcard',
            component: addbankcard
        }, {
            path: '/bountyList',
            component: bountyList
        }, {
            path: '/article',
            component: article
        }]
    }, {
        path: '/login',
        component: login
    }]
})