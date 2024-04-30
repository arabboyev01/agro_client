
export const clickTelegram = (username: string) => {
    const telegramURL = `tg://resolve?domain=${username}`;
    window.open(telegramURL, '_blank');
}