export function getNameInitials(name: string | undefined): string {
  if (!name) {
    return '';
  }

  const names = name.split(' ');

  if (names.length === 1) {
    return names[0].charAt(0).toUpperCase();
  }

  return `${names[0].charAt(0).toUpperCase()}${names[names.length - 1].charAt(0).toUpperCase()}`;
}
