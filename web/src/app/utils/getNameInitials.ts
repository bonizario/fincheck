export function getNameInitials(name: string | undefined): string {
  if (!name) {
    return '';
  }

  const names = name.split(' ');
  const firstInitial = names[0].charAt(0).toUpperCase();
  const lastInitial = names[names.length - 1].charAt(0).toUpperCase();

  if (names.length === 1) {
    return firstInitial;
  }

  return `${firstInitial}${lastInitial}`;
}
