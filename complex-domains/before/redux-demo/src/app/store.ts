import { tassign } from 'tassign';
import { combineReducers } from 'redux';
import { ITaskingState, TASKING_INITIAL_STATE, taskingReducer } from './tasking/tasking.store';
import { IMessagingState, MESSAGING_INITIAL_STATE, messagingReducer } from './messaging/messaging.store';

export interface IAppState {
  tasking: ITaskingState;
  messaging: IMessagingState;
}

export const INITIAL_STATE: IAppState = {
  tasking: TASKING_INITIAL_STATE,
  messaging: MESSAGING_INITIAL_STATE
}

// export function rootReducer(state: IAppState, action): IAppState {
//   return state;
// }

export const rootReducer = combineReducers( {
  tasking: taskingReducer,
  messaging: messagingReducer
} );
