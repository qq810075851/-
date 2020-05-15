import Vue from 'vue'
import Router from 'vue-router'

// const Recommend = () => import('components/recommend/recommend')
// const Rank = () => import('components/rank/rank')
// const Singer = () => import('components/singer/singer')
// const Search = () => import('components/search/search')
// const SingerDetail = () => import('components/singer-detail/singer-detail')
// const Disc = () => import('components/disc/disc')
// const TopList = () => import('components/top-list/top-list')
// const User = () => import('components/user-center/user-center')

Vue.use(Router)

const Recommend = ((resolve) => {
	import('components/recommend/recommend').then((recommend)=>{
		resolve(recommend)
	})
})

const Singer = ((resolve) => {
	import('components/singer/singer').then((singer)=>{
		resolve(singer)
	})
})

const Search = ((resolve) => {
	import('components/search/search').then((module)=>{
		resolve(module)
	})
})

const Rank = ((resolve) => {
	import('components/rank/rank').then((rank)=>{
		resolve(rank)
	})
})

const SingerDetail = ((resolve) => {
	import('components/singer-detail/singer-detail').then((module)=>{
		resolve(module)
	})
})

const Disc = ((resolve) => {
	import('components/disc/disc').then((module)=>{
		resolve(module)
	})
})

const TopList = ((resolve) => {
	import('components/top-list/top-list').then((module)=>{
		resolve(module)
	})
})

const User = ((resolve) => {
	import('components/user-center/user-center').then((module)=>{
		resolve(module)
	})
})




export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    },
    {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    },
    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: User
    }
  ]
})
