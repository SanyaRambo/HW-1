import { Button } from "./button"
export const ContainerButtonsOfList = ({type, disabledUpdate, disabledDelete, onClickUpdate, onClickDelete, styleDelete, styleUpdate, styleContainer, childrenUpdate, childrenDelete}) => {

	return (
		<div className={styleContainer}>
								<Button
									type={type}
									style={styleUpdate}
									onClick={onClickUpdate}
									disabled={disabledUpdate}
								>
									{childrenUpdate}
								</Button>
								<Button
									type={type}
									style={styleDelete}
									onClick={onClickDelete}
									disabled={disabledDelete}
								>
									{childrenDelete}
								</Button>
							</div>
	)
}
