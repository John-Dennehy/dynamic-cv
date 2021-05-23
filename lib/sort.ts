
export const byName = (a: any, b: any): number => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase(); 
  
  if (nameA < nameB) return -1
  if (nameA > nameB) return 1;

  return 0;
}