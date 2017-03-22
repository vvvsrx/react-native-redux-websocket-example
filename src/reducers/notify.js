import { RECEIVE_REMOTE_STATUS,RECEIVE_LOCAL_STATUS } from "../actions/notify";

const initialState = {
    history:[],
    statusType:-1,
    statusMessage:''
};

export default function notify(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_REMOTE_STATUS:
            let h1 = state.history;
            h1.push(action.message);
            return Object.assign({}, state,
            {
                history:h1,
                statusMessage:action.message
            });
        case RECEIVE_LOCAL_STATUS:
            let currentStatus = '您有1个未支付的订单';
            let h2 = state.history;
            h2.push(currentStatus);
            return Object.assign({}, state,
            {
                history:h2,
                statusMessage:currentStatus
            });
        default:
            return state;
    }
}