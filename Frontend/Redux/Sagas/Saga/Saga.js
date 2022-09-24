import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
   
   
    // ----------------< POST FUNCTION >----------------
   function* POSTFUNCTIONNAME(action) {
     try {
       axios.post('/api/ROUTERNAME', action.payload); // * Goes to SERVER "ROUTERNAME.router"
       yield put({ type: 'FETCH_DATA_SAGA_CALL' }); // * Goes to SAGA "SAGANAME.SAGA"
     } catch (error) {
     }
   }
   
    // ----------------< GET FUNCTION >----------------
   function* GETFUNCTIONNAME(action) {
     try {
       const RETRIEVEDDATA = yield axios.get(`/api/ROUTERNAME/`); // * Goes to SERVER "ROUTERNAME.router"
       yield put({ type: 'UPDATE_REDUCER_CALL', payload: RETRIEVEDDATA.data }); // * Goes to REDUCER
     } catch (error) {
     }
   }
   
    // ----------------< UPDATE FUNCTION >----------------
     function* UPDATEFUNCTIONNAME(action) {
       try{
         yield axios.put(`/api/ROUTERNAME/${action.payload.id}`, action.payload); // * Goes to SERVER "ROUTERNAME.router"
         yield put({type: 'FETCH_DATA_SAGA_CALL', payload: action.payload.id}) // * Goes to REDUCER
     } catch (error){
     }
     }
   
     // ----------------< DELETE FUNCTION >----------------
     function* DELETEFUNCTIONNAME(action) {
       try {
         yield axios.delete(`/api/ROUTERNAME/${action.payload.id}`, ); // * Goes to SERVER "ROUTERNAME.router"
         yield put({ type: 'FETCH_DATA_SAGA_CALL', payload: action.payload.id }); // * Goes to SAGA "SAGANAME.SAGA"
       } catch (error) {
       }   
     }
   
   
   
   function* POSTFUNCTIONNAME() {
     yield takeLatest('SAGA_POST_FUNCTION_CALL', POSTFUNCTIONNAME);
     yield takeLatest('SAGA_GET_FUNCTION_CALL', GETFUNCTIONNAME);
     yield takeLatest('SAGA_UPDATE_FUNCTION_CALL', UPDATEFUNCTIONNAME);
     yield takeLatest('SAGA_DELETE_FUNCTION_CALL', DELETEFUNCTIONNAME);
   }
   
   export default POSTFUNCTIONNAME;