import React from 'react'
import { Spring, animated } from 'react-spring/renderprops'
import '../Preloader.css';

class Load extends React.Component {
    render() {
        return(
            <Spring
            from={{number: 0,}}
            to={{number: 100,}}
            config={{duration: 3000}}
        >
            {props => (
                <>
                <animated.span className="loadingnumber">
                    {Math.floor(props.number)}%
                </animated.span>
                <div className="loadingbar">
                    <div className="loading" style={{width: props.number + '%'}}>
                        
                    </div>
                </div>
                </>
            )}
        </Spring>
        )
    }
}

class Preloader extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({open: true})
        }, 5000)
    }

    render() {
        if (this.state.open === false) {
            return (
                <Spring
                    from={{opacity: 1}}
                    to={{opacity: 0}}
                    config={{delay: 3500, duration: 1000}}
                >
                    {props => (
                        <animated.div style={props}>
                            <Load />
                        </animated.div>
                    )}
                </Spring>
            )
        }

        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default Preloader