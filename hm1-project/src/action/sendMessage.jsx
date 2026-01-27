export async function sendMessage(currentState, formData) {
	const message = formData.get('message');

	if (!message || message.trim().length === 0) {
		return {
			...currentState,
			error: 'Сообщение не может быть пустым',
		};
	}

	try {
		await new Promise((resolve) => setTimeout(resolve, 1000));

		return {
			messages: [...currentState.messages, message],
			error: null,
		};
	} catch {
		return {
			...currentState,
			error: 'Произошла ошибка при отправке сообщения',
		};
	}
}
