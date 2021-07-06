const Initial = {
    questions:[
        {question:'what is your name?',options:{a:'shazeel',b:'Ahmed',c:'Ali'},correct:'a'},
        {question:'How old are you?',options:{a:'18',b:'20',c:'22'},correct:'a'},
        {question:'What is your country?',options:{a:'Pakistan',b:'India',c:'Uk'},correct:'a'},
        {question:'Where do you live?',options:{a:'Karachi',b:'Quetta',c:'Lahore'},correct:'a'},
    ],
    total:0
}

function Reducer(state = Initial, action) {
        switch (action.type) {
            case 'TOTAL':
                return ({
                    ...state,
                    Blood:action.payload
            })
        }
        return state;
    }
export default Reducer