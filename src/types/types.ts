import { IconType } from "react-icons"

export type ProjectType = {
    title: string
    description: string
    linkGF: string
    linkGB?: string
    linkS?: string
    tecnologies: IconType[]
    resources: string[]
    backEndDescription?: string
}