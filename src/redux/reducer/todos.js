const initialState = [];

export default function todos(todos= initialState , action){
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...todos,
                {
                    id: Math.random()
                        .toString(36)
                        .substr(2, 9),
                    todo : action.payload.todo,
                    active: true,
                    }
            ]
        case 'DELETE_TODO':
            return todos.filter(todo => todo.id!== action.payload.id)
        case 'UPDATE_TODO':
            return todos.map(todo => todo.id === action.payload.id?{...todo, ...action.payload.data}:todo)
        case 'COMPLETE_ALL':
            return todos.map(todo => ({...todo, active: action.payload.active }));
        case 'CLEAR_COMPLETED':
            return todos.filter(todo => todo.active);
        default: 
            return todos;
    }
}