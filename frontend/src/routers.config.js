import Login    from './Containers/Login';
import GameNew  from './Containers/Game/GameNew';
import Game     from './Containers/Game/Game';
import GameHome from './Containers/Game/GameHome';
import Home     from './Containers/Home';

export const routes = [
	{
		path: '/',
		isExact: true,
		requiresAuthentication: true,
		component: Home,
	},
	{
		path: '/login',
		component: Login
	},
	{
		path: '/game',
		component: GameHome,
		isExact: true,
		requiresAuthentication: true,
		routes: [
			{
				path: '/game/new',
				component: GameNew
			},
			{
				path: '/game/:id',
				component: Game
			}
		]
	}
];
