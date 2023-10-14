import * as React from "react";
import styled from "styled-components";

const defaultSize = 16;
const SVGContainer = styled.svg`
	flex: 0 0 auto;
	vertical-align: -0.15em;
	fill: currentColor;
	overflow: hidden;
	transition: all ease 0.2s;
`;
interface IconFontProps extends React.HTMLAttributes<SVGSVGElement> {
	type: string;
	className?: string;
	style?: React.CSSProperties;
	width?: string;
	height?: string;
	fontSize?: number;
	color?: string;
}
export default class Icon extends React.PureComponent<IconFontProps> {
	dom: SVGElement;
	render() {
		const {
			type,
			className,
			style,
			width,
			height,
			fontSize,
			color = "#999",
			...props
		} = this.props;
		const w = width || fontSize || defaultSize;
		const h = height || fontSize || defaultSize;
		return (
			<SVGContainer
				ref={(c) => (this.dom = c)}
				className={className || "icon"}
				style={{
					width: w,
					height: h,
					color,
					...style,
				}}
				aria-hidden="true"
				{...props}
			>
				<use xlinkHref={`#icon${type}`} />
			</SVGContainer>
		);
	}
}
