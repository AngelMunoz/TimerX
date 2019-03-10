export class DateInputValueConverter {
  toView(value: Date) {
    if (!value) return value;
    return value.toISOString().split('T').shift();
  }

  fromView(value: string) {
    if (!value) return value;
    return new Date(value.replace('-', '/'));
  }
}

