import { createStore } from 'vuex';
import materi from './modules/materi';

const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    materi,
    
  },
});

export default store;