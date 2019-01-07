import { INCREMENT } from './actions';
import { tassign } from 'tassign';
import { Map } from 'immutable' ;

export interface IAppState{
    counter: number;
    messages?: {
        newMessages: number
    };
}

export const INITIAL_STATE: IAppState = {
    counter: 0,
    messages: {
        newMessages: 5
    }
};

export function rootReducer(state: Map<string, any>, action): Map<string, any> {

    // tslint:disable-next-line:one-line
    switch (action.type){
        case INCREMENT:
        // return { counter: state.counter + 1};
        // return Object.assign({}, state, { counter: state.counter + 1 });
        // Object.Assign is not type safe, meaning we can add new properties to the object
        // which dont exist in the interface. Ex: return { counter: state.counter + 1, isOnline: true};
        // Someone implemented a type safe version of Object.assign.. we can get it by
        // npm install tassign --save

        // return tassign(state, {counter: state.counter + 1});
        // in this approach, we are preventing the object from being mutated, object itself is not immutable.
        // npm install immutable --save

        return state.set('counter', state.get('counter') + 1);
    }

    return state;

}