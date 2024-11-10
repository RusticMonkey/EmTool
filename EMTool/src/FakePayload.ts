// fakePayload.ts
const fakePayload = [
  { id: 1, name: "Item 1", link: "https://example.com/item1", status: "closed", dependencies: [] },
  { id: 2, name: "Item 2", link: "https://example.com/item2", status: "closed", dependencies: [1] }, // Depends on Item 1
  { id: 3, name: "Item 3", link: "https://example.com/item3", status: "open", dependencies: [2] }, // Depends on Item 2
  { id: 4, name: "Item 4", link: "https://example.com/item3", status: "open", dependencies: [2] }, //
  { id: 5, name: "Item 5", link: "https://example.com/item3", status: "open", dependencies: [1,3] }, // Depends on Items 1 and 3
  
];

export default fakePayload;

