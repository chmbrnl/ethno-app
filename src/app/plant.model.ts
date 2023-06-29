import { Document, model, Schema } from 'mongoose';

export interface Plant extends Document {
  family?: string;
  sn?: string;
  local_name?: string;
  who_icd_11_classification?: string;
  mode_of_application_standardized: string;
  parts_used: string;
  diseases_treated?: string;
  preparation_administration?: string;
}

const plantSchema = new Schema<Plant>({
  family: { type: String, required: false },
  sn: { type: String, required: false },
  local_name: { type: String, required: false },
  who_icd_11_classification: { type: String, required: false },
  mode_of_application_standardized: { type: String, required: true },
  parts_used: { type: String, required: true },
  diseases_treated: { type: String, required: false },
  preparation_administration: { type: String, required: false },
});

export const PlantModel = model<Plant>('Plant', plantSchema);

module.exports = PlantModel;