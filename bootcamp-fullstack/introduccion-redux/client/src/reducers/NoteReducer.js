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

// Actions creators
export const actionCreateNote = (content) => {
    return {
        type: '@note/add',
        payload: {
            _id: new Date(),
            content: content,
            important: false
        }
    };
}

export const actionToggleImportant = (_id) => {
    return {
        type: '@note/toggle_important',
        payload: {
            _id: _id
        }
    };
}