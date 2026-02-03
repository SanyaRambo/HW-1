import { Button } from "./button"
export const ContainerButtonsOfHeader = ({type, disabledAdd, onClickReset, styleAdd, styleReset, styleContainer, childrenAdd, childrenReset}) => {

	return (
		<div className={styleContainer}>
								<Button
									type={type}
									style={styleAdd}
									disabled={disabledAdd}
								>
									{childrenAdd}
								</Button>
								<Button
									style={styleReset}
									onClick={onClickReset}
								>
									{childrenReset}
								</Button>
							</div>
	)
}
