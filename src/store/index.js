import { createStore } from 'vuex';
import materi from './modules/materi';
import pemula from './modules/pemula';
import suhu from './modules/suhu';
import sepuh from './modules/sepuh';
import admin from './modules/admin';

const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    materi,
    admin,
    pemula,
    suhu,
    sepuh
    
  },
});

export default store;