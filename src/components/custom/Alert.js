import { message } from "antd";

export const showAlert = (type, content, duration, onClose) => {
    // Set default duration to 2 if it's not provided
    if (duration === undefined) {
        duration = 2;
    }

    // Based on the type of message, call the respective function from Ant Design's message
    switch (type) {
        case "success":
            message.success({
                content: content,
                duration: duration,
                onClose: onClose,
            });
            break;
        case "error":
            message.error({
                content: content,
                duration: duration,
                onClose: onClose,
            });
            break;
        case "warning":
            message.warning({
                content: content,
                duration: duration,
                onClose: onClose,
            });
            break;
        case "info":
            message.info({
                content: content,
                duration: duration,
                onClose: onClose,
            });
            break;
        case "loading":
            message.loading({
                content: content,
                duration: duration,
                onClose: onClose,
            });
            break;
        default:
            message.info({
                content: content,
                duration: duration,
                onClose: onClose,
            });
            break;
    }
};
