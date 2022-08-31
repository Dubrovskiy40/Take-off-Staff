export interface IAuthReducer  {
    email: string;
    password: string;
}

const initialState: IAuthReducer = {
    email: 'admin@admin.ru',
    password: 'admin'
};

const authReducer = (state = initialState ): IAuthReducer => {
    return state;
};

export default authReducer;