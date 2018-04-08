import {createStore,combineReducers} from "redux";

const reducers = combineReducers({
	isShow:function(state=false,action){
		switch(action.type){
			case "CHANGE" :
				var newS = state;
				newS = !newS;
				return newS;
			default :
				return state;
		}
	}
})

const store = createStore(reducers,{});

export default store;