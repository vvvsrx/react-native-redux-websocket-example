export const RECEIVE_REMOTE_STATUS = 'RECEIVE_REMOTE_STATUS';
export const RECEIVE_LOCAL_STATUS = 'RECEIVE_LOCAL_STATUS';


export function receiveRemoteStatus(message){
  return {
    type: RECEIVE_REMOTE_STATUS,
    message
  }
}

export function receiveLocalStatus(){
  return {
    type: RECEIVE_LOCAL_STATUS
  }
}

export function changeStatus()
{
  return (dispatch) => {
    dispatch(receiveLocalStatus());
  }
}

export function subscribeStatus() {
  return ( dispatch,getState,socket ) => {
    console.log(socket);
    let ws = socket();
    ws.onmessage = event => {
      console.log(event);
      console.log(event.data);
      dispatch(receiveRemoteStatus(event.data));
    };
  };
}