import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
        redirect: '/recruitment-info/job-recruitment-overall-analysis',
        children: [
            {
                path: 'recruitment-info/job-recruitment-overall-analysis',
                name: 'overall',
                component: () => import('@/views/Recruitment/OverallAnalysisView.vue')
            },
            {
                path: 'recruitment-info/difficulty-coefficient-analysis',
                name: 'difficulty',
                component: () => import('@/views/Recruitment/DifficultyAnalysisView.vue')
            },
            {
                path: 'recruitment-info/keyword-heat-analysis',
                name: 'keyword',
                component: () => import('@/views/Recruitment/KeywordAnalysisView.vue')
            },
            {
                path: 'recruitment-info/salary-distribution-analysis',
                name: 'salary',
                component: () => import('@/views/Recruitment/SalaryAnalysisView.vue')
            },
            {
                path: 'recruitment-info/salary-site-analysis',
                name: 'site',
                component: () => import('@/views/Recruitment/SiteSalaryAnalysisView.vue')
            },
            {
                path: 'employment-unemployment-num-analysis/unemployment-num-analysis',
                name: 'unemployment',
                component: () => import('@/views/Employment/UnemploymentAnalysisView.vue')
            },
            {
                path: 'employment-unemployment-num-analysis/employment-num-analysis',
                name: 'employment-gdp',
                component: () => import('@/views/Employment/EmploymentGDPAnalysisView.vue')
            },
            {
                path: 'employment-environment/house-price-analysis',
                name: 'house',
                component: () => import('@/views/Environment/HousePriceAnalysis.vue')
            },
            {
                path: 'employment-environment/medical-education-analysis',
                name: 'medical-education',
                component: () => import('@/views/Environment/MedicalEducationAnalysisView.vue')
            },
            {
                path: 'model-assistant',
                name: 'assistant',
                component: () => import('@/views/ModelAssistant/ModelAssistantView.vue')
            },
            {
                path: 'develop-background',
                name: 'background',
                component: () => import('@/views/background/DevelopBackView.vue')
            }
        ]
    },
    // 无匹配页面则跳转到404
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFoundView.vue')
    }
]

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: routes,
        // 在导航栏中，为当前活动路由的菜单项添加类名
        linkActiveClass: 'is-active',
        // 跳转回到页面顶部
        scrollBehavior(to, from, savedPosition) {
            return {
                selector: '#app',
            };
        }
    }
)

export default router