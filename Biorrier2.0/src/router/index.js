import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import login2 from '@/h5/login'
import layout from '@/components/layout'
import distributionOrder from '@/components/distributionOrder'
import distributionConfiguration from '@/components/distributionConfiguration'
import personnelManagement from '@/components/personnelManagement'
import systemConfiguration from '@/components/systemConfiguration'
import Y1S1 from '@/components/Y1S1'
import sales from '@/components/sales'
import microDoctor from '@/view/microDoctor'
import salesDeputy from '@/view/salesDeputy'
import doctorOrder from '@/view/doctorOrder'
import TmallOrder from '@/view/TmallOrder'
import doctorLevel from '@/view/doctorLevel'
import proposalGoods from '@/view/proposalGoods'
import notProposalGoods from '@/view/notProposalGoods'
import salesProposalGoods from '@/view/salesProposalGoods'
import notsalesProposalGoods from '@/view/notsalesProposalGoods'
import editRule from '@/view/editRule'
import servicingManagement from '@/components/servicingManagement'
import cooperativeDoctor from '@/view/cooperativeDoctor'
import saleser from '@/view/saleser'
import microBusiness from '@/view/microBusiness'
import salesRepresentative from '@/view/salesRepresentative'
import personnelDetails from '@/view/personnelDetails'
import memberManagement from '@/view/memberManagement'
import organizationManagement from '@/view/organizationManagement'
import roleManagement from '@/view/roleManagement'
import messageManagement from '@/view/messageManagement'
import addRole from '@/view/addRole'
import reportStatistics from '@/components/reportStatistics'
import distributionReport from '@/view/distributionReport'
import pointReport from '@/view/pointReport'
import gradeStatistics from '@/view/gradeStatistics'
import gradeReport from '@/view/gradeReport'
import gradeDoctors from '@/view/gradeDoctors'
import page404 from '@/view/page404'


import index from '@/h5/index'
import message from '@/h5/message'
import advisory from '@/h5/advisory'
import notice from '@/h5/notice'
import details from '@/h5/details'
import myMember from '@/h5/myMember'
import pointsDetails from '@/h5/pointsDetails'
import resetPassword from '@/h5/resetPassword'


Vue.use(Router)

 

