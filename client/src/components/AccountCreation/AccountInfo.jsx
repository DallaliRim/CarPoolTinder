import './AccountInfo.css';
import { useState, useRef, useEffect } from "react";
import { RiImageEditFill, RiSave3Line, RiCloseCircleLine } from "react-icons/ri";
import * as FetchModule from "../../assets/js/FetchModule"

function AccountInfo() {
    const originalProfileData = {
        firstname: "Bob",
        lastname: "Bobson",
        picture_url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    }
    const [profileData, setProfileData] = useState(originalProfileData);
    const [EditingAvatar, setEditingAvatar] = useState(false);
    const firstnameField = useRef();
    const lastnameField = useRef();
    const avatarField = useRef();
    const DefaultPicture =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
    const [image, setImage] = useState("");
    const inputFile = useRef();

    // useEffect(() => {
    //     if (!locationContext.validAccess && !auth.userLoggedIn) {
    //         navigate("/");
    //     }
    // }, [locationContext.validAccess]);

    useEffect(() => {
        // (async () => {
        // setProfileData(originalProfileData)
        console.log(profileData)
        // })();
    }, [profileData]);

    const saveAvatar = async () => {
        if (validateImageForm(image)) {
            FetchModule.readImage(image, validateImageForm, postImage);
            setEditingAvatar(false);
        }
    }

    function cancelAvatarEdit() {
        setEditingAvatar(false);
        avatarField.current.src = profileData.picture_url;
    }

    async function postImage(data) {
        const newData = await FetchModule.postImageAPI("/api/update_avatar", data);
        if (newData) {
            setProfileData(newData)
        }
    }

    function validateImageForm(image) {
        if (!image) {
            return false;
        } else if (image.size / 1048576 > 5) {
            return false;
        } else {
            return true;
        }
    }

    function readURL(e) {
        const img = e.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            avatarField.current.src = e.target.result;
        }
        reader.readAsDataURL(img);
    }

    const handleFileUpload = e => {
        const { files } = e.target;
        if (files && files.length) {
            readURL(e);
            setEditingAvatar(true);
            setImage(files[0]);
        }
    };
    return (
        <div className="account-info">
            <p className='slogan'> Grab a buddy for your journey... </p>
            <div className="general-info">
                <div className='profile-picture-container'>
                    <div id="image">
                        <img id="profile-pic"
                            ref={avatarField}
                            src={`${profileData?.picture_url || DefaultPicture}`}
                            alt="your profile image"></img>
                        {
                            EditingAvatar ?
                                <div id="avatar-settings">
                                    <RiCloseCircleLine
                                        id="cancle-avatar-btn"
                                        onClick={cancelAvatarEdit} />
                                    <RiSave3Line
                                        id="save-avatar-btn"
                                        onClick={(e) => {
                                            saveAvatar(e)
                                        }} />
                                </div>
                                :
                                <RiImageEditFill
                                    id="edit-pic-icon"
                                    onClick={() => {
                                        inputFile.current.click()
                                    }} />
                        }
                    </div>
                    <div id="update-avatar">
                        <form id="image-picker-form"
                            onSubmit={async (e) => await saveAvatar(e)}>
                            <input
                                style={{ display: "none" }}
                                ref={inputFile}
                                accept="image/png, image/jpeg, image/jpg"
                                onChange={(e) => {
                                    handleFileUpload(e)
                                }}
                                type="file"
                            />
                        </form>
                    </div>

                </div>
                <div className='general-account-info'>
                    <div id="firstname-field" className='name-field'>
                        <h2><span className="user-label">Firstname: </span></h2>
                        <h2 id="first-name" contentEditable={true}
                            className="editable"
                            suppressContentEditableWarning={true}
                            ref={firstnameField}
                            onChange={(e) => {
                                let newProfileData = profileData;
                                newProfileData.firstname = e.target.value;
                                setProfileData(newProfileData);
                            }}
                            maxLength={5}>{profileData.firstname}</h2>
                    </div>
                    <div id="lastname-field" className='name-field'>
                        <h2><span className="user-label">Lastname: </span></h2>
                        <h2 id="last-name" contentEditable={true}
                            className="editable"
                            suppressContentEditableWarning={true}
                            ref={lastnameField}
                            onChange={(e) => {
                                let newProfileData = profileData;
                                newProfileData.lastname = e.target.value;
                                setProfileData(newProfileData);
                            }}
                            maxLength={5}>{profileData.lastname}</h2>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default AccountInfo;
