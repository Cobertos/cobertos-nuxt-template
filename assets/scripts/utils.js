export const mobileBreakPoint = 768; //px

export function nonReactive(obj) {
  //Mark all the properties as non-configurable and Vue won't iterate over them
  //and make them all observable
  Object.keys(obj).forEach((key) => {
    Object.defineProperty(obj, key, { configurable: false });
  });
  return obj;
}
