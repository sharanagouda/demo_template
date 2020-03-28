import { getConfigs } from "@discovery-dni/cd-tv.sonic";
import { CONFIG_FILE_ALIAS } from "../bootstrapSonic";

export const getConfig = () => getConfigs(CONFIG_FILE_ALIAS);
