import routes from '@/api_routes';

export const state = () => ({
	list: [],
	loader: false,
});

export const mutations = {
	setList(state, list) {
		state.list = list;
	},
	setStatusLoader(state, status) {
		state.loader = status;
	}
};

export const actions = {
	async fetchList({ commit }, params) {
		commit('setStatusLoader', true);
		const dataList = await this.$axios.$get(routes.getList(params));
		commit('setList', dataList);
		commit('setStatusLoader', false);
	},
};

export const getters = {
	list: (state) => state.list,
	loader: state => state.loader
};
