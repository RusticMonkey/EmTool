// translator.ts
import fakePayload from './FakePayload';

export type VisualObject = {
  id: number;
  label: string;
  link: string;
  status: string;
  dependencies: number[];
};

export const translatePayload = (): VisualObject[] => {
  return fakePayload.map((item) => ({
    id: item.id,
    label: item.name,
    link: item.link,
    status: item.status,
    dependencies: item.dependencies,
  }));
};
