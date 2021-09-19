export function formatDateForOrder(date: Date): string {
  const year = String(date.getFullYear());
  const month = ((date.getMonth() + 1) > 9 ? '' : '0') + (date.getMonth() + 1);
  const day = (date.getDate() > 9 ? '' : '0') + date.getDate();
  return `${year}${month}${day}`;
}

export function customSort(value: [], sortBy: string, sortOrder: string): [] {
  return value.sort((a: any, b: any) => {
    if (typeof a[sortBy] === 'number') {
      return (sortOrder === 'desc') ? (a[sortBy] - b[sortBy]) : (b[sortBy] - a[sortBy]);
    }

    if (a[sortBy] instanceof Date) {
      return (sortOrder === 'desc')
        ? formatDateForOrder(a[sortBy]).localeCompare(formatDateForOrder(b[sortBy]))
        : formatDateForOrder(b[sortBy]).localeCompare(formatDateForOrder(a[sortBy]));
    }

    return (sortOrder === 'desc')
      ? a[sortBy].localeCompare(b[sortBy])
      : b[sortBy].localeCompare(a[sortBy]);
  });
}

export function toLower(text: string): string {
  return text.toString().toLowerCase();
}

export function sameDay(d1: Date, d2: Date): boolean {
  return d1.getFullYear() === d2.getFullYear()
    && d1.getMonth() === d2.getMonth()
    && d1.getDate() === d2.getDate();
}
