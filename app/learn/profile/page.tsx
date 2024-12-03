import Sidebar from "@/app/components/Sidebar"


function ProfilePage(){
    return (
        <div className="flex flex-row flex-wrap">
            <Sidebar />
            <div className="container"></div>
        </div>
    )
}

export default ProfilePage