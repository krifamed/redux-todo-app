import { APPLY_FILTER } from "../actionsTypes";
export default function filter(state = "all", action) {
    switch (action.type) {
        case APPLY_FILTER:
            return action.payload.filter;
        default:
            return state;
    }
}
