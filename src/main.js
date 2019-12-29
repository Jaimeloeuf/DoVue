import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";
import router from "./routes/router";
import store from "./store";

// Import other dependencies
import VModal from "vue-js-modal";
import autofocus from "./directives/autofocus";
import VueUi from "@vue/ui";
import VueTextareaAutosize from "vue-textarea-autosize";

// Register VueUI components to use
Vue.use(VueUi);

// Register the VModal component for other components to use.
Vue.use(VModal);

// Register the autoresizing textarea box
Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

// Register global custom directive called `v-autofocus`
Vue.directive("autofocus", autofocus);

// firebaseConfig auto generated in project settings
firebase.initializeApp({
	apiKey: "AIzaSyALVp9ns7fXBga4L3t5hVvpwl6_tG5P2_A",
	authDomain: "dovue-web.firebaseapp.com",
	databaseURL: "https://dovue-web.firebaseio.com",
	projectId: "dovue-web",
	storageBucket: "dovue-web.appspot.com",
	messagingSenderId: "1095262940377",
	appId: "1:1095262940377:web:532923f412699df5dba2c8",
	measurementId: "G-52DDJ8E2P6"
});

// Wait for firebase to finish initialization before creating the app.
// So that the router navigation wont break due to invalid auth
firebase.auth().onAuthStateChanged(() => {
	new Vue({
		// Using the "router" option, inject router's instance to all child components
		router,
		// Using the "store" option, inject store's instance to all child components
		store,
		render: h => h(App)
	}).$mount("#app");
});
