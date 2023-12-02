import { IConfig } from '../models/ConfigModel';

export interface IConfigRepository {
  createConfig(config: IConfig): Promise<IConfig>;
  getConfigByKey(key: string): Promise<IConfig | null>;
  updateConfig(config: IConfig): Promise<IConfig | null>;
  deleteConfig(key: string): Promise<IConfig | null>;
}
