export default (posts = [], action) => {
    switch(action.type) {
        case 'UPDATE': 
            console.log('Update reducer fired!');
            return posts.map((post) => post._id === action.payload._id ? action.payload : post );
            
        case 'LIKE': 
            return posts.map((post) => post._id === action.payload._id ? action.payload : post );

        case 'FETCH_ALL': 
            return action.payload;
            
        case 'CREATE':
            return [ ...posts, action.payload];

        case 'DELETE':
            return posts.filter((post) => post._id !== action.payload);  //payload here is the id!!!
                    
        default:
            return posts;            
    }
}