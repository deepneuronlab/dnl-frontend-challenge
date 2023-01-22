interface DynamicFormPayload {
  data: Record<string, string> | null;
  valid: boolean;
}

export default DynamicFormPayload;
