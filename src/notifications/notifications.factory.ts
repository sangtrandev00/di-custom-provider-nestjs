import { NotificationService } from "./notifications.service";

// notification.factory.ts
export const notificationProvider = {
    provide: 'NOTIFICATION_SERVICE',
    useFactory: (config: any) => {
        if (config.useZalo) {
            return new NotificationService(config.zaloApiKey);
        } else {
            return new NotificationService(config.emailApiKey);
        }
    },
    inject: ['CONFIG'],
};