export function getUserData(){
    return JSON.parse(localStorage.getItem('user'));
};

export function getAccessToken(){
    const user = getUserData();

    if(user){
        return user.accessToken
    }else{
        return null;
    }
};

export function clearUserData(){
    localStorage.removeItem('user');
};

export function setUserData(data){
    localStorage.setItem('user',JSON.stringify(data));
};

export function createSubmitHandler(ctx, handler){
    return function(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        formData.forEach((value, key) => {
        data[key] = value;
    });

        handler(ctx, data, event);
    }
};
