import MyButton from "@/view/components/common/form/my-button"
import { useUserStore } from "../../../store/user.store"
import ContainerSectionWrapper from "../../components/layout/container-section-wrapper"
import PageWrapper from "../../components/layout/page-wrapper"

export default function HomePage() {
    const user = useUserStore((store) => store.user)
    return (
        <PageWrapper>
            <ContainerSectionWrapper className="text-gray-100">
                {JSON.stringify(user, null, 3)}
                home
                <div>
                    <MyButton type="button" onClick={() => {}} withCheck className="bg-red-400">
                        check
                    </MyButton>
                </div>
            </ContainerSectionWrapper>
        </PageWrapper>
    )
}
