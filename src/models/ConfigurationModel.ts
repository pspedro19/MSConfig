import mongoose, { Document, Schema } from 'mongoose';

export interface IConfiguration extends Document {
  key: string;
  value: string;
}

const ConfigurationSchema: Schema = new Schema({
  key: { type: String, required: true, unique: true },
  value: { type: String, required: true }
});

const ConfigurationModel = mongoose.model<IConfiguration>('Configuration', ConfigurationSchema);
export default ConfigurationModel;
