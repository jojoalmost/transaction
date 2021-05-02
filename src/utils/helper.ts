export const dateToLocaleString = (dateTime: string) => {
    const date = new Date(dateTime);
    return date.toLocaleString('id-ID');
}

export const toIdrCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR', minimumFractionDigits: 0}).format(amount)
}