import type { ICurriculum } from "../entities/cv";
import type { CVRepository } from "../use-cases/output/CVRepository";
import cvData from "../constants/cv.json"


export const CVRepositoryAdapter: CVRepository = {
    getCV: (): ICurriculum => {
        return {
            name: cvData.name,
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
                endDate: new Date()
            })),
            experience: cvData.experience.map(item => ({
                role: item.role,
                type: item.type,
                company: {
                    logo: item.logo,
                    name: item.company
                },
                startDate: new Date(),
                endDate: new Date(),
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