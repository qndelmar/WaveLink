import {UserFromFirestore} from "../types";
import {getDoc, doc, getFirestore, DocumentData} from 'firebase/firestore';
import {DocumentSnapshot} from "firebase/firestore";
import {useCallback} from "react";

export function useGetFriends(uid:string, type:string, amount?:number):DocumentData | undefined{
    const getData = useCallback(
        async () => {
            if(type === "all"){
                const data = await getDoc(doc(getFirestore(), "friends", uid))
                return data.data();
            }
        }, [type]
    )
    return getData;
}