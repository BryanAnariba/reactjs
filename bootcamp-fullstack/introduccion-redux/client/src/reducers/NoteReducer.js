export const NoteReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case '@note/add':
            return [ ...state, action.payload ];
        case '@note/create':
            return state;
        case '@note/toggle_important':
            const { _id } = action.payload;
            return state.map((note) => {
                if (note._id === _id) {
                    return {
                        ...note,
                        important: !note.important
                    };
                } else {
                    return note;
                }
            });
        default:
            return state;
    }
}