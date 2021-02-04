export const removeState = name => {
    try{
        localStorage.removeItem(name);
    }catch(err)
    {
        return undefined;
    }
};