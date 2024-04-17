import { CSpinner } from "@coreui/react"

export const Loader = () => {
    return <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: '100%', height: "80vh"}}>
        <CSpinner color="success" />
    </div>
}