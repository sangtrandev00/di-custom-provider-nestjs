// notification.service.ts
export class NotificationService {
    constructor(private readonly apiKey: string) { }

    sendMessage(message: string) {
        console.log(`Sending message: ${message} using API key: ${this.apiKey}`);
    }
}