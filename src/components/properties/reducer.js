import * as types from '../actionsType'

export function properties(state = {}, action) {
    switch (action.type) {
        case types.GET_PROPERTIES:
            return Object.assign({}, state,
                [
                    {
                        picture: "https://i.ytimg.com/vi/Xx6t0gmQ_Tw/maxresdefault.jpg",
                        street: "1/784 Smith Street",
                        address: "Fitzroy, VIC 3065",
                        type: "House",
                        details: "2,1,1",
                        id: "SM1784",
                        price: "450",
                        bond: "2200",
                        available: "12 Feb 2018",
                        applications: {
                            count: "2",
                            link: "###",
                            shortlisted: "2",
                            total: "9"
                        }
                    },
                    {
                        picture: "https://i.ytimg.com/vi/Xx6t0gmQ_Tw/maxresdefault.jpg",
                        street: "128 George Street",
                        address: "Fitzroy, VIC 3065",
                        type: "House",
                        details: "3,2,1",
                        id: "GEO128",
                        price: "980",
                        bond: "4100",
                        available: "4 Feb 2018",
                        applications: {
                            count: "0",
                            link: "###",
                            shortlisted: "0",
                            total: "26"
                        }
                    }
                ]
            );
        default:
            return state;
    }
}