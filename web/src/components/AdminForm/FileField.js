import React, { Component } from 'react';

import { Upload, Button, Icon } from 'antd';

const INITIAL_STATE = {
	fileList: [],
	file: undefined
};
export class FileField extends Component {
	state = INITIAL_STATE;

	componentWillReceiveProps(nextProps) {
		if (!nextProps.input.value && this.props.input.value) {
			this.clearList();
		}
	}

	clearList = () => {
		this.setState(INITIAL_STATE);
	};

	render() {
		const {
			touched,
			error,
			warning,
			input: { onChange },
			label
		} = this.props;
		const props = {
			className: 'upload-wrapper',
			multiple: false,
			action: '//jsonplaceholder.typicode.com/posts/',
			onRemove: (file) => {
				this.setState(INITIAL_STATE);
				onChange(null);
			},
			onChange: ({ file, ...rest }) => {
				this.setState({ file });
				onChange(file);
			},
			beforeUpload: (file) => {
				this.setState({
					fileList: [file],
					file
				});
				return false;
			},
			fileList: this.state.fileList
		};

		return (
			<div className="field-upload-wrapper">
				{label && <label>{label}</label>}
				<Upload {...props}>
					<Button>
						<Icon type="upload" /> Select File
					</Button>
				</Upload>
				{touched &&
					((error && <span className="red-text">{error}</span>) ||
						(warning && <span className="red-text">{warning}</span>))}
			</div>
		);
	}
}
