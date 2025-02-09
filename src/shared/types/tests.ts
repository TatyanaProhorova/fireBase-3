export type CreateTestPayload = Record<string, string>;
export type TestType = {
  id: string;
  coveredThemes: string[];
  testContent: string[];
  timestamp: Data;
  //  name: string;
  forStudent?: string;
};
