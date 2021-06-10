import { useReducer, useEffect } from 'react'
var axios = require('axios');

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

var config = {
  method: 'get',
  url: 'https://divercity-test.herokuapp.com/jobs',
  headers: { }
};

function reducer(state, action) {
    switch (action.type)
    {
        case ACTIONS.MAKE_REQUEST:

            return { loading: true, jobs: [] }

        case ACTIONS.GET_DATA:

            return { ...state, loading: false, jobs: action.payload.jobs }

        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, jobs: [] } 

        default:
            return state;
    }
}

export default function useFetchJobs(params, page){
    const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true })

    useEffect(() => {
        const cancelToken = axios.CancelToken.source();

        dispatch({ type: ACTIONS.MAKE_REQUEST});

        axios(config, {
            cancelToken: cancelToken.token,
            params: { markdown: true, page: page, ...params }
        })
        .then(res => {
            dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: (res.data) } });
        })
        .catch( e => {
            dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
        });

        return () => {
            cancelToken.cancel();
        }
    }, [params, page]);

    return state;
}