import React, { Component } from 'react';

class CheckboxComponent extends Component {
	constructor(props) {
		super(props);
		this.label = React.createRef();
		this.input  = React.createRef();
	}
	
	componentDidMount() {
		if (this.props.required) {
			this.input.current.required = true;
		}
	}

	// setValue() { 
	// 	if (this.props.value) {
	// 		this.input.current.value = this.props.value;
	// 		this.active();
	// 		this.props.handleChange(this.input.current.id, this.props.value);
	// 	}
	// }
	
	// active = (e) => {
	// 	this.label.current.classList.add("input-container__label--active");
	// 	this.label.current.classList.add("label--active");
	// }
	
	// blur = (e) => {
	// 	if (!e.target.value) {
	// 		this.label.current.classList.remove("input-container__label--active");
	// 		this.label.current.classList.remove("label--active");
	// 	}
	// }

	onChange = (e) => {
		this.props.handleChange(this.props.name, e.target.checked)
	}
	
	render() {
		return(
			<div className="input-container">
				<label ref={this.label} htmlFor={this.props.name} className="input-container__label label">{this.props.text}</label>
				<input ref={this.input} type={this.props.type} id={this.props.name} className="input-container__input" maxLength={this.props.maxLength} onChange={(e) => this.onChange(e)} onFocus={this.active} onBlur={this.blur} autoComplete={this.props.autoComplete} placeholder={this.props.placeholder}/>
			</div>
		)
	}
}

export default CheckboxComponent