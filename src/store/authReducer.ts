export interface IAuthReducer  {
    email: string;
    password: string;
}

const initialState: IAuthReducer[] = [{
        email: 'admin@admin.ru',
        password: 'admin'
}];

const authReducer = (state = initialState, {type}: any): IAuthReducer[] => {
    switch (type) {

        default:
            return state;
    }
};

export default authReducer;