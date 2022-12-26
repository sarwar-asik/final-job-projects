import { useState, useEffect } from "react";
import { ServerApi } from "../../AllApi/MainApi";

const useUserType = email => {

    const [isAdmin, setIsAdmin] = useState(false);
    const [isRecruiter, setIsRecruiter] = useState(false);
    const [isCandidate, setIsCandidate] = useState(false);
    const [userLoading, setUserLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`${ServerApi}/checkUser/type?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data === "admin") {
                        setIsAdmin(true)
                        setUserLoading(false)
                    }
                    else if (data === "recruiter") {
                        setIsRecruiter(true)
                        setUserLoading(false)
                    }
                    else {
                        setIsCandidate(true)
                        setUserLoading(false)
                    }
                });
        }
    }, [email])
    return [isAdmin, isRecruiter, isCandidate, userLoading];
}

export default useUserType;