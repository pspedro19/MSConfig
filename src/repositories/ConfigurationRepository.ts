import ConfigurationModel, { IConfiguration } from '../models/ConfigurationModel';

export class ConfigurationRepository {
  async createConfiguration(configuration: IConfiguration): Promise<IConfiguration> {
    return ConfigurationModel.create(configuration);
  }
  // Implementa otros métodos CRUD...
}