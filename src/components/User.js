import { useState, useEffect } from "react";

const User = () => {
    const [userinfo, setUserinfo] = useState(null);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        try {
            const response = await fetch('https://api.github.com/user/150316139'); 
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const json = await response.json();
            console.log(json);
            setUserinfo(json); 
        } catch (error) {
            console.error("Fetch error: ", error);
        }
    };

   
    if (!userinfo) {
        return <div>Loading...</div>;
    }

    return (
        <div className="user-card">
            <h2>{userinfo.name}</h2>
            <img src={userinfo.avatar_url}/>
            <h4>Email: {userinfo.email}</h4> 
        </div>
    );
};

export default User;
