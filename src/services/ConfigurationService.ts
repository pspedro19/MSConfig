import { ConfigurationRepository } from '../repositories/ConfigurationRepository';
import { IConfiguration } from '../models/ConfigurationModel';

export class ConfigurationService {
  private repository: ConfigurationRepository;

  constructor() {
    this.repository = new ConfigurationRepository();
  }

  async addConfiguration(configuration: IConfiguration): Promise<IConfiguration> {
    return this.repository.createConfiguration(configuration);
  }

  // Implementa métodos adicionales...
}
