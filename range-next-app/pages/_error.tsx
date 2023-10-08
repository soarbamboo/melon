import React from 'react';
interface ErrorPageProps {
    statusCode: any
}
export default class Error extends React.Component<ErrorPageProps> {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null;
        return { statusCode }
    }
    render() {
        return (
            <p>
                {this.props?.statusCode
                    ? `An error ${this.props.statusCode} occurred on server`
                    : 'An error occurred on client'}
            </p>
        )
    }
}