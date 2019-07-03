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

const demotion = r => require.ensure([], () => r(require('../components/page/member/demotion')), 'demotion')
const memberList = r => require.ensure([], () => r(require('../components/page/member/memberList')), 'memberList')

const memberOrder = r => require.ensure([], () => r(require('../components/page/order/memberOrder')), 'memberOrder')
const orderList = r => require.ensure([], () => r(require('../components/page/order/orderList')), 'orderList')
const orderDetails = r => require.ensure([], () => r(require('../components/page/order/orderDetails')), 'orderDetails')


const goodsList = r => require.ensure([], () => r(require('../components/page/goods/goodsList')), 'goodsList')
const supplier = r => require.ensure([], () => r(require('../components/page/goods/supplier')), 'supplier')
const goodsclassify = r => require.ensure([], () => r(require('../components/page/goods/goodsclassify')), 'goodsclassify')
const specifications = r => require.ensure([], () => r(require('../components/page/goods/specifications')), 'specifications')
const subject = r => require.ensure([], () => r(require('../components/page/goods/subject')), 'subject')

const bossShare = r => require.ensure([], () => r(require('../components/page/activity/bossShare')), 'bossShare')
const offline = r => require.ensure([], () => r(require('../components/page/activity/offline')), 'offline')
const lucky = r => require.ensure([], () => r(require('../components/page/activity/lucky')), 'lucky')

const homePage = r => require.ensure([], () => r(require('../components/page/advertising/homePage')), 'homePage')

const triggerList = r => require.ensure([], () => r(require('../components/page/message/triggerList')), 'triggerList')
const conList = r => require.ensure([], () => r(require('../components/page/message/conList')), 'conList')
const taskList = r => require.ensure([], () => r(require('../components/page/message/taskList')), 'taskList')

const account = r => require.ensure([], () => r(require('../components/page/supmanagement/account')), 'account')

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
            path: '/demotion',
            component: demotion
        }, {
            path: '/memberList',
            component: memberList
        }, {
            path: '/memberOrder',
            component: memberOrder
        }, {
            path: '/orderList',
            component: orderList
        }, {
            path: '/orderList/orderDetails',
            component: orderDetails
        }, {
            path: '/goodsList',
            component: goodsList
        }, {
            path: '/supplier',
            component: supplier
        }, {
            path: '/goodsclassify',
            component: goodsclassify
        }, {
            path: '/specifications',
            component: specifications
        }, {
            path: '/subject',
            component: subject
        }, {
            path: '/bossShare',
            component: bossShare
        }, {
            path: '/offline',
            component: offline
        }, {
            path: '/lucky',
            component: lucky
        }, {
            path: '/homePage',
            component: homePage
        }, {
            path: '/triggerList',
            component: triggerList
        }, {
            path: '/conList',
            component: conList
        }, {
            path: '/taskList',
            component: taskList
        }, {
            path: '/account',
            component: account
        }, {
            path: '/article',
            component: article
        }]
    }, {
        path: '/login',
        component: login
    }]
})