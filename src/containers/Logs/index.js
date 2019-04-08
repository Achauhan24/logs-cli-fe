import Logs from '../../components/Logs';
import { connect } from 'react-redux'; 
import { getLogs } from '../../api/auth';
import { createNamespacer } from '../../commons/js/utils/reducer';

const mapStateToProps = (state) => {
    return {
        logs: state.logs.logs,
        showLogs: state.logs.showLogs,
    }
}

const namespacer = createNamespacer('LOGS')


const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            localStorage.removeItem("token")
            localStorage.removeItem("userId")
        },
        setShowLogs: (value) => {
            dispatch({
                type: namespacer("SET_SHOW_LOGS"),
                payload: {
                    value: value,
                }
            })
        },
        setLogs: (lines) => {
            ( async () => {
                try{
                    let response = await getLogs(lines);

                    dispatch({
                        type: namespacer("SET_SHOW_LOGS"),
                        payload: {
                            value: true,
                        }
                    })

                    dispatch({
                        type: namespacer("SET_LOGS"),
                        payload: {
                            value: response.data.message,
                        }
                    })
                }catch(error){
                    console.log(error);

                }
            })()
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Logs)