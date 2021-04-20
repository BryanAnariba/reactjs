export const PostReducer = ( initialState = [], action ) => {
    switch (action?.type) {
        case 'list':
            return action.payload;
        case 'add':
            return initialState;
        case 'edit':
            break;
        case 'delete':
            break;
        default:
            return initialState;
    }
}
