import type { ICurriculum } from "../entities/cv";
import type { CVRepository } from "../use-cases/output/CVRepository";
import cvData from "../constants/cv.json"


export const CVRepositoryAdapter: CVRepository = {
    getCV: (): ICurriculum => {
        return {
            name: cvData.name,
            description: cvData.desciption,
            socialNetworks: cvData.social_network,
            licensesAndCertifications: cvData.licenses_and_certifications.map(item=>({
                name: item.title,
                entity: {
                    name: item.issuer,
                    logo: item.logo
                },
                id: item.credential_id,
                technologies: item.skills.map(skill=>({
                    logo: '',
                    name: skill
                })),
                startDate: new Date(),
                endDate: new Date(),
                link: item.view
            })),
            experience: cvData.experience.map(item => ({
                role: item.role,
                type: item.type,
                company: {
                    logo: item.logo,
                    name: item.company
                },
                startDate: item.start_date,
                endDate: item.end_date,
                location: item.location,
                description: item.description,
                technologies: item.technologies.map(skill=>({
                    logo: '',
                    name: skill
                })),
            }))
        }
    }
}