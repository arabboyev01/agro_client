import { Language } from "@/hooks/language"
import { CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem } from "@coreui/react"
import i18next from "i18next"
import { useState } from "react"

const DropDownComponent = () => {
    const { l } = Language()
    const [current, setCurrent] = useState('')

    const handleLanguage = (language: string) => {
        setCurrent(language)
        return i18next.changeLanguage(language)
    }
    return (
        <CDropdown>
            <CDropdownToggle color="primary">{current ? current : l}</CDropdownToggle>
            <CDropdownMenu>
                <CDropdownItem onClick={() => handleLanguage('uz')}>uz</CDropdownItem>
                <CDropdownItem onClick={() => handleLanguage('ru')}>ru</CDropdownItem>
                <CDropdownItem onClick={() => handleLanguage('en')}>en</CDropdownItem>
            </CDropdownMenu>
        </CDropdown>
    )
}
export default DropDownComponent