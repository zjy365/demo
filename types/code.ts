export interface TVerificationCodes extends Document {
  type: string;
  contact: string;
  code: string;
  createdTime: number;
}