export default new Router({
  routes: [{
    path: '/',
    redirect: '/admin/login'
  },
  {
    path: '/admin',
    redirect: '/admin/distributionOrder',
    component: layout,
    children: [{
      path: '/admin/distributionOrder',
      redirect: '/admin/distributionOrder/doctorOrder',
      component: distributionOrder,
      children: [{
        path: '/admin/distributionOrder/doctorOrder',
        component: doctorOrder
      },
      {
        path: '/admin/distributionOrder/TmallOrder',
        component: TmallOrder
      }]
    },
    {
      path: '/admin/distributionConfiguration',
      redirect: '/admin/distributionConfiguration/Y1S1/doctorLevel',
      component: distributionConfiguration,
      children: [{
        path: '/admin/distributionConfiguration/Y1S1',
        redirect: '/admin/distributionConfiguration/Y1S1/doctorLevel',
        component: Y1S1,
        children: [{
          path: '/admin/distributionConfiguration/Y1S1/doctorLevel',
          component: doctorLevel
        },
        {
          path: '/admin/distributionConfiguration/Y1S1/proposalGoods',
          component: proposalGoods,
          children: [{
            path: ':id',
            component: editRule
          }]
        },
        {
          path: '/admin/distributionConfiguration/Y1S1/notProposalGoods',
          component: notProposalGoods,
          children: [{
            path: ':id',
            component: editRule
          }]
        }]
      },
      {
        path: '/admin/distributionConfiguration/sales',
        redirect: '/admin/distributionConfiguration/sales/proposalGoods',
        component: sales,
        children: [{
          path: '/admin/distributionConfiguration/sales/proposalGoods',
          component: salesProposalGoods,
          children: [{
            path: ':id',
            component: editRule
          }]
        },
        {
          path: '/admin/distributionConfiguration/sales/notProposalGoods',
          component: notsalesProposalGoods,
          children: [{
            path: ':id',
            component: editRule
          }]
        }]
      },
      {
        path: '/admin/distributionConfiguration/microDoctor',
        component: microDoctor,
        children: [{
          path: ':id',
          component: editRule
        }]
      },
      {
        path: '/admin/distributionConfiguration/salesDeputy',
        component: salesDeputy,
        children: [{
          path: ':id',
          component: editRule
        }]
      }]
    },
    {
      path: '/admin/personnelManagement',
      redirect: '/admin/personnelManagement/servicingManagement',
      component: personnelManagement,
      children: [{
        path: '/admin/personnelManagement/servicingManagement',
        redirect: '/admin/personnelManagement/servicingManagement/cooperativeDoctor',
        component: servicingManagement,
        children: [{
          path: '/admin/personnelManagement/servicingManagement/cooperativeDoctor',
          component: cooperativeDoctor,
          children: [{
            path: ':id',
            component: personnelDetails
          }]
        },
        {
          path: '/admin/personnelManagement/servicingManagement/saleser',
          component: saleser,
          children: [{
            path: ':id',
            component: personnelDetails
          }]
        },
        {
          path: '/admin/personnelManagement/servicingManagement/microBusiness',
          component: microBusiness,
          children: [{
            path: ':id',
            component: personnelDetails
          }]
        },
        {
          path: '/admin/personnelManagement/servicingManagement/salesRepresentative',
          component: salesRepresentative,
          children: [{
            path: ':id',
            component: personnelDetails
          }]
        }]
      },
      {
        path: '/admin/personnelManagement/memberManagement',
        component: memberManagement
      }]
    },
    {
      path: '/admin/systemConfiguration',
      redirect: '/admin/systemConfiguration/organizationManagement',
      component: systemConfiguration,
      children: [{
        path: '/admin/systemConfiguration/organizationManagement',
        component: organizationManagement
      },
      {
        path: '/admin/systemConfiguration/roleManagement',
        component: roleManagement,
        children: [{
          path: ':id',
          component: addRole
        }]
      },
      {
        path: '/admin/systemConfiguration/message',
        component: messageManagement
      }]
    },
    {
      path: '/admin/reportStatistics',
      redirect: '/admin/reportStatistics/distributionReport',
      component: reportStatistics,
      children: [{
        path: '/admin/reportStatistics/distributionReport',
        component: distributionReport
      },
      {
        path: '/admin/reportStatistics/pointReport',
        component: pointReport
      },
      {
        path: '/admin/reportStatistics/gradeStatistics',
        component: gradeStatistics
      },
      {
        path: '/admin/reportStatistics/gradeReport',
        component: gradeReport
      },
      {
        path: '/admin/reportStatistics/gradeDoctors',
        component: gradeDoctors
      }]
    }]
  },
  {
    path: '/admin/login',
    component: login
  },
  {
    path: '/h5',
    redirect: '/h5/login'
  },
  {
    path: '/h5/login',
    component: login2
  },
  {
    path: '/h5/index',
    component: index
  },
  {
    path: '/h5/message',
    redirect: '/h5/message/advisory',
    component: message,
    children: [{
      path: '/h5/message/advisory',
      component: advisory
    },
    {
      path: '/h5/message/notice',
      component: notice
    }]
  },
  {
    path: '/h5/details/:id',
    component: details
  },
  {
    path: '/h5/myMember',
    component: myMember
  },
  {
    path: '/h5/pointsDetails',
    component: pointsDetails
  },
  {
    path: '/h5/resetPassword',
    component: resetPassword
  },
  { 
    path: '/404',
    component: page404 
  },
  {
    path: '*', // 页面不存在的情况下会跳到404页面
    redirect: '/404',
    hidden: true
  }]
})
