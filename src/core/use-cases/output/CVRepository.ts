import type { ICurriculum } from "../../entities/cv"

export interface CVRepository {
    getCV: () => ICurriculum;
}