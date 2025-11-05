export function truncate(value, limit, symbol = '...') {
  // Provjeri je li value string
  if (typeof value !== 'string') {
    return value;
  }
  
  // Provjeri je li duljina veća od limita
  if (value.length > limit) {
    // Odreži string i dodaj symbol
    return value.substring(0, limit) + symbol;
  }
  
  // Vrati originalni string ako je kraći od limita
  return value;
}