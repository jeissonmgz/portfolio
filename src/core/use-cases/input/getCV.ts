import type { ICurriculum } from "../../entities/cv"
import type { CVRepository } from "../output/CVRepository"

export const getCVData = (cVRepository: CVRepository) => (): ICurriculum => {
    return cVRepository.getCV();
}