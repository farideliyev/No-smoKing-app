import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from "./UserPage.module.css"
import {useParams} from "react-router";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faSave } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {setProfileThunkCreator} from "../../redux/profile-reducer";

const UserPageInfo = (props)=> {
    let {urlId} = useParams()

    const {uid, name, surname, age, sex} = props.userInfo

    return<>
        <div>
            <strong>Full Name: </strong>
                 <ElementCurrentMode value={`${name} ${surname}`} fieldId="fullName"/>
        </div>

        <div>
            <strong>Age:</strong>
                 <ElementCurrentMode uid={uid} value={age} fieldId="age"/>
        </div>

        <div>
            <strong>Sex: </strong>
            <ElementCurrentMode value={sex} fieldId="sex"/>
        </div>
        </>
}

function ElementCurrentMode ({uid, value, fieldId}) {
    let [editMode, setEditMode] = useState(false)
    let [fieldData, setFieldData] = useState(value)
    let dispatch = useDispatch()

    let changeMode = (bool, e)=>{
        !editMode && console.log(e.target.parentElement.parentElement.textContent)
        setEditMode(bool)
    }

    let onChange = (e)=>{
        setFieldData(e.target.value)
    }
    // enable useEffect only for value changes
    useEffect(()=>{
        debugger
        if(editMode===false) dispatch(setProfileThunkCreator(uid, {[fieldId]:fieldData}))
    }, [value])

    if(editMode) {
        return(
            <>
                <input type="text" onChange={onChange} value={fieldData}/>
                <span className="iconSave" onClick={(e)=>changeMode(false, e)}>
                    <FontAwesomeIcon icon={faSave}/>
                </span>
            </>)
    }
        return (
            <>
                <span>
                        {fieldData}
                    <span onClick={(e) => (changeMode(true, e))}>
                            <FontAwesomeIcon className="iconEdit" icon={faEdit}/>
                    </span>

                </span>
            </>
        )
}
export default UserPageInfo