import * as yup from 'yup';

export const registrationFormSchema = yup.object().shape({
	email: yup
	.string()
	.required('Заполните почту')
	.email('Почта введена неверно'),
	password: yup
		.string()
		.required('Заполните пароль')
		.min(3, 'Ошибка. Пароль должен быть 3 символа минимум')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z]).+$/,
			'Напишите такой пароль, чтобы были маленькие и заглавные ЛАТИНСКИЕ буквы',
		),
	passwordReplay: yup.string()
		.required('Заполните повтор пароля')
		.oneOf([yup.ref('password')], 'Пароли не совпадают'),
});
