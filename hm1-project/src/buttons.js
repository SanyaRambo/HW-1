import { handleOperandButton, handleOperator } from './handlers';

export const getButtons = (state) => [
	{
		id: '1',
		label: '1',
		group: 'nums',
		handler: (label) => handleOperandButton(state, label),
	},
	{
		id: '2',
		label: '2',
		group: 'nums',
		handler: (label) => handleOperandButton(state, label),
	},
	{
		id: '3',
		label: '3',
		group: 'nums',
		handler: (label) => handleOperandButton(state, label),
	},
	{
		id: '4',
		label: '4',
		group: 'nums',
		handler: (label) => handleOperandButton(state, label),
	},
	{
		id: '5',
		label: '5',
		group: 'nums',
		handler: (label) => handleOperandButton(state, label),
	},
	{
		id: '6',
		label: '6',
		group: 'nums',
		handler: (label) => handleOperandButton(state, label),
	},
	{
		id: '7',
		label: '7',
		group: 'nums',
		handler: (label) => handleOperandButton(state, label),
	},
	{
		id: '8',
		label: '8',
		group: 'nums',
		handler: (label) => handleOperandButton(state, label),
	},
	{
		id: '9',
		label: '9',
		group: 'nums',
		handler: (label) => handleOperandButton(state, label),
	},
	{
		id: '0',
		label: '0',
		group: 'nums',
		handler: (label) => handleOperandButton(state, label),
	},
	{
		id: '+',
		label: '+',
		group: 'operBtn',
		handler: (label) => handleOperator(state, label),
	},
	{
		id: '-',
		label: '-',
		group: 'operBtn',
		handler: (label) => handleOperator(state, label),
	},
	{
		id: '*',
		label: '*',
		group: 'operBtn',
		handler: (label) => handleOperator(state, label),
	},
	{
		id: '/',
		label: '/',
		group: 'operBtn',
		handler: (label) => handleOperator(state, label),
	},
	{
		id: 'С',
		label: 'С',
		group: 'operBtn',
		handler: (label) => handleOperator(state, label),
	},
	{
		id: '=',
		label: '=',
		group: 'operBtn',
		handler: (label) => handleOperator(state, label),
	},
];
