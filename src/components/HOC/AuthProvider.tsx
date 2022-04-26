import React, { useState, createContext } from 'react';

export type GlobalContent = {
    null: null
    signIn: (string?: string, cb?: () => void) => void
    signOut: (string?: string, cb?: () => void) => void
    user: string | null
}

export const AuthContext = createContext<GlobalContent | null>(null);

interface IAuthProvider {
    children: React.ReactNode
}

const AuthProvider: React.FC<IAuthProvider> = ({ children }) => {
    const [user, setUser] = useState<string | null>(null);

    const signIn = (newUser:any, cb: () => void) => {
        setUser(newUser);
        cb();
    };
    const signOut = (cb: () => void) => {
        setUser(null);
        cb();
    };

    const value:any = {user, signIn, signOut};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;