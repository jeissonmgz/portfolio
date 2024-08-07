import { CVRepositoryAdapter } from "../adapters/CVRepository";
import { getCVData } from "../use-cases/input/getCV";

export const getCVDataAdapter = getCVData(CVRepositoryAdapter);