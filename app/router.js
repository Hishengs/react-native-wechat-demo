import { find } from 'lodash'

import {
	// 聊天相关页面
	Chat,
	// 通讯录相关页面
	Contact,
	// 发现相关页面
	Discover,
	FriendCircle, 
	Scan, 
	Shake, 
	Bottle, 
	Shopping, 
	Game, 
	LittleProgram,
	// 我相关页面
	Me,
	Profile,
	MyPosts,
	Collections,
	Wallet,
	Cards,
	StickerGallery,
	Settings,
	// settings
	About,
	AccountSecurity,
	General,
	HelpAndFeedback,
	Notifications,
	Privacy,
} from './page-components'

const routes = [
	{
		name: 'Chat',
		path: '/chat',
		component: Chat
	},
	{
		name: 'Contact',
		path: '/contact',
		component: Contact
	},
	{
		name: 'Discover',
		path: '/discover',
		component: Discover
	},
	{
		name: 'FriendCircle',
		path: '/discover/friend-circle',
		component: FriendCircle
	},
	{
		name: 'Scan',
		path: '/discover/scan',
		component: Scan
	},
	{
		name: 'Shake',
		path: '/discover/shake',
		component: Shake
	},
	{
		name: 'Bottle',
		path: '/discover/bottle',
		component: Bottle
	},
	{
		name: 'Game',
		path: '/discover/shopping',
		component: Shopping
	},
	{
		name: 'Game',
		path: '/discover/game',
		component: Game
	},
	{
		name: 'LittleProgram',
		path: '/discover/little-program',
		component: LittleProgram
	},
	{
		name: 'Me',
		path: '/me',
		component: Me
	},
	{
		name: 'Profile',
		path: '/me/profile',
		component: Profile
	},
	{
		name: 'MyPosts',
		path: '/me/my-posts',
		component: MyPosts
	},
	{
		name: 'Collections',
		path: '/me/collections',
		component: Collections
	},
	{
		name: 'Wallet',
		path: '/me/wallet',
		component: Wallet
	},
	{
		name: 'Cards',
		path: '/me/cards',
		component: Cards
	},
	{
		name: 'StickerGallery',
		path: '/me/sticker-gallery',
		component: StickerGallery
	},
	{
		name: 'Settings',
		path: '/me/settings',
		component: Settings
	},
]

let router = {
	routes: routes,
	navigator: null,
	getRouteByPath (path) {
		let objRoute = find(this.routes,{path: path})
		return objRoute
	},
	bindNavigator (navigator) {
		this.navigator = navigator
		return this
	},
	goto (path) {
		let args = arguments[1] || {type:'push'}
		if(!this.navigator)return
		else {
			let pushedRoutes = this.navigator.getCurrentRoutes()
			/*let currentRoute = pushedRoutes[pushedRoutes.length-1]
			if(currentRoute)
				if(path==currentRoute.path)
					return*/
			let route = this.getRouteByPath(path)
			if(!route)return
			// route.name = route.name+'_'+Math.random().toString()
			switch(args.type){
				case 'push':
				default:
				  let objRoute = find(pushedRoutes,{path: path})
				  if(objRoute)
						this.navigator.jumpTo(route)
					else this.navigator.push(route)
					break 
				case 'replace':
					this.navigator.replace(route)
					break
			}
		}
	},
}

export default router