let lastId = 0;
export default function reducer(state = [], action) {

    if (action.type === "Card_added")
        return [
            ...state,
            {
                id: ++lastId,
                description: action.payload.description,
                status: true
            }
        ]
    else if (action.type === "Delete_Card")
        return state.filter(del => del.id !== action.payload.id);
    else if (action.type === "updated")
        return state.map(res => res.id !== action.payload.id ? res : { ...res, description: action.payload.description })
    return state;
}